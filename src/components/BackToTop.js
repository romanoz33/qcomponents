import React, { useState, useEffect, useRef, useCallback } from 'react';
import easyScroll from 'easy-scroll';
import { Button, Icon, Box } from "@quarkly/widgets";
import { useOverrides } from '@quarkly/components';
import { MdKeyboardArrowUp } from "react-icons/md";

const throttle = (fn, wait) => {
	let lastTime = 0;
	return (...args) => {
		const now = new Date();

		if (now - lastTime >= wait) {
			fn(...args);
			lastTime = now;
		}
	};
};

const useThrottle = (fn, wait = 100, cb) => {
	const throttled = throttle(fn, wait);
	return useCallback(throttled, cb);
};

const overrides = {
	'Wrapper': {
		kind: 'Box'
	},
	'Button': {
		kind: 'Button'
	},
	'Icon': {
		kind: 'Icon'
	}
};

const ScrollToTop = ({
	showAfter,
	showAlways,
	duration,
	easingPreset,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides),
	      [isScrolling, setScrolling] = useState(false),
	      [isShowButton, setShowButton] = useState(false),
	      containerRef = useRef(null),
	      buttonRef = useRef(null),
	      childrenContainer = children.filter(child => typeof child.type === 'object'),
	      isTargetContainer = childrenContainer.length ? true : false;
	const handleScroll = useThrottle(e => {
		const scrollTop = isTargetContainer ? e.target.scrollTop : window.pageYOffset;

		if (!isShowButton && scrollTop > showAfter) {
			setShowButton(true);
		} else if (isShowButton && scrollTop <= showAfter) {
			setShowButton(false);
			buttonRef.current.blur();
		}
	}, 100);

	const handleClick = () => {
		const scrollableDomEle = isTargetContainer ? containerRef.current : window;

		if (!isScrolling) {
			setScrolling(true);
			easyScroll({
				scrollableDomEle,
				direction: 'top',
				duration,
				easingPreset,
				onAnimationCompleteCallback: () => {
					setScrolling(false);
				}
			});
		}
	};

	useEffect(() => {
		if (!isTargetContainer) {
			window.addEventListener('scroll', handleScroll);
		}

		return function cleanup() {
			if (!isTargetContainer) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, [handleScroll]);
	return <Box mih="0" pos="relative" {...rest}>
		<Box
			mih="0"
			mah="100vh"
			ovy="auto"
			d={isTargetContainer ? 'block' : 'none'}
			onScroll={handleScroll}
			ref={containerRef}
			{...override('Wrapper')}
		>
			{children}
		</Box>
		<Button
			b="15px"
			r="15px"
			p="0"
			w="40px"
			h="40px"
			c="--dark"
			bgc="--lightD2"
			focus-bxsh="none"
			bdrs="50%"
			jc="center"
			ai="center"
			pos={isTargetContainer ? 'absolute' : 'fixed'}
			v={isShowButton || showAlways ? 'visible' : 'hidden'}
			d="flex"
			z="1000"
			type="button"
			onClick={handleClick}
			ref={buttonRef}
			{...override('Button')}
		>
			<Icon size="32px" category="md" icon={MdKeyboardArrowUp} {...override('Icon')} />
		</Button>
	</Box>;
};

const propInfo = {
	showAfter: {
		title: 'Show button after',
		description: {
			en: 'Show button after (in px)'
		},
		control: 'text',
		category: 'Button'
	},
	showAlways: {
		title: 'Show button always',
		description: {
			en: 'Show button always'
		},
		control: 'checkbox',
		category: 'Button'
	},
	duration: {
		title: 'Animation duration',
		description: {
			en: 'Animation duration'
		},
		control: 'text',
		category: 'Animation'
	},
	easingPreset: {
		title: 'Animation easing preset',
		description: {
			en: 'Animation easing preset'
		},
		control: 'select',
		variants: ['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint'],
		category: 'Animation'
	}
};
const defaultProps = {
	showAfter: 100,
	showAlways: false,
	duration: 1000,
	easingPreset: 'easeInOutQuad'
};
export default Object.assign(ScrollToTop, {
	title: 'Scroll To Top Button',
	description: {
		en: 'Scroll To Top Button'
	},
	propInfo,
	defaultProps,
	overrides
});