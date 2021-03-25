import React, { useState } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Icon, Button } from '@quarkly/widgets';
import { FiX } from "react-icons/fi";
const overrides = {
	'Popup': {
		kind: 'Box',
		props: {
			'top': '0',
			'left': '0',
			'width': '100%',
			'height': '100%',
			'align-items': 'center',
			'justify-content': 'center',
			'display': 'flex',
			'position': 'fixed',
			'z-index': '105'
		}
	},
	'Popup :open': {
		kind: 'Box',
		props: {
			'pointer-events': 'all',
			'visibility': 'visible',
			'opacity': '1'
		}
	},
	'Popup :closed': {
		kind: 'Box',
		props: {
			'pointer-events': 'none',
			'visibility': 'hidden',
			'opacity': '0'
		}
	},
	'Wrapper': {
		kind: 'Box',
		props: {
			'padding-top': '40px',
			'min-width': '320px',
			'background': '#FFFFFF',
			'box-shadow': `
				0 14px 28px rgba(0,0,0,0.25),
				0 10px 10px rgba(0,0,0,0.22)
			`,
			'border-radius': '4px',
			'position': 'relative',
			'overflow': 'hidden',
			'z-index': '107'
		}
	},
	'Wrapper :open': {
		kind: 'Box',
		props: {
			'transform': 'scale(1)'
		}
	},
	'Wrapper :closed': {
		kind: 'Box',
		props: {
			'transform': 'scale(.7)'
		}
	},
	'Content': {
		kind: 'Box',
		props: {
			'min-height': '0px'
		}
	},
	'Overlay': {
		kind: 'Box',
		props: {
			'top': '0',
			'left': '0',
			'width': '100%',
			'height': '100%',
			'background': 'rgba(0,0,0, .3)',
			'position': 'fixed',
			'z-index': '106'
		}
	},
	'Button Close': {
		kind: 'Icon',
		props: {
			'category': 'fi',
			'icon': FiX,
			'size': '24px',
			'color': '--dark',
			'top': '0',
			'right': '0',
			'padding': '8px',
			'background': 'none',
			'user-select': 'none',
			'cursor': 'pointer',
			'position': 'absolute',
			'z-index': '109'
		}
	},
	'Button Open': {
		kind: 'Button',
		props: {
			'children': 'Open Popup'
		}
	}
};

const Popup = ({
	animDuration,
	animFunction,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	const [isOpen, setOpen] = useState(true);
	const [isEmpty, setEmpty] = useState(true);
	const popupTransition = isOpen ? `visibility ${animDuration} step-start, opacity ${animDuration} ${animFunction}` : `visibility ${animDuration} step-end, opacity ${animDuration} ${animFunction}`;
	const wrapperTransition = `transform ${animDuration} ${animFunction}`;

	const onOpen = () => setOpen(true);

	const onClose = () => setOpen(false);

	return <Box {...rest}>
		<Button onPointerDown={onOpen} {...override('Button Open')}>
			{override('Button Open').children}
		</Button>
		<Box {...override('Popup', 'Popup header', 'Popup 10', `Popup ${isOpen ? ':open' : ':closed'}`)} transition={popupTransition}>
			<Box onPointerDown={onClose} {...override('Overlay', `Overlay ${isOpen ? ':open' : ':closed'}`)} />
			<Box {...override('Wrapper', `Wrapper ${isOpen ? ':open' : ':closed'}`)} transition={wrapperTransition}>
				<Icon {...override('Button Close')} onPointerDown={onClose} />
				<Box {...override('Content')}>
					{children}
				</Box>
				{isEmpty && <Box
					padding="16px"
					font="--font-base"
					font-style="italic"
					color="--color-grey"
					background-color="--color-light"
					border="1px dashed --color-lightD2"
				>
					Drag component here
				</Box>}
			</Box>
		</Box>
	</Box>;
};

const propInfo = {
	animDuration: {
		title: 'Animation duration (in seconds)',
		control: 'input',
		type: 'number',
		category: 'Main',
		weight: 1
	},
	animFunction: {
		title: 'Animation function',
		control: 'select',
		variants: [{
			title: 'Linear',
			value: 'linear'
		}],
		type: 'text',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	animDuration: '0.15s',
	animFunction: 'linear'
};
export default Object.assign(Popup, {
	propInfo,
	defaultProps,
	overrides
});