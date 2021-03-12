import React, { useState, useEffect, useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const overrides = {
	'Arrow prev icon': {
		kind: 'Icon',
		props: {
			size: '52px',
			category: 'md',
			icon: MdKeyboardArrowLeft
		}
	},
	'Arrow next icon': {
		kind: 'Icon',
		props: {
			size: '52px',
			category: 'md',
			icon: MdKeyboardArrowRight
		}
	}
};
const Image = atomize.img(); // Get slide position

const getSide = (numb, opts) => {
	let side = 0;

	if (numb > opts.active) {
		side = 1;
	}

	if (numb < opts.active) {
		side = -1;
	}

	if (numb === 1 && opts.active === opts.length) {
		side = 1;
	}

	if (opts.active === 1 && numb === opts.length) {
		side = -1;
	}

	if (opts.length === 1) {
		side = 0;
	}

	console.log(numb, opts);
	return side;
};

const Slide = ({
	src,
	numb,
	height,
	duration,
	opts
}) => {
	const isTarget = useMemo(() => numb === opts.target, [numb, opts.target]);
	const isActive = useMemo(() => numb === opts.active, [numb, opts.active]);
	const position = useMemo(() => {
		if (isTarget && !isActive) {
			return '0';
		}

		if (isActive && !isTarget) {
			return -1 * getSide(opts.target, opts) * 100;
		}

		return getSide(numb, opts) * 100;
	}, [numb, opts]);
	return <Box
		left="0"
		padding-top={height}
		width="100%"
		margin-right="-100%"
		box-sizing="border-box"
		user-select="none"
		position="relative"
		display="inline-block"
		overflow="hidden"
		transition={`all ${isActive || isTarget ? duration : 0}ms ease`}
		transform={`translateX(${position}%)`}
		z-index={isActive ? '3' : isTarget ? '2' : '1'}
	>
		      
		<Image
			src={src}
			top="0"
			width="100%"
			min-heigh="100%"
			box-sizing="border-box"
			user-select="none"
			position="absolute"
			display="block"
		/>
		    
	</Box>;
};

const Arrow = ({
	type,
	color,
	alpha,
	click,
	override
}) => {
	return <Box
		top="0"
		left={type === 'prev' ? '0' : 'auto'}
		right={type === 'next' ? '0' : 'auto'}
		width="33%"
		min-width="5rem"
		height="100%"
		transition="opacity .3s ease"
		pointer-events="all"
		position="absolute"
		cursor="pointer"
		opacity={alpha}
		z-index="5"
		background={`
				linear-gradient(
					to ${type === 'prev' ? 'right' : 'left'},
					rgba(0,0,0,0.25) 0,
					rgba(0,0,0,0) 100%)
					rgba(0,0,0,0)
			`}
		align-items="center"
		justify-content={type === 'prev' ? 'flex-start' : 'flex-end'}
		display="flex"
		hover-opacity="1"
		onClick={click}
		{...override(`Arrow ${type}`)}
	>
		      
		<Icon color={color || '#EEEEEE'} {...override(`Arrow ${type} icon`)} />
		    
	</Box>;
};

const Point = ({
	numb,
	color,
	alpha,
	opts,
	click,
	override
}) => {
	const isTarget = useMemo(() => numb === opts.target, [numb, opts.target]);
	return <Box
		margin="0"
		width="1rem"
		height="1rem"
		border="none"
		outline="0"
		transition="opacity .3s ease"
		pointer-events="all"
		box-sizing="border-box"
		user-select="none"
		position="relative"
		display="block"
		cursor="pointer"
		opacity={isTarget ? '1' : alpha}
		hover-opacity="1"
		onClick={click}
		{...override(`Point ${numb}`)}
	>
		      
		<Box
			top="calc(50% - .5rem)"
			left="calc(50% - .5rem)"
			width=".75rem"
			height=".75rem"
			min-width="0"
			min-height="0"
			border-radius="50%"
			background={color || '#EEEEEE'}
			transition="background .2s ease, transform .2s ease"
			transform={`scale(${isTarget ? 1 : 0.625})`}
			position="absolute"
			display="block"
			{...override(`Point ${numb} dot`)}
		/>
		    
	</Box>;
};

const Slider = ({
	slides,
	height,
	duration,
	colorArrows,
	alphaArrows,
	colorPoints,
	alphaPoints,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [srcs] = useState(slides.length > 0 ? slides.split(',').reverse() : []);
	const [active, setActive] = useState(1);
	const [target, setTarget] = useState(1);
	const [isSwitch, setSwitch] = useState(false); // Switch active slide

	useEffect(() => {
		if (!isSwitch) return;
		setTimeout(() => {
			setActive(target);
			setSwitch(false);
		}, duration);
	}); // Click on 'prev' arrow

	const slidePrev = () => {
		if (isSwitch) return;
		setTarget(target <= 1 ? srcs.length : active - 1);
		setSwitch(true);
	}; // Click on 'next' arrow


	const slideNext = () => {
		if (isSwitch) return;
		setTarget(target >= srcs.length ? 1 : active + 1);
		setSwitch(true);
	}; // Click on point


	const clickNumb = numb => {
		if (isSwitch) return;
		setTarget(numb);
		setSwitch(true);
	};

	let touchStartX, touchStartY; // Start swipe on mobile

	const touchStart = e => {
		touchStartX = e.targetTouches[0].clientX;
		touchStartY = e.targetTouches[0].clientY;
	}; // Stop swipe and fire event


	const touchEnd = e => {
		if (!touchStartX || !touchStartY) return;
		const touchEndX = e.changedTouches[0].clientX,
		      touchEndY = e.changedTouches[0].clientY,
		      diffX = Math.abs(touchEndX - touchStartX),
		      diffY = Math.abs(touchEndY - touchStartY),
		      diffP = diffX / e.target.offsetWidth;
		if (diffX < diffY || diffP < .1) return;

		if (touchStartX > touchEndX) {
			slideNext();
		} else {
			slidePrev();
		}
	};

	return <Box {...rest} position="relative">
		      
		<Box width="100%" position="relative" display="flex" overflow="hidden">
			        
			{srcs.map((src, i) => <Slide
				key={i}
				src={src}
				numb={i + 1}
				height={height}
				duration={duration}
				opts={{
					active,
					target,
					length: srcs.length
				}}
			/>)}
			      
		</Box>
		      
		<Box
			top="0"
			left="0"
			width="100%"
			height="100%"
			box-sizing="border-box"
			user-select="none"
			position="absolute"
			onTouchStart={e => touchStart(e)}
			onTouchEnd={e => touchEnd(e)}
		>
			        
			<Arrow
				type="prev"
				click={() => slidePrev()}
				color={colorArrows}
				alpha={alphaArrows}
				override={override}
			/>
			        
			<Arrow
				type="next"
				click={() => slideNext()}
				color={colorArrows}
				alpha={alphaArrows}
				override={override}
			/>
			      
		</Box>
		      
		<Box
			bottom=".5rem"
			left="0"
			width="100%"
			height="1.5rem"
			align-content="center"
			justify-content="center"
			pointer-events="none"
			box-sizing="border-box"
			user-select="none"
			position="absolute"
			display="flex"
			z-index="6"
			{...override('Points')}
		>
			        
			{srcs.map((src, i) => <Point
				key={i}
				numb={i + 1}
				click={() => clickNumb(i + 1)}
				color={colorPoints}
				alpha={alphaPoints}
				opts={{
					target
				}}
				override={override}
			/>)}
			      
		</Box>
		    
	</Box>;
};

const propInfo = {
	slides: {
		title: 'Image URLs',
		multiply: true,
		control: 'image',
		type: 'string',
		category: 'Slides',
		weight: 1
	},
	height: {
		title: 'Height of the slider',
		control: 'text',
		type: 'string',
		category: 'Slider',
		weight: 1
	},
	duration: {
		title: 'Animation duration',
		control: 'text',
		type: 'string',
		category: 'Slider',
		weight: 1
	},
	colorArrows: {
		title: 'Arrows color',
		control: 'color',
		type: 'string',
		category: 'Color',
		weight: .67
	},
	alphaArrows: {
		title: 'Opacity',
		control: 'text',
		type: 'string',
		category: 'Color',
		weight: .33
	},
	colorPoints: {
		title: 'Points color',
		control: 'color',
		type: 'string',
		category: 'Color',
		weight: .67
	},
	alphaPoints: {
		title: 'Opacity',
		control: 'text',
		type: 'string',
		category: 'Color',
		weight: .33
	}
};
const defaultProps = {
	slides: `
https://images.pexels.com/photos/757183/pexels-photo-757183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
https://images.pexels.com/photos/803940/pexels-photo-803940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
https://images.pexels.com/photos/1045922/pexels-photo-1045922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260,
https://images.pexels.com/photos/1586154/pexels-photo-1586154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
	`,
	height: '62.5%',
	duration: 1000,
	colorArrows: '#EEEEEE',
	colorPoints: '#EEEEEE',
	alphaArrows: '.75',
	alphaPoints: '.5'
};
export default Object.assign(Slider, {
	title: 'Slider',
	description: {
		en: 'Awesome swipe slider!'
	},
	overrides,
	propInfo,
	defaultProps
});