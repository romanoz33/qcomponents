import React from 'react';
import atomize from '@quarkly/atomize';
const Source = atomize.source();
const Message = atomize.div();
const Empty = atomize.div();

const SourceComponent = ({
	container,
	src,
	srcSet,
	typeMedia,
	typePicture,
	codecs,
	mediaInput,
	mediaSelect,
	sizes,
	children,
	...props
}) => {
	let type = '';

	if (container !== 'picture') {
		type = `${typeMedia || ''}${typeMedia && codecs ? `; codecs='${codecs}'` : ''}`;
	} else {
		type = typePicture || '';
	}

	const Wrapper = container ? Source : Empty;
	return <Wrapper
		{...props}
		src={src}
		srcSet={srcSet}
		type={type}
		media={container !== 'picture' ? mediaInput || mediaSelect : ''}
		sizes={container !== 'picture' ? sizes : ''}
	>
		{!container && <Message
			padding="16px"
			font="--font-base"
			font-style="italic"
			color="--color-grey"
			background-color="--color-light"
			border="1px dashed --color-lightD2"
		>
			Этот компонент должен быть внутри "Picture", "Audio" или "Video"
		</Message>}
	</Wrapper>;
};

const propInfo = {
	src: {
		title: 'Src',
		description: {
			en: 'Audio/video file address',
			ru: 'Адрес аудио/видео файла'
		},
		control: 'input',
		type: 'string',
		category: 'Audio / Video',
		weight: 1
	},
	typeMedia: {
		title: 'Type',
		description: {
			en: 'MIME content type',
			ru: 'MIME-тип контента'
		},
		control: 'select',
		variants: ['video/mp4', 'video/webm', 'video/ogg', 'audio/mpeg', 'audio/midi', 'audio/wav', 'audio/ogg'],
		type: 'string',
		category: 'Audio / Video',
		weight: 1
	},
	codecs: {
		title: 'Codecs',
		description: {
			en: 'Video and audio codecs (comma-separated, optional)',
			ru: 'Видео и аудиокодеки (через запятую, опционально)'
		},
		control: 'input',
		type: 'string',
		category: 'Audio / Video',
		weight: 1
	},
	srcSet: {
		title: 'Srcset',
		description: {
			en: 'One or more image sources with descriptors',
			ru: 'Один или несколько источников изображений с дескрипторами'
		},
		control: 'srcSet',
		multiply: true,
		type: 'string',
		category: 'Picture',
		weight: 1
	},
	sizes: {
		title: 'Sizes',
		description: {
			en: 'Image slot sizes from srcSet for different breakpoints',
			ru: 'Размеры контейнера изображения из srcSet для различных брейкпоинтов'
		},
		control: 'sizes',
		multiply: true,
		type: 'string',
		category: 'Picture',
		weight: 1
	},
	mediaSelect: {
		title: 'Device',
		description: {
			en: 'General category of the device',
			ru: 'Общая категория устройства'
		},
		control: 'select',
		variants: ['all', 'braille', 'handheld', 'print', 'screen', 'speech', 'projection', 'tty', 'tv'],
		category: 'Picture',
		weight: .4
	},
	mediaInput: {
		title: 'Media query',
		description: {
			en: 'Media query of the resource\'s intended media',
			ru: 'Медиа-запрос, согласно которому будет выводиться изображение'
		},
		control: 'input',
		category: 'Picture',
		weight: .6
	},
	typePicture: {
		title: 'Type',
		description: {
			en: 'MIME image type',
			ru: 'MIME-тип изображения'
		},
		control: 'select',
		variants: ['image/webp', 'image/png', 'image/bmp', 'image/jpeg', 'image/gif', 'image/tiff', 'image/pict'],
		category: 'Picture',
		weight: 1
	}
};
const defaultProps = {
	mediaSelect: 'all'
};
export default atomize(SourceComponent)({
	name: 'Source',
	description: {
		en: 'Indicates several media resources for Picture, Video, and Audio components',
		ru: 'Указывает несколько медиа-ресурсов для компонентов Picture, Video и Audio'
	},
	propInfo
}, defaultProps);