import React from 'react';
import atomize from '@quarkly/atomize';

const Picture = ({
	children,
	...props
}) => {
	return <picture width='100%' height='auto' {...props}>
		{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
			container: 'picture'
		}) : child)}
	</picture>;
};

export default atomize(Picture)({
	name: 'Picture',
	description: {
		en: 'Container to offer alternative versions of an image for different display/device scenarios',
		ru: 'Контейнер для обеспечения оптимальной версии изображения для различных размеров экрана'
	}
});