import React, { useMemo, useCallback, useState } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Image } from '@quarkly/widgets';
const overrides = {
	'Flip Wrapper': {
		'kind': 'Box',
		'props': {
			'position': 'relative',
			'width': '400px',
			'perspective': '600px'
		}
	},
	'Flip Card Content': {
		'kind': 'Box'
	},
	'Flip Card Image': {
		'kind': 'Image',
		'props': {
			'src': 'https://images.unsplash.com/photo-1615921773341-e87e0771e323?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000',
			'width': '100%',
			'height': '100%',
			'object-fit': 'cover',
			'object-position': '50% 50%'
		}
	},
	'Flip Card Item': {
		'kind': 'Box',
		'props': {
			'position': 'absolute',
			'top': '0',
			'bottom': '0',
			'left': '0',
			'right': '0',
			'backface-visibility': 'hidden'
		}
	},
	'Flip Card Item :Face': {
		'kind': 'Box'
	},
	'Flip Card Item :Back': {
		'kind': 'Box'
	}
};
const flipStyles = {
	toRight: {
		transform: 'rotateY(180deg)'
	},
	toLeft: {
		transform: 'rotateY(-180deg)'
	},
	toUp: {
		transform: 'rotateX(180deg)'
	},
	toDown: {
		transform: 'rotateX(-180deg)'
	}
};

const FlipCard = ({
	flipTriggerProp,
	flipDirectionProp,
	flipDurationProp,
	timingFunctionProp,
	aspectRatioProp,
	children,
	...props
}) => {
	const [isFlipped, setFlipped] = useState(false);
	const flipTrigger = useMemo(() => flipTriggerProp === 'Click', [flipTriggerProp]);
	const aspectRatioPercent = useMemo(() => {
		let precent;

		switch (aspectRatioProp) {
			case '16:9':
				precent = '56.25%';
				break;

			case '4:3':
				precent = '75%';
				break;

			case '1:1':
				precent = '100%';
				break;

			case '3:4':
				precent = '133.33%';
				break;

			case '9:16':
				precent = '156.25%';
				break;

			default:
				precent = 'auto';
		}

		;
		return precent;
	}, [aspectRatioProp]);
	const flipDuration = useMemo(() => flipDurationProp.replace(/\s+/g, ''), [flipDurationProp]);
	const currentStyles = useMemo(() => flipStyles[flipDirectionProp], [flipDirectionProp]);
	const onClickFlip = useCallback(() => {
		if (flipTrigger) {
			setFlipped(!isFlipped);
		}
	}, [isFlipped]);
	const onHoverFlip = useCallback(() => {
		if (!flipTrigger) {
			setFlipped(!isFlipped);
		}
	}, [isFlipped]);
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	console.log({ ...override('Flip Card Content')
	});
	return <Box
		{...override(`Flip Wrapper`)}
		height={aspectRatioPercent === 'auto' ? '500px' : 'auto'}
		{...rest}
		onClick={onClickFlip}
		onMouseEnter={onHoverFlip}
		onMouseLeave={onHoverFlip}
	>
		<Box
			padding-top={aspectRatioPercent}
			width='100%'
			height={aspectRatioPercent === 'auto' ? '100%' : 'auto'}
			min-width='0'
			min-height='0'
			transform-style='preserve-3d'
			position='relative'
			cursor='pointer'
			transition={`transform ${flipDuration}ms ${timingFunctionProp}`}
			{...override('Flip Card Content')}
			{...isFlipped && currentStyles}
		>
			<Box {...override(`Flip Card Item`, `Flip Card Item :Face`)}>
				<Image {...override('Flip Card Image')} />
			</Box>
			<Box {...override(`Flip Card Item`, `Flip Card Item :Back`)} {...currentStyles}>
				{children}
			</Box>
		</Box>
	</Box>;
};

const propInfo = {
	flipTriggerProp: {
		title: 'Flip Trigger',
		description: {
			en: 'Способ активации анимации'
		},
		control: 'radio-group',
		variants: ['Click', 'Hover'],
		category: 'Main',
		weight: .5
	},
	flipDirectionProp: {
		title: 'Flip Direction',
		description: {
			en: 'Напрвление поворота'
		},
		control: 'select',
		variants: ['toRight', 'toLeft', 'toUp', 'toDown'],
		category: 'Main',
		weight: .5
	},
	aspectRatioProp: {
		title: 'Aspect Ratio',
		description: {
			en: 'Формат разрешения'
		},
		control: 'select',
		variants: ['auto', '16:9', '4:3', '1:1', '3:4', '9:16'],
		category: 'Main',
		weight: .5
	},
	flipDurationProp: {
		title: 'Flip Duration',
		description: {
			en: 'Продолжительность анимации'
		},
		control: 'input',
		category: 'Animation params',
		weight: .5
	},
	timingFunctionProp: {
		title: 'Timing Function',
		description: {
			en: 'Скорость течения анимации'
		},
		control: 'input',
		variants: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end'],
		category: 'Animation params',
		weight: .5
	}
};
const defaultProps = {
	flipTriggerProp: 'Click',
	flipDirectionProp: 'toRight',
	aspectRatioProp: 'auto',
	flipDurationProp: '1000',
	timingFunctionProp: 'cubic-bezier(.50,-0.35,.50,1.65)'
};
export default Object.assign(FlipCard, {
	overrides,
	propInfo,
	defaultProps
});
;