import React, { useState, useEffect, useCallback } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
const overrides = {
	'Wrapper Indicator': {
		kind: 'Box',
		props: {
			'width': '100%',
			'height': '5px',
			'min-width': '0',
			'min-height': '0',
			'background': 'rgba(179, 179, 179, .7)',
			'position': 'fixed',
			'top': '0',
			'z-index': '1000'
		}
	},
	'Indicator': {
		kind: 'Box',
		props: {
			'width': '0%',
			'height': '5px',
			'min-width': '0',
			'min-height': '0',
			'background': 'rgba(76, 89, 175, 1);'
		}
	}
};

const ScrollIndicator = props => {
	const [progress, setProgress] = useState(0);
	const onScroll = useCallback(() => {
		const {
			body,
			documentElement
		} = document;
		const {
			scrollHeight,
			clientHeight
		} = documentElement;
		const windowScroll = body.scrollTop || documentElement.scrollTop;
		const height = scrollHeight - clientHeight;
		const percentProgress = windowScroll / height * 100;
		setProgress(percentProgress);
	}, []);
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest} {...override('Wrapper Indicator')}>
		<Box {...override('Indicator')} width={`${progress}%`}></Box>
	</Box>;
};

Object.assign(ScrollIndicator, {
	overrides
});
export default ScrollIndicator;