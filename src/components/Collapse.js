import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
const overrides = {
	'Button': {
		kind: 'Button',
		props: {
			children: 'Toggle'
		}
	},
	'Content': {
		kind: 'Box'
	},
	'Wrapper': {
		kind: 'Box'
	},
	'Wrapper :open': {
		kind: 'Box',
		props: {
			'pointer-events': 'all',
			'visibility': 'visible',
			'opacity': '1'
		}
	},
	'Wrapper :closed': {
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
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	const contentRef = useRef(null);
	const [params, setParams] = useState({
		isOpen: false,
		isEmpty: false,
		height: 0,
		duration: 0,
		transition: 'none'
	});
	const updateParams = useCallback(({
		isOpen,
		isEmpty
	}) => {
		const {
			offsetHeight
		} = contentRef.current;
		const height = isOpen && !isEmpty ? offsetHeight : isEmpty ? 'auto' : 0;
		let duration = parseFloat(minDuration) + offsetHeight / 4000;

		if (duration > maxDuration) {
			duration = maxDuration;
		}

		setParams({
			isOpen,
			isEmpty,
			height,
			duration,
			transition: isOpen ? `
				max-height ${duration}s ${animFunction} 0s,
				visibility 0s ${animFunction} 0s,
				opacity ${duration}s ${animFunction} 0s
			` : `
				max-height ${duration}s ${animFunction} 0s,
				visibility 0s ${animFunction} ${duration}s,
				opacity ${duration}s ${animFunction} 0s
			`
		});
	}, []);
	const toggleOpen = useCallback(() => {
		updateParams({
			isOpen: !params.isOpen,
			isEmpty: params.isEmpty
		});
	}, [params.isOpen, params.isEmpty]);
	useEffect(() => {
		const observer = new ResizeObserver(() => {
			updateParams({
				isOpen: params.isOpen,
				isEmpty: params.isEmpty
			});
		});
		observer.observe(contentRef.current);
		return function cleanup() {
			observer.unobserve(contentRef.current);
			observer.disconnect();
		};
	}, [contentRef.current]);
	useEffect(() => {
		if (!contentRef.current) return;
		const {
			innerHTML
		} = contentRef.current;
		const isEmpty = innerHTML === '<!--child placeholder-->';
		updateParams({
			isOpen: params.isOpen || isEmpty,
			isEmpty
		});
	}, [children.length]);
	return <Box padding="8px" border="1px solid --color-lightD2" border-radius="4px" {...rest}>
		<Button focus-box-shadow="none" disabled={params.isEmpty} {...override('Button')} onPointerDown={toggleOpen} />
		<Box
			min-height="0"
			max-height={params.height}
			transition={params.transition}
			overflow="hidden"
			{...override('Wrapper', `Wrapper ${params.isOpen ? ':open' : ':close'}`)}
		>
			<Box ref={contentRef} padding-top="8px" min-height="0" {...override('Content')}>
				{children}
			</Box>
			{params.isEmpty && <Box
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
	minDuration: '0.5s',
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