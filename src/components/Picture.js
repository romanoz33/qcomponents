import React, { useState, useRef, useEffect } from 'react';
import atomize from '@quarkly/atomize';
const Picture = atomize.picture();
const Content = atomize.div();
const DropArea = atomize.div();
const Empty = atomize.div();

const PictureComponent = ({
	children,
	...props
}) => {
	const contentRef = useRef(null);
	const [isEmpty, setEmpty] = useState(false);
	useEffect(() => {
		setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
	}, [children]);
	const Wrapper = !isEmpty ? Picture : Empty;
	return <Wrapper width='100%' height='auto' {...props}>
		<Content ref={contentRef}>
			{React.Children.map(children, child => React.isValidElement(child) && React.cloneElement(child, {
				container: 'picture'
			}))}
		</Content>
		{isEmpty && <DropArea
			padding="16px"
			font="--font-base"
			font-style="italic"
			color="--color-grey"
			background-color="--color-light"
			border="1px dashed --color-lightD2"
		>
			Drag "Image" and "Source" (опционально) components here
		</DropArea>}
	</Wrapper>;
};

export default atomize(PictureComponent)({
	name: 'Picture',
	description: {
		en: 'Container to offer alternative versions of an image for different display/device scenarios',
		ru: 'Контейнер для обеспечения оптимальной версии изображения для различных размеров экрана'
	}
});