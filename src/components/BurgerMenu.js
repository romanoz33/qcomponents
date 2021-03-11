import React, { useState, useCallback } from 'react';
import { useOverrides, Menu } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';
import { FiMenu, FiX } from "react-icons/fi";
const overrides = {
	'icon': {
		'kind': 'Icon',
		'props': {
			'category': 'fi',
			'icon': FiMenu,
			'size': '32px',
			'color': '--dark',
			'min-width': '42px',
			'min-height': '42px',
			'background': 'none',
			'user-select': 'none',
			'cursor': 'pointer',
			'position': 'relative',
			'z-index': '102'
		}
	},
	'icon-close': {
		'kind': 'Icon',
		'props': {
			'category': 'fi',
			'icon': FiMenu
		}
	},
	'icon-open': {
		'kind': 'Icon',
		'props': {
			'category': 'fi',
			'icon': FiX
		}
	},
	'menu': {
		'kind': 'Menu',
		'props': {
			'background': '--color-light',
			'position': 'relative',
			'z-index': '101'
		}
	},
	'menu-open': {
		'kind': 'Menu',
		'props': {}
	},
	'menu-close': {
		'kind': 'Menu',
		'props': {
			'display': 'none'
		}
	}
};

const BurgerMenu = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [isOpen, setOpen] = useState(false);
	const handlerOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
	return <Box {...rest}>
		      
		<Icon {...override('icon', `icon-${isOpen ? 'open' : 'close'}`)} onPointerDown={handlerOpen} />
		      
		<Menu {...override('menu', `menu-${isOpen ? 'open' : 'close'}`)} />
		    
	</Box>;
};

export default Object.assign(BurgerMenu, {
	overrides
});