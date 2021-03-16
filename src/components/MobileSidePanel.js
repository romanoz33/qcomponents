import React, { useState, useCallback } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Icon } from '@quarkly/widgets'; // В компоненте несколько иконок,
// чтобы не дублировать вынес отдельно

import { FiMenu, FiX } from "react-icons/fi";
const iconProps = {
	normal: {
		'category': 'fi',
		'icon': FiMenu,
		'size': '24px',
		'color': '--dark'
	},
	closed: {
		'category': 'fi',
		'icon': FiMenu
	},
	open: {
		'category': 'fi',
		'icon': FiX
	}
}; // Дизайны стилями отличаются 50/50,
// чтобы меньше дублировать вынес отдельно

const getContentStyles = ({
	breakpoint,
	menuPosition,
	animDuration,
	animFunction
}) => {
	const baseStyles = {
		'padding': menuPosition === 'near' ? '16px' : '48px 16px 24px',
		'width': '100%',
		'align-items': 'center',
		'justify-content': 'space-between',
		'flex-direction': 'row',
		[`${breakpoint}-width`]: 'initial',
		[`${breakpoint}-min-width`]: '280px',
		[`${breakpoint}-min-height`]: '32px',
		[`${breakpoint}-align-items`]: 'flex-start',
		[`${breakpoint}-flex-direction`]: 'column',
		[`${breakpoint}-box-shadow`]: '--xxl'
	};
	const animStyles = {
		appear: {
			open: {
				[`${breakpoint}-transition`]: `
					visibility ${animDuration} step-start,
					opacity ${animDuration} ${animFunction}
				`,
				[`${breakpoint}-visibility`]: 'visible',
				[`${breakpoint}-opacity`]: '1'
			},
			closed: {
				[`${breakpoint}-transition`]: `
					visibility ${animDuration} step-end,
					opacity ${animDuration} ${animFunction}
				`,
				[`${breakpoint}-visibility`]: 'hidden',
				[`${breakpoint}-opacity`]: '0'
			}
		},
		shift: {
			base: {
				[`${breakpoint}-transition`]: `
					transform ${animDuration} ${animFunction}
				`
			}
		}
	};

	switch (menuPosition) {
		case 'full':
			return {
				normal: { ...baseStyles,
					[`${breakpoint}-top`]: '0',
					[`${breakpoint}-left`]: '0',
					[`${breakpoint}-width`]: '100%',
					[`${breakpoint}-height`]: '100%',
					[`${breakpoint}-position`]: 'fixed'
				},
				open: animStyles.appear.open,
				closed: animStyles.appear.closed
			};

		case 'left':
		case 'right':
			return {
				normal: { ...baseStyles,
					[`${breakpoint}-top`]: '0',
					[`${breakpoint}-${menuPosition === 'left' ? 'right' : 'left'}`]: '100%',
					[`${breakpoint}-padding-top`]: '38px',
					[`${breakpoint}-width`]: '280px',
					[`${breakpoint}-height`]: '100%',
					[`${breakpoint}-position`]: 'fixed'
				},
				closed: { ...animStyles.shift.base,
					[`${breakpoint}-transform`]: 'translateX(0)'
				},
				open: { ...animStyles.shift.base,
					[`${breakpoint}-transform`]: `translateX(${menuPosition === 'left' ? '100%' : '-100%'})`
				}
			};

		case 'near':
			return {
				normal: { ...baseStyles,
					[`${breakpoint}-top`]: '100%',
					[`${breakpoint}-right`]: '0',
					[`${breakpoint}-position`]: 'absolute'
				},
				open: animStyles.appear.open,
				closed: animStyles.appear.closed
			};
	}
}; // Будет собираться по факту


let overrides = {}; // Собираем оверрайды по пропсам

