import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
import ComponentNotice from './ComponentNotice';
const overrides = {
	'Button': {
		kind: 'Button',
		props: {
			children: 'Toggle',
			'focus-box-shadow': 'none'
		}
	},
	'Content': {
		kind: 'Box',
		props: {
			'padding-top': '8px',
			'min-height': '0'
		}
	},
	'Wrapper': {
		kind: 'Box',
		props: {
			'min-height': '0',
			'overflow': 'hidden'
		}
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
let toggleTimeout;

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
	const [{
		isOpen,
		isEmpty,
		height,
		duration,
		transition,
		isLock
	}, setParams] = useState({
		isOpen: false,
		isEmpty: false,
		height: 0,
		duration: 0,
		transition: 'none',
		isLock: false
	});
	const updateParams = useCallback(({
		open,
		empty
	}) => {
		if (isLock) return;
		const {
			offsetHeight
		} = contentRef.current;
		const newHeight = open && !empty ? offsetHeight : empty ? 'auto' : 0;
		let newDuration = parseFloat(minDuration) + offsetHeight / 4000;

		if (duration > maxDuration) {
			duration = maxDuration;
		}

		const newParams = {
			isOpen: open,
			isEmpty: empty,
			height: newHeight,
			duration: newDuration,
			transition: open ? `
				max-height ${newDuration}s ${animFunction} 0s,
				visibility 0s ${animFunction} 0s,
				opacity ${newDuration}s ${animFunction} 0s
			` : `
				max-height ${newDuration}s ${animFunction} 0s,
				visibility 0s ${animFunction} ${newDuration}s,
				opacity ${newDuration}s ${animFunction} 0s
			`
		};
		setParams({ ...newParams,
			isLock: true
		});
		clearTimeout(toggleTimeout);
		toggleTimeout = setTimeout(() => {
			setParams({ ...newParams,
				isLock: false
			});
		}, duration * 1000);
	}, [isOpen, isEmpty, isLock]);
	const toggleOpen = useCallback(() => {
		updateParams({
			open: !isOpen,
			empty: isEmpty
		});
	}, [isOpen, isEmpty, isLock]);
	useEffect(() => {
		const observer = new ResizeObserver(() => {
			updateParams({
				open: isOpen,
				empty: isEmpty
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
		const isEmpty = contentRef.current?.innerHTML === '<!--child placeholder-->';
		updateParams({
			open: isOpen || isEmpty,
			empty: isEmpty
		});
	}, [children.length]);
	return <Box {...rest}>
		<Button {...override('Button')} onPointerDown={toggleOpen} disabled={isEmpty} />
		<Box {...override('Wrapper', `Wrapper ${isOpen ? ':open' : ':close'}`)} max-height={height} transition={transition}>
			<Box {...override('Content')} ref={contentRef}>
				{children}
			</Box>
			{isEmpty && <ComponentNotice message="Drag component here" />}
		</Box>
	</Box>;
};

const propInfo = {
	minDuration: {
		title: 'Min animation duration (in seconds)',
		control: 'input',
		variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
		type: 'text',
		category: 'Main',
		weight: 1
	},
	maxDuration: {
		title: 'Max animation duration (in seconds)',
		control: 'input',
		variants: ['1s', '1.5s', '2s', '2.5s', '3s', '4s', '5s'],
		type: 'text',
		category: 'Main',
		weight: 1
	},
	animFunction: {
		title: 'Animation function',
		control: 'input',
		variants: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end'],
		type: 'text',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	minDuration: '0.5s',
	maxDuration: '1s',
	animFunction: 'linear',
	'padding': '8px',
	'border': '1px solid --color-lightD2',
	'border-radius': '4px'
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