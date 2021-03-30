import React, { useState, useRef, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import ComponentNotice from './ComponentNotice';
const Picture = atomize.picture();
const Content = atomize.div();
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
	console.log(ComponentNotice);
	return <Wrapper width='100%' height='auto' {...props}>
		<Content ref={contentRef}>
			{React.Children.map(children, child => React.isValidElement(child) && React.cloneElement(child, {
				container: 'picture'
			}))}
		</Content>
		{isEmpty && <ComponentNotice message={'Перетащите сюда компоненты "Image" и "Source" (опционально)'} />}
	</Wrapper>;
};

export default atomize(PictureComponent)({
	name: 'Picture',
	description: {
		en: 'Container to offer alternative versions of an image for different display/device scenarios',
		ru: 'Контейнер для обеспечения оптимальной версии изображения для различных размеров экрана'
	}
});