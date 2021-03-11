import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from "@quarkly/widgets";
const overrides = {
	'Tooltip wrapper': {
		kind: 'Box',
		props: {
			'display': 'flex',
			'text-align': "center",
			'justify-content': 'center',
			'align-items': 'center',
			'position': 'absolute',
			'width': 'max-content',
			'transition': 'opacity .8s, visibility .8s'
		}
	},
	'Tooltip text': {
		kind: 'Text',
		props: {
			'background': "black",
			'color': "white",
			'padding': "10px 15px",
			'margin': 0,
			'max-width': '150px',
			'max-height': '100px',
			'word-break': 'break-word',
			'overflow-x': 'hidden'
		}
	},
	'Tooltip arror': {
		kind: 'Box',
		props: {
			'min-width': '0px',
			'min-height': '0px',
			'margin': 0,
			'position': 'absolute',
			'z-index': 1
		}
	}
}; // Функции для рассчета свободного места

const checkDirection = {
	left: prop => {
		return prop.tooltip.width + prop.arrowSize + prop.tooltipOffset + prop.offsetToEdge <= prop.component.left;
	},
	right: prop => {
		return prop.tooltip.width + prop.arrowSize + prop.tooltipOffset + prop.offsetToEdge <= window.innerWidth - prop.component.width - prop.component.left;
	},
	top: prop => {
		return prop.tooltip.height + prop.arrowSize + prop.tooltipOffset + prop.offsetToEdge <= prop.component.top;
	},
	bottom: prop => {
		return prop.tooltip.height + prop.arrowSize + prop.tooltipOffset + prop.offsetToEdge <= window.innerHeight - prop.component.height - prop.component.top;
	}
}; // Порядок проверки мест, в зависимости от выбранной стороны

const orderDirection = {
	left: ['left', 'right', 'top', 'bottom'],
	right: ['right', 'left', 'top', 'bottom'],
	top: ['top', 'bottom', 'left', 'right'],
	bottom: ['bottom', 'top', 'left', 'right']
}; // Учитываем баг в 1px для Chrome, 
// из-за которого видна граница между стрелкой и текстом 

const pixelBug = 1;

const TooltipBlock = ({
	override,
	wrapperRef,
	textRef,
	tooltipDirection,
	tooltipAlwaysStatus,
	tooltipStatusProp,
	tooltipColorProp,
	arrowStatusProp,
	positionArrow,
	positionTooltip
}) => {
	// Стили Tooltip при наведении 
	const isShowWrapper = useMemo(() => {
		return {
			visibility: tooltipStatusProp === ':always' || tooltipAlwaysStatus ? 'visible ' : 'hidden',
			opacity: tooltipStatusProp === ':always' || tooltipAlwaysStatus ? 1 : 0
		};
	}, [tooltipStatusProp, tooltipAlwaysStatus]);
	const isShowArrow = useMemo(() => {
		return {
			visibility: arrowStatusProp ? 'visible ' : 'hidden',
			opacity: arrowStatusProp ? 1 : 0
		};
	}, [arrowStatusProp]);
	return <Box ref={wrapperRef} {...override(`Tooltip wrapper`)} {...positionTooltip[tooltipDirection]} {...isShowWrapper}>
		        
      
		<Text {...override('Tooltip text')} background-color={tooltipColorProp}>
			        
			{override(`Tooltip text`).children || "Some text"}
			              
      
		</Text>
		    
      
		<Box {...override('Tooltip arror')} {...positionArrow[tooltipDirection]} {...isShowArrow} />
		 
    
	</Box>;
};

