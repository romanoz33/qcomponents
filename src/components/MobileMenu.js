import React, { useState, useCallback } from 'react';
import { useOverrides, Menu } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';
import { FiMenu, FiX } from "react-icons/fi";
const iconProps = {
	normal: {
		'category': 'fi',
		'icon': FiMenu,
		'size': '32px',
		'color': '--dark',
		'background': 'none',
		'user-select': 'none',
		'cursor': 'pointer'
	},
	close: {
		'category': 'fi',
		'icon': FiMenu
	},
	open: {
		'category': 'fi',
		'icon': FiX
	}
};
let overrides = {};

const setOverrides = media => ({
	'button': {
		'kind': 'Box',
		'props': {
			'min-width': '42px',
			'min-height': '42px',
			'align-items': 'center',
			'justify-content': 'center',
			'position': 'relative',
			'cursor': 'pointer',
			'display': 'none',
			[`${media}-display`]: 'inline-flex'
		}
	},
	'button-close': {
		'kind': 'Box',
		'props': {}
	},
	'button-open': {
		'kind': 'Box',
		'props': {}
	},
	'toggle': {
		'kind': 'Icon',
		'props': iconProps.normal
	},
	'toggle-close': {
		'kind': 'Icon',
		'props': iconProps.close
	},
	'toggle-open': {
		'kind': 'Icon',
		'props': iconProps.open
	},
	'cross': {
		'kind': 'Icon',
		'props': { ...iconProps.normal,
			'top': '0px',
			'right': '0px',
			'padding': '16px',
			'position': 'absolute',
			'display': 'none',
			[`${media}-display`]: 'flex'
		}
	},
	'cross-close': {
		'kind': 'Icon',
		'props': iconProps.close
	},
	'cross-open': {
		'kind': 'Icon',
		'props': iconProps.open
	},
	'wrapper': {
		'kind': 'Box',
		'props': {
			[`${media}-top`]: '0',
			[`${media}-left`]: '0',
			[`${media}-padding`]: '16px',
			[`${media}-width`]: '100%',
			[`${media}-height`]: '100%',
			[`${media}-max-height`]: '100vh',
			[`${media}-background`]: 'white',
			[`${media}-align-items`]: 'center',
			[`${media}-justify-content`]: 'center',
			[`${media}-box-sizing`]: 'border-box',
			[`${media}-position`]: 'fixed',
			[`${media}-display`]: 'flex',
			[`${media}-overflow-x`]: 'hidden',
			[`${media}-overflow-y`]: 'auto',
			[`${media}-z-index`]: '101'
		}
	},
	'wrapper-open': {
		'kind': 'Box',
		'props': {}
	},
	'wrapper-close': {
		'kind': 'Box',
		'props': {
			[`${media}-display`]: 'none'
		}
	},
	'menu': {
		'kind': 'Menu',
		'props': {
			'position': 'relative',
			'display': 'flex',
			'flex-direction': 'row',
			[`${media}-flex-direction`]: 'column',
			'justify-content': 'flex-start',
			[`${media}-justify-content`]: 'center',
			'align-items': 'center'
		}
	},
	'menu-open': {
		'kind': 'Menu',
		'props': {}
	},
	'menu-close': {
		'kind': 'Menu',
		'props': {
			[`${media}-display`]: 'none'
		}
	}
});

const propInfo = {
	media: {
		title: 'Mobile version breakpoint',
		control: 'text',
		type: 'string',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	media: 'md'
};

const MobileMenu = ({
	media,
	...props
}) => {
	const [isOpen, setOpen] = useState(false);
	const handlerOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
	overrides = setOverrides(media);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	return <Box {...rest} display="flex">
		      
		<Box {...override('button', `button-${isOpen ? 'open' : 'close'}`)} onPointerDown={handlerOpen}>
			{children}
			        
			<Icon {...override('toggle', `toggle-${isOpen ? 'open' : 'close'}`)} />
			      
		</Box>
		<Box {...override('wrapper', `wrapper-${isOpen ? 'open' : 'close'}`)}>
			  
			<Icon {...override('cross', `cross-${isOpen ? 'open' : 'close'}`)} onPointerDown={handlerOpen} />
			<Menu {...override('menu', `menu-${isOpen ? 'open' : 'close'}`)} />
		</Box>
		    
	</Box>;
};

Object.assign(MobileMenu, {
	propInfo,
	overrides,
	defaultProps
});
export default MobileMenu;