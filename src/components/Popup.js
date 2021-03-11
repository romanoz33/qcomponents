import React, { useState, useCallback } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Icon, Button } from '@quarkly/widgets';
import { FiX } from "react-icons/fi";
const duration = '.15s';
const overrides = {
	'button': {
		'kind': 'Button'
	},
	'popup': {
		'kind': 'Box',
		'props': {
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
	'popup-open': {
		'kind': 'Box',
		'props': {
			'transition': `
				visibility 0s linear 0s,
				opacity ${duration} linear 0s
			`,
			'pointer-events': 'all',
			'visibility': 'visible',
			'opacity': '1'
		}
	},
	'popup-close': {
		'kind': 'Box',
		'props': {
			'transition': `
				visibility 0s linear ${duration},
				opacity ${duration} linear 0s
			`,
			'pointer-events': 'none',
			'visibility': 'hidden',
			'opacity': '0'
		}
	},
	'wrapper': {
		'kind': 'Box',
		'props': {
			'width': '100%',
			'max-width': '18rem',
			'background': '--color-light',
			'box-shadow': `
				0 14px 28px rgba(0,0,0,0.25),
				0 10px 10px rgba(0,0,0,0.22)
			`,
			'border-radius': '.25rem',
			'position': 'relative',
			'z-index': '107'
		}
	},
	'wrapper-open': {
		'kind': 'Box',
		'props': {
			'transition': `
				transform ${duration} linear 0s
			`,
			'transform': 'scale(1)'
		}
	},
	'wrapper-close': {
		'kind': 'Box',
		'props': {
			'transition': `
				transform ${duration} linear 0s
			`,
			'transform': 'scale(.7)'
		}
	},
	'content': {
		'kind': 'Box',
		'props': {
			'margin-top': '2.5rem',
			'min-height': '5rem',
			'position': 'relative',
			'z-index': '108'
		}
	},
	'overlay': {
		'kind': 'Box',
		'props': {
			'top': '0',
			'left': '0',
			'width': '100%',
			'height': '100%',
			'background': 'rgba(0,0,0,.3)',
			'position': 'fixed',
			'z-index': '106'
		}
	},
	'overlay-open': {
		'kind': 'Box',
		'props': {}
	},
	'overlay-close': {
		'kind': 'Box',
		'props': {}
	},
	'close': {
		'kind': 'Icon',
		'props': {
			'category': 'fi',
			'icon': FiX,
			'size': '24px',
			'color': '--dark',
			'top': '0',
			'right': '0',
			'padding': '.5rem',
			'background': 'none',
			'user-select': 'none',
			'cursor': 'pointer',
			'position': 'absolute',
			'z-index': '109'
		}
	}
};
const defaultProps = {};

const Popup = props => {
	const [isOpen, setOpen] = useState(false);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	return <Box {...rest}>
		<Button {...override('button')} onPointerDown={() => setOpen(true)}>
			Open popup
		</Button>
		<Box {...override('popup', `popup-${isOpen ? 'open' : 'close'}`)}>
			<Box {...override('overlay', `overlay-${isOpen ? 'open' : 'close'}`)} onPointerDown={() => setOpen(false)} />
			<Box {...override('wrapper', `wrapper-${isOpen ? 'open' : 'close'}`)}>
				<Icon {...override('close')} onPointerDown={() => setOpen(false)} />
				<Box {...override('content')}>
					{children}
				</Box>
			</Box>
		</Box>
	</Box>;
};

export default Object.assign(Popup, {
	overrides,
	defaultProps
});