const Tooltip = ({
	tooltipDirectionProp,
	tooltipColorProp,
	tooltipOffsetProp,
	tooltipOffsetToEdgeProp,
	tooltipAutoChangeProp,
	tooltipStatusProp,
	arrowSizeProp,
	arrowStatusProp,
	...props
}) => {
	const wrapperRef = useRef();
	const componentRef = useRef();
	const textRef = useRef(); // Храним положение Tooltip

	const [tooltipDirection, setTooltipDirection] = useState(tooltipDirectionProp); // Храним размер стрелки

	const [arrowSize, setArrowSize] = useState(arrowSizeProp); // Храним статус всего tooltip. всегда/при наведении (true/false)

	const [tooltipAlwaysStatus, setTooltipAlwaysStatus] = useState(false); // При изменении проспса позиции tooltip, задаем новое значение

	useEffect(() => {
		setTooltipDirection(tooltipDirectionProp);
	}, [tooltipDirectionProp]); // При изменении проспса размера стрелки, задаем новый размер

	useEffect(() => {
		arrowStatusProp && arrowSizeProp >= 0 ? setArrowSize(arrowSizeProp) : '';
	}, [arrowSizeProp]); // При изменении проспса статуса стрелочки, задаем новое значение

	useEffect(() => {
		setArrowSize(arrowStatusProp ? arrowSizeProp : 0);
	}, [arrowStatusProp]); // Мемозируем объект с вариантами расположения tooltip

	const positionTooltip = useMemo(() => {
		return {
			'top': {
				bottom: `calc(100% + ${tooltipOffsetProp}px + ${arrowSize}px)`
			},
			'bottom': {
				top: `calc(100% + ${tooltipOffsetProp}px + ${arrowSize}px)`
			},
			'left': {
				right: `calc(100% + ${tooltipOffsetProp}px + ${arrowSize}px)`
			},
			'right': {
				left: `calc(100% + ${tooltipOffsetProp}px + ${arrowSize}px)`
			}
		};
	}, [tooltipOffsetProp, arrowSize]); // Мемозируем объект с вариантами расположения стрелки

	const positionArrow = useMemo(() => {
		return {
			'top': {
				'bottom': `-${arrowSize}px`,
				'border-top': `calc(${arrowSize}px + ${pixelBug}px) solid ${tooltipColorProp}`,
				'border-right': `calc(${arrowSize}px + ${pixelBug}px) solid transparent `,
				'border-left': `calc(${arrowSize}px + ${pixelBug}px) solid transparent`
			},
			'bottom': {
				'top': `-${arrowSize}px`,
				'border-bottom': `calc(${arrowSize}px + ${pixelBug}px) solid ${tooltipColorProp}`,
				'border-right': `calc(${arrowSize}px + ${pixelBug}px) solid transparent `,
				'border-left': `calc(${arrowSize}px + ${pixelBug}px) solid transparent`
			},
			'left': {
				'right': `-${arrowSize}px`,
				'border-left': `calc(${arrowSize}px + ${pixelBug}px) solid ${tooltipColorProp}`,
				'border-top': `calc(${arrowSize}px + ${pixelBug}px) solid transparent `,
				'border-bottom': `calc(${arrowSize}px + ${pixelBug}px) solid transparent`
			},
			'right': {
				'left': `-${arrowSize}px`,
				'border-right': `calc(${arrowSize}px + ${pixelBug}px) solid ${tooltipColorProp}`,
				'border-top': `calc(${arrowSize}px + ${pixelBug}px) solid transparent `,
				'border-bottom': `calc(${arrowSize}px + ${pixelBug}px) solid transparent`
			}
		};
	}, [arrowSize, tooltipColorProp]); // Функция при наведении 

	const showTooltipOnMouse = () => {
		if (tooltipStatusProp === ':always') return;
		setTooltipAlwaysStatus(true);
	}; // Функция при отведении 


	const hideTooltipOverMouse = () => {
		if (tooltipStatusProp === ':always') return;
		setTooltipAlwaysStatus(false);
	}; // Функция для рассчета свободного места


	const setCorrectDirection = (tooltip, component, position, arrowSize, offsetToEdge, tooltipOffset) => {
		for (let i = 0; i < orderDirection[position].length; i++) {
			if (checkDirection[orderDirection[position][i]]({
				tooltip,
				component,
				arrowSize,
				offsetToEdge,
				tooltipOffset
			})) {
				setTooltipDirection(orderDirection[position][i]);
				break;
			}
		}
	}; // Проверяем на свободность места, если свободно меняем позицию tooltip
	// Передаем все значения, которые занимают место


	useEffect(() => {
		// Получаем параметры Tooltip и самого компонента
		const tooltipPapams = wrapperRef.current.getBoundingClientRect();
		const componentParams = componentRef.current.getBoundingClientRect(); // Пробразуем значения пропсов в число

		const arrowSizeNumber = parseInt(arrowSize);
		const tooltipOffsetNumber = parseInt(tooltipOffsetProp);
		const tooltipOffsetToEdgeNumber = parseInt(tooltipOffsetToEdgeProp);

		if (tooltipAutoChangeProp) {
			setCorrectDirection(tooltipPapams, componentParams, tooltipDirectionProp, arrowSizeNumber, tooltipOffsetNumber, tooltipOffsetToEdgeNumber);
		} else {
			setTooltipDirection(tooltipDirectionProp);
		}
	}, [tooltipDirectionProp, arrowSize, tooltipOffsetToEdgeProp, tooltipAutoChangeProp, tooltipOffsetProp]);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	return <Box
		box-sizing="border-box"
		display="flex"
		justify-content='center'
		align-items='center'
		border=".5px solid #ccc"
		position="relative"
		padding="20px 0"
		ref={componentRef}
		onMouseEnter={showTooltipOnMouse}
		onMouseLeave={hideTooltipOverMouse}
		{...rest}
	>
		      
		<TooltipBlock
			override={override}
			wrapperRef={wrapperRef}
			textRef={textRef}
			tooltipDirection={tooltipDirection}
			tooltipAlwaysStatus={tooltipAlwaysStatus}
			tooltipStatusProp={tooltipStatusProp}
			tooltipColorProp={tooltipColorProp}
			arrowStatusProp={arrowStatusProp}
			positionArrow={positionArrow}
			positionTooltip={positionTooltip}
		/>
		    
        
		{children}
		 
  
	</Box>;
};