const setOverrides = ({
	breakpoint,
	menuPosition,
	animDuration,
	animFunction
}) => ({
	'Button': {
		kind: 'Box',
		props: {
			display: 'none',
			[`${breakpoint}-display`]: 'inline-flex',
			[`${breakpoint}-flex`]: '0 0 auto',
			[`${breakpoint}-z-index`]: menuPosition === 'near' ? '2' : '1'
		}
	},
	'Button :open': {
		kind: 'Box'
	},
	'Button :closed': {
		kind: 'Box'
	},
	'Button Text': {
		kind: 'Text'
	},
	'Button Text :open': {
		kind: 'Text'
	},
	'Button Text :closed': {
		kind: 'Text'
	},
	'Button Icon': {
		kind: 'Icon',
		props: iconProps.normal
	},
	'Button Icon :open': {
		kind: 'Icon',
		props: iconProps.open
	},
	'Button Icon :closed': {
		kind: 'Icon',
		props: iconProps.closed
	},
	'Wrapper': {
		kind: 'Box',
		props: {
			'width': '100%',
			'height': '100%',
			'position': 'relative',
			[`${breakpoint}-top`]: '0',
			[`${breakpoint}-left`]: '0',
			[`${breakpoint}-position`]: menuPosition === 'near' ? 'absolute' : 'fixed'
		}
	},
	'Wrapper :open': {
		kind: 'Box',
		props: {
			[`${breakpoint}-transition`]: `visibility ${animDuration} step-start`,
			[`${breakpoint}-visibility`]: 'visible'
		}
	},
	'Wrapper :closed': {
		kind: 'Box',
		props: {
			[`${breakpoint}-transition`]: `visibility ${animDuration} step-end`,
			[`${breakpoint}-visibility`]: 'hidden'
		}
	},
	'Overlay': {
		kind: 'Box',
		props: {
			'background-color': menuPosition === 'near' ? 'transparent' : 'rgba(0,0,0, .5)',
			'position': 'relative',
			'display': 'none',
			[`${breakpoint}-top`]: '0',
			[`${breakpoint}-left`]: '0',
			[`${breakpoint}-position`]: 'fixed',
			[`${breakpoint}-display`]: 'block'
		}
	},
	'Overlay :open': {
		kind: 'Box',
		props: {
			[`${breakpoint}-transition`]: `
				visibility ${animDuration} step-start,
				opacity ${animDuration} ${animFunction}
			`,
			[`${breakpoint}-visibility`]: 'visible',
			[`${breakpoint}-opacity`]: '1'
		}
	},
	'Overlay :closed': {
		kind: 'Box',
		props: {
			[`${breakpoint}-transition`]: `
				visibility ${animDuration} step-end,
				opacity ${animDuration} ${animFunction}
			`,
			[`${breakpoint}-visibility`]: 'hidden',
			[`${breakpoint}-opacity`]: '0'
		}
	},
	'Content': {
		kind: 'Box',
		props: getContentStyles({
			breakpoint,
			menuPosition,
			animDuration,
			animFunction
		}).normal
	},
	'Content :open': {
		kind: 'Box',
		props: getContentStyles({
			breakpoint,
			menuPosition,
			animDuration,
			animFunction
		}).open
	},
	'Content :closed': {
		kind: 'Box',
		props: getContentStyles({
			breakpoint,
			menuPosition,
			animDuration,
			animFunction
		}).closed
	},
	'Cross': {
		kind: 'Icon',
		props: { ...iconProps.open,
			display: 'none',
			[`${breakpoint}-display`]: menuPosition === 'near' ? 'none' : 'block'
		}
	}
});

const MobileSidePanel = ({
	breakpoint,
	menuPosition,
	animDuration,
	animFunction,
	...props
}) => {
	const [isOpen, setOpen] = useState(false);
	const onToggle = useCallback(() => setOpen(!isOpen), [isOpen]);

	const onOpen = () => setOpen(true);

	const onClose = () => setOpen(false);

	overrides = setOverrides({
		breakpoint,
		menuPosition,
		animDuration,
		animFunction
	});
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	const statusOpen = menuPosition === 'near' && isOpen ? ':open' : ':closed';
	return <Box
		min-width="100%"
		min-height="0"
		align-items="center"
		position="relative"
		display="flex"
		z-index="5"
		{...rest}
	>
		<Box
			padding-right="3px"
			min-height="0"
			align-items="center"
			align-self="flex-end"
			position="relative"
			cursor="pointer"
			onPointerDown={menuPosition === 'near' ? onToggle : onOpen}
			{...override('Button', `Button ${statusOpen}`)}
		>
			<Text margin="0 .35em 0 0" font-size="14px" user-select="none" {...override('Button Text', `Button Text ${statusOpen}`)}>
				{override(`Button Text ${statusOpen}`).children || override('Button Text').children || 'menu'}
			</Text>
			<Icon {...override('Button Icon', `Button Icon ${statusOpen}`)} />
			      
		</Box>
		<Box display="flex" z-index="1" {...override('Wrapper', `Wrapper ${isOpen ? ':open' : ':closed'}`)}>
			<Box
				width="100%"
				height="100%"
				z-index="1"
				onPointerDown={onClose}
				{...override('Overlay', `Overlay ${isOpen ? ':open' : ':closed'}`)}
			/>
			<Box
				max-width="100vw"
				max-height="100vh"
				background-color="white"
				box-sizing="border-box"
				display="flex"
				z-index="2"
				{...override('Content', `Content ${isOpen ? ':open' : ':closed'}`)}
			>
				<Icon
					top="16px"
					right="16px"
					position="absolute"
					cursor="pointer"
					onPointerDown={onClose}
					{...override('Cross')}
				/>
				{children}
			</Box>
		</Box>
		    
	</Box>;
};

const propInfo = {
	breakpoint: {
		title: 'Mobile version breakpoint',
		control: 'text',
		type: 'string',
		category: 'Main',
		weight: 1
	},
	menuPosition: {
		title: 'Mobile panel position',
		control: 'radio-group',
		variants: ['full', 'left', 'right', 'near'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	animDuration: {
		title: 'Show/hide Duration',
		control: 'text',
		type: 'string',
		category: 'Animation',
		weight: 1
	},
	animFunction: {
		title: 'Show/hide Easing Function',
		control: 'select',
		variants: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'],
		type: 'string',
		category: 'Animation',
		weight: 1
	}
};
const defaultProps = {
	breakpoint: 'md',
	menuPosition: 'near',
	animDuration: '.3s',
	animFunction: 'ease'
};
export default Object.assign(MobileSidePanel, {
	title: 'Mobile Side Panel',
	description: {
		en: 'Awesome Mobile Side Panel'
	},
	overrides,
	propInfo,
	defaultProps
});