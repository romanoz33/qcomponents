import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
const overrides = {
	'button': {
		kind: 'Button'
	},
	'content': {
		kind: 'Box'
	},
	'wrapper': {
		kind: 'Box'
	},
	'wrapper-open': {
		kind: 'Box',
		props: {
			'pointer-events': 'all',
			'visibility': 'visible',
			'opacity': '1'
		}
	},
	'wrapper-close': {
		kind: 'Box',
		props: {
			'pointer-events': 'none',
			'visibility': 'hidden',
			'opacity': '0'
		}
	}
};

const Collapse = ({
	minDuration,
	maxDuration,
	animFunction,
	...props
}) => {
	const [params, setParams] = useState({
		isOpen: false,
		height: 0,
		duration: 0,
		transition: 'none'
	});
	const contentRef = useRef(null);

	const handlerParams = isOpen => {
		const height = contentRef.current.offsetHeight;
		let duration = parseFloat(minDuration) + height / 4000;

		if (duration > maxDuration) {
			duration = maxDuration;
		}

		setParams({ ...params,
			isOpen,
			height: isOpen ? height : 0,
			duration,
			transition: isOpen ? `
					max-height ${duration}s ${animFunction} 0s,
					visibility 0s ${animFunction} 0s,
					opacity ${duration}s ${animFunction} 0s
				` : `
					max-height ${params.duration}s ${animFunction} 0s,
					visibility 0s ${animFunction} ${params.duration}s,
					opacity ${params.duration}s ${animFunction} 0s
				`
		});
	};

	const handlerOpen = useCallback(() => {
		handlerParams(!params.isOpen);
	}, [params.isOpen]);
	useEffect(() => {
		const observer = new ResizeObserver(entries => {
			handlerParams(params.isOpen);
		});
		observer.observe(contentRef.current);
		return function cleanup() {
			observer.unobserve(contentRef.current);
			observer.disconnect();
		};
	}, [contentRef.current, params.isOpen]);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	return <Box padding="8px" border="1px solid --color-lightD2" border-radius="4px" {...rest}>
		<Button focus-box-shadow="none" {...override('button')} onPointerDown={handlerOpen}>
			{override('button').children || 'Toggle'}
		</Button>
		<Box
			{...override('wrapper', `wrapper-${params.isOpen ? 'open' : 'close'}`)}
			min-height="0"
			max-height={params.height}
			transition={params.transition}
			overflow="hidden"
		>
			<Box ref={contentRef} {...override('content')}>
				{children}
			</Box>
		</Box>
	</Box>;
};

const propInfo = {
	minDuration: {
		title: 'Min animation duration (in seconds)',
		control: 'text',
		type: 'number',
		category: 'Main',
		weight: 1
	},
	maxDuration: {
		title: 'Max animation duration (in seconds)',
		control: 'text',
		type: 'number',
		category: 'Main',
		weight: 1
	},
	animFunction: {
		title: 'Animation function',
		control: 'text',
		type: 'text',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	minDuration: '.1s',
	maxDuration: '1s',
	animFunction: 'linear'
};
Object.assign(Collapse, {
	title: 'Collapse',
	description: {
		en: 'Collapse component'
	},
	overrides,
	propInfo,
	defaultProps
});
export default Collapse;