const propInfo = {
	tooltipDirectionProp: {
		title: 'Положение Tooltip',
		description: {
			ru: 'С какой стороны должен располагаться Tooltip'
		},
		control: 'select',
		variants: ['top', 'bottom', 'left', 'right'],
		category: 'Tooltip',
		weight: .5
	},
	arrowSizeProp: {
		title: 'Размер стрелочки (px)',
		description: {
			ru: 'Укажите размер стрелочки в пикселях'
		},
		control: 'input',
		category: 'Arrow',
		weight: .5
	},
	tooltipColorProp: {
		title: 'Цвет Tooltip',
		description: {
			ru: 'Выберите цвет для Tooltip'
		},
		control: 'color',
		category: 'Tooltip',
		weight: .5
	},
	tooltipOffsetProp: {
		title: 'Отступ стрелочки до края (px)',
		description: {
			ru: 'Отступ стрелочки до края компонента в пикселях'
		},
		control: 'input',
		category: 'Arrow',
		weight: .5
	},
	arrowStatusProp: {
		title: 'Показать стрелочку',
		description: {
			ru: 'Показать/Скрыть стрелочку'
		},
		control: 'checkbox',
		category: 'Arrow',
		weight: 1
	},
	tooltipOffsetToEdgeProp: {
		title: 'Отступ от краев',
		description: {
			ru: 'Укажите отступ Tooltip относительно краев окна'
		},
		control: 'input',
		category: 'Tooltip',
		weight: .5
	},
	tooltipStatusProp: {
		title: 'Показывать Tooltip',
		description: {
			ru: 'Показывать Tooltip. Всегда или только при наведении'
		},
		control: 'radio-group',
		variants: [':always', ':hover'],
		category: 'Tooltip',
		weight: .5
	},
	tooltipAutoChangeProp: {
		title: 'Автоматическая смена положения Tooltip',
		description: {
			ru: 'Автоматически изменять положение Tooltip при нехватке места'
		},
		control: 'checkbox',
		category: 'Tooltip',
		weight: 1
	}
};
const defaultProps = {
	tooltipDirectionProp: 'top',
	tooltipColorProp: '--color-dark',
	tooltipOffsetProp: 4,
	tooltipAutoChangeProp: true,
	tooltipOffsetToEdgeProp: '0',
	tooltipStatusProp: ':always',
	arrowSizeProp: 8,
	arrowStatusProp: true
};
export default Object.assign(Tooltip, {
	title: 'Tooltip',
	propInfo,
	defaultProps,
	overrides
});