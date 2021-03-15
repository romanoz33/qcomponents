import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
import Item from './GalleryItem';
import Lightbox from './GalleryLightBox';
const windowHeightSize = 1.5;
const defaultPreviewSrc = 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=170667a&w=0&h=sCVQ6Qaut-zK8EdXE4s70nmmXRQeK8FmooCqvE32spQ=';
const defaultFullSrc = 'http://placehold.it/800';

const loadImage = url => new Promise(resolve => {
	const img = document.createElement('img');
	img.addEventListener('load', () => resolve(img));
	img.src = url;
});

const overrides = {
	'Wrapper': {
		'kind': 'Box'
	},
	'Item': {
		'kind': 'Item',
		'props': {
			'cursor': 'pointer'
		}
	},
	'Lightbox': {
		'kind': 'Lightbox',
		'props': {
			'height': 0,
			'min-height': 0
		}
	},
	'Button More': {
		'kind': 'Button',
		'props': {
			'margin': '0 auto',
			'display': 'block',
			'margin-top': '20px'
		}
	},
	'Button More :Visible': {
		'kind': 'Button',
		'props': {
			'display': 'block'
		}
	},
	'Button More :Hidden': {
		'kind': 'Button',
		'props': {
			'display': 'none'
		}
	}
};

const changeStrInNumber = str => {
	const reg = /^[\d.,]+$/;
	const newStr = str.replace(/\s/g, '');

	if (reg.test(newStr)) {
		return `${parseInt(newStr)}px`;
	}

	return `${newStr}`;
};

const getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

const Gallery = ({
	galleryItemCountProp,
	columnsCountProp,
	lgColumnsCountProp,
	mdColumnsCountProp,
	smColumnsCountProp,
	ratioFormatsProp,
	loaderFormatProp,
	autoFillInProp,
	imagesMaxWidthProp,
	imagesMinWidthProp,
	borderWidthProp,
	offScrollProp,
	previewLoaderStatusProp,
	fullLoaderStatusProp,
	...props
}) => {
	const galleryRef = useRef();
	const picturesParamsRef = useRef([]);
	const lastRan = useRef(Date.now());
	const scrollLoadCountRef = useRef(1);
	const clickLoadCountRef = useRef(1);
	const [isOpen, setOpen] = useState(false);
	const [isBigImage, setBigImage] = useState(false);
	const [isZoom, setZoom] = useState(false); // Храним Размеры превьюшек для выбранного соотношения сторон

	const [ratioSizes, setRatioSizes] = useState({}); // Статус кнопки дозагрузки

	const [isButtonVisible, setButtonVisible] = useState(loaderFormatProp === 'По кнопке'); // Кол-во изображений, которые нужно загружать

	const [itemsLoadingCount, setItemsLoadingCount] = useState(); // Нажата та ли картинка

	const [clicked, setClicked] = useState(false); // Все параметры определенной картинки

	const [somePictureParams, setSomePictureParams] = useState({}); // Размеры галереи

	const [galleryItemWidth, setGalleryItemWidth] = useState();
	picturesParamsRef.current = [];

	const addPictureParams = (index, data) => {
		picturesParamsRef.current[index] = {
			'src': data.srcFull,
			'srcset': data.srcSetFull,
			'sizes': data.sizesFull,
			'alt': data.altFull,
			'title': data.titleFull,
			'objectFit': data.objectFitFull,
			'objectPosition': data.objectPositionFull,
			'loading': data.loadingFull
		};
	}; // Функция throttled эффекта


	const throttledEffect = (callback, delay, deps = []) => {
		lastRan.current = Date.now();
		const handler = setTimeout(function () {
			if (Date.now() - lastRan.current >= delay) {
				callback();
				lastRan.current = Date.now();
			}
		}, delay - (Date.now() - lastRan.current));
		return () => clearTimeout(handler);
	}; // Получаем ширину ячейки 


	const getItemSize = galleryWidth => {
		return (galleryWidth - (columnsCountProp - 1) * borderWidthProp) / columnsCountProp;
	}; // Функция вызова при изменении размера Галереи целиком


	const handleResize = el => {
		throttledEffect(() => {
			const galleryWidth = el[0].contentRect.width;
			const imageWidth = getItemSize(galleryWidth);
			setGalleryItemWidth(imageWidth);
		}, 200, []);
	};

	useEffect(() => {
		const resizer = new ResizeObserver(handleResize);
		resizer.observe(galleryRef.current);
		return () => {
			resizer.unobserve(galleryRef.current);
		};
	}, [galleryRef.current]);
	const galleryItemCountNumb = useMemo(() => {
		return parseInt(galleryItemCountProp);
	}, [galleryItemCountProp]); // Условие, чтобы количество Item было не меньше 0.
	// Иначе получаем ошибку при переборе массива

	useEffect(() => {
		if (galleryItemCountProp > 0) {
			galleryItemCountProp = galleryItemCountNumb;
		} else {
			galleryItemCountProp = 0;
		}
	}, [galleryItemCountProp]); // Получаем количество картинок, котороые помещаются в видимую область

	const getItemCountOnView = useCallback(galleryWidth => {
		// Высота 1.5 окна
		const visibleSpace = window.innerHeight * windowHeightSize; // Кол-во рядов. Округляем в большую сторону 

		const visibleRows = Math.ceil(visibleSpace / getItemSize(galleryWidth)); // Возвращаем кол-во изображений

		const items = visibleRows * columnsCountProp;

		if (items > galleryItemCountNumb) {
			return galleryItemCountNumb;
		}

		return items;
	}, [galleryItemCountProp, columnsCountProp, borderWidthProp, loaderFormatProp, ratioFormatsProp, autoFillInProp, imagesMaxWidthProp, imagesMinWidthProp]); // Функция дозагрузки по клику или скролу

	const loadMore = useCallback(type => {
		const gallerySizes = galleryRef.current.getBoundingClientRect();
		const items = getItemCountOnView(gallerySizes.width);
		let newItems = '';
		if (type === 'scroll') newItems = items + items * scrollLoadCountRef.current;
		if (type === 'click') newItems = items + items * clickLoadCountRef.current;

		if (newItems < galleryItemCountProp) {
			setItemsLoadingCount(newItems);
			if (type === 'scroll') scrollLoadCountRef.current = scrollLoadCountRef.current + 1;
			if (type === 'click') clickLoadCountRef.current = clickLoadCountRef.current + 1;
		} else {
			setItemsLoadingCount(galleryItemCountNumb);
			setButtonVisible(false);
		}
	}, [galleryItemCountProp]);

	const loadOnClick = () => {
		const gallerySizes = galleryRef.current.getBoundingClientRect();

		if (gallerySizes.bottom - window.innerHeight / 2 < window.innerHeight) {
			loadMore('click');
		}
	};

	const loadOnScroll = () => {
		const gallerySizes = galleryRef.current.getBoundingClientRect();
		const items = getItemCountOnView(gallerySizes.width);
		const newItems = items + items * scrollLoadCountRef.current;

		if (gallerySizes.bottom - window.innerHeight / 2 < window.innerHeight) {
			loadMore('scroll');

			if (newItems > galleryItemCountNumb) {
				window.removeEventListener('scroll', loadOnScroll);
				window.removeEventListener('resize', loadOnScroll);
				window.removeEventListener('orientationchange', loadOnScroll);
			}
		}
	};

	useEffect(() => {
		const gallerySizes = galleryRef.current.getBoundingClientRect();
		const items = getItemCountOnView(gallerySizes.width);
		const {
			mode
		} = getAPI();

		if (mode === 'development') {
			if (loaderFormatProp === 'Все сразу' || loaderFormatProp === 'При скроле') {
				setItemsLoadingCount(galleryItemCountNumb);
				setButtonVisible(false);
			} else if (loaderFormatProp === 'По кнопке') {
				setItemsLoadingCount(items);
				setButtonVisible(items !== galleryItemCountNumb);
			}
		} else if (mode === 'production') {
			if (loaderFormatProp === 'Все сразу') {
				setItemsLoadingCount(galleryItemCountNumb);
				setButtonVisible(false);
			} else if (loaderFormatProp === 'При скроле') {
				window.addEventListener('scroll', loadOnScroll);
				window.addEventListener('resize', loadOnScroll);
				window.addEventListener('orientationchange', loadOnScroll);
				setButtonVisible(false);
				setItemsLoadingCount(items);
			} else if (loaderFormatProp === 'По кнопке') {
				setItemsLoadingCount(items);
				setButtonVisible(items !== galleryItemCountNumb);
			}

			;
		}

		;
		return () => {
			window.removeEventListener('scroll', loadOnScroll);
			window.removeEventListener('resize', loadOnScroll);
			window.removeEventListener('orientationchange', loadOnScroll);
		};
	}, [galleryItemCountProp, columnsCountProp, borderWidthProp, loaderFormatProp, ratioFormatsProp, autoFillInProp, imagesMaxWidthProp, imagesMinWidthProp]);
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const items = Array(itemsLoadingCount).fill().map((item, index) => <Item
		{...override(`Item`, `Item ${index}`)}
		key={`${rest['data-qid']}-item-${index}`}
		index={index}
		loadImage={loadImage}
		addPictureParams={addPictureParams}
		setOpen={setOpen}
		galleryItemWidth={galleryItemWidth}
		ratioSizes={ratioSizes}
		setRatioSizes={setRatioSizes}
		setSomePictureParams={setSomePictureParams}
		setClicked={setClicked}
		ratioFormatsProp={ratioFormatsProp}
		imagesMinWidthProp={imagesMinWidthProp}
		imagesMaxWidthProp={imagesMaxWidthProp}
		autoFillInProp={autoFillInProp}
		columnsCountProp={columnsCountProp}
		borderWidthProp={borderWidthProp}
		previewLoaderStatusProp={previewLoaderStatusProp}
		defaultPreviewSrc={defaultPreviewSrc}
		defaultFullSrc={defaultFullSrc}
	/>);
	return <Box {...rest}>
		<Box
			ref={galleryRef}
			display='grid'
			grid-gap={`${changeStrInNumber(borderWidthProp)}`}
			grid-auto-flow={autoFillInProp ? 'dense' : 'row'}
			grid-template-columns={`repeat(${columnsCountProp}, 
          minmax(${changeStrInNumber(imagesMinWidthProp)}, 
          ${changeStrInNumber(imagesMaxWidthProp)}))`} // lg-grid-template-columns={
			//   `repeat(${lgColumnsCountProp}, 
			//   minmax(${changeStrInNumber(imagesMinWidthProp)}, 
			//   ${changeStrInNumber(imagesMaxWidthProp)}))`
			// }
			// md-grid-template-columns={
			//   `repeat(${mdColumnsCountProp}, 
			//   minmax(${changeStrInNumber(imagesMinWidthProp)},  
			//   ${changeStrInNumber(imagesMaxWidthProp)}))`
			// }
			// sm-grid-template-columns={
			//   `repeat(${smColumnsCountProp}, 
			//   minmax(${changeStrInNumber(imagesMinWidthProp)}, 
			//   ${changeStrInNumber(imagesMaxWidthProp)}))`
			// }

		>
			{items}
		</Box>
		<Button onClick={loadOnClick} {...override(`Button More`, `Button More ${isButtonVisible ? ':Visible' : ':Hidden'}`)}>
			 
				Загрузить еще 
        
		</Button>
		<Lightbox
			{...override(`Lightbox`)}
			loadImage={loadImage}
			somePictureParams={somePictureParams}
			setSomePictureParams={setSomePictureParams}
			isOpen={isOpen}
			setOpen={setOpen}
			isBigImage={isBigImage}
			setBigImage={setBigImage}
			isZoom={isZoom}
			setZoom={setZoom}
			offScrollProp={offScrollProp}
			clicked={clicked}
			setClicked={setClicked}
			defaultFullSrc={defaultFullSrc}
			fullLoaderStatusProp={fullLoaderStatusProp}
		/>
		 
	</Box>;
};

const propInfo = {
	galleryItemCountProp: {
		title: 'Количество изображений',
		description: {
			en: 'Количество изображений галереи'
		},
		control: 'input',
		category: 'Gallery',
		weight: 1
	},
	columnsCountProp: {
		title: 'Количество столбцов',
		description: {
			en: 'Укажите количество столбцов для изображений'
		},
		control: 'input',
		category: 'Gallery',
		weight: 1
	},
	// lgColumnsCountProp: {
	// 	title: 'lg',
	// 	control: 'input',
	// 	category: 'Gallery',
	// 	weight: .3
	// },
	// mdColumnsCountProp: {
	// 	title: 'md',
	// 	control: 'input',
	// 	category: 'Gallery',
	// 	weight: .3
	// },
	// smColumnsCountProp: {
	// 	title: 'sm',
	// 	control: 'input',
	// 	category: 'Gallery',
	// 	weight: .3
	// },
	borderWidthProp: {
		title: 'Ширина отступов',
		description: {
			en: 'Укажите ширину отступов'
		},
		control: 'input',
		category: 'Gallery',
		weight: 1
	},
	autoFillInProp: {
		title: 'Атоматиечски заполнять свободные места',
		description: {
			en: 'Если есть свободное пространство, заполнить его изображением'
		},
		control: 'checkbox',
		category: 'Gallery',
		weight: 1
	},
	loaderFormatProp: {
		title: 'Варианты загрузки изображений',
		description: {
			en: 'Как загружать изображения?'
		},
		control: 'radio-group',
		variants: ['Все сразу', 'При скроле', 'По кнопке'],
		category: 'images',
		weight: 1
	},
	ratioFormatsProp: {
		title: 'Соотношение сторон',
		description: {
			en: 'Выберите соотношение сторон изображений'
		},
		control: 'select',
		variants: ['auto', '16:9', '4:3', '3:2', '1:1', '2:3', '3:4', '9:16'],
		category: 'images',
		weight: 1
	},
	imagesMaxWidthProp: {
		title: 'Максимальная ширина изображений',
		description: {
			en: 'Укажите максимальную ширину изображений'
		},
		control: 'input',
		category: 'images',
		weight: 1
	},
	imagesMinWidthProp: {
		title: 'Минимальная ширина изображений',
		description: {
			en: 'Укажите минимальную ширину изображений'
		},
		control: 'input',
		category: 'images',
		weight: 1
	},
	previewLoaderStatusProp: {
		title: 'Отключить лоадер для превью',
		description: {
			en: 'Отключить лоадер для превью изображений'
		},
		control: 'checkbox',
		category: 'images',
		weight: 1
	},
	offScrollProp: {
		title: 'Отключить скролл',
		description: {
			ru: 'Отключить скролл при показе полного изображения'
		},
		control: 'checkbox',
		category: 'Lightbox',
		weight: 1
	},
	fullLoaderStatusProp: {
		title: 'Отключить лоадер для полной картинки',
		description: {
			en: 'Отключить лоадер для полной картинки'
		},
		control: 'checkbox',
		category: 'Lightbox',
		weight: 1
	}
};
const defaultProps = {
	galleryItemCountProp: 8,
	columnsCountProp: 4,
	lgColumnsCountProp: 3,
	mdColumnsCountProp: 2,
	smColumnsCountProp: 1,
	ratioFormatsProp: 'auto',
	loaderFormatProp: 'Все сразу',
	autoFillInProp: true,
	imagesAutoResizeProp: false,
	previewLoaderStatusProp: false,
	fullLoaderStatusProp: false,
	imagesMinWidthProp: '80',
	imagesMaxWidthProp: '1fr',
	borderWidthProp: '10',
	offScrollProp: true
};
Object.assign(Gallery, {
	overrides,
	propInfo,
	defaultProps
});
export default Gallery;