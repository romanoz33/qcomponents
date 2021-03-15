import React, { useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';
const overrides = {
	'Timeline Point': {
		kind: 'Box'
	},
	'Timeline Dates': {
		kind: 'Text'
	},
	'Timeline Title': {
		kind: 'Text'
	},
	'Timeline Descr': {
		kind: 'Text'
	}
};

const TimelineItem = ({
	numb,
	alignDesktop,
	alignMobile,
	breakpoint,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides); // Cтили для разных типов выравнивания

	const styles = useMemo(() => ({
		'from the left': {
			itemPaddingLeft: numb % 2 ? '30px' : '',
			itemPaddingRight: numb % 2 ? '' : '30px',
			itemPaddingBottom: '15px',
			itemWidth: '50%',
			itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
			itemTextAlign: numb % 2 ? 'left' : 'right',
			pointLeft: numb % 2 ? '-3px' : '',
			pointRight: numb % 2 ? '' : '-3px'
		},
		'from the right': {
			itemPaddingLeft: numb % 2 ? '' : '30px',
			itemPaddingRight: numb % 2 ? '30px' : '',
			itemPaddingBottom: '15px',
			itemWidth: '50%',
			itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
			itemTextAlign: numb % 2 ? 'right' : 'left',
			pointLeft: numb % 2 ? '' : '-3px',
			pointRight: numb % 2 ? '-3px' : ''
		},
		'to the left': {
			itemPaddingLeft: '30px',
			itemPaddingRight: '0px',
			itemPaddingBottom: '30px',
			itemWidth: '100%',
			itemAlignSelf: 'flex-start',
			itemTextAlign: 'left',
			pointLeft: '0',
			pointRight: 'auto'
		},
		'to the right': {
			itemPaddingLeft: '0px',
			itemPaddingRight: '30px',
			itemPaddingBottom: '30px',
			itemWidth: '100%',
			itemAlignSelf: 'flex-end',
			itemTextAlign: 'right',
			pointLeft: 'auto',
			pointRight: '0'
		}
	}), [numb]);
	const itemPropsDesktop = useMemo(() => ({
		'padding-left': styles[alignDesktop].itemPaddingLeft,
		'padding-right': styles[alignDesktop].itemPaddingRight,
		'padding-bottom': styles[alignDesktop].itemPaddingBottom,
		width: styles[alignDesktop].itemWidth,
		'align-self': styles[alignDesktop].itemAlignSelf,
		'text-align': styles[alignDesktop].itemTextAlign
	}), [alignDesktop]);
	const pointPropsDesktop = useMemo(() => ({
		left: styles[alignDesktop].pointLeft,
		right: styles[alignDesktop].pointRight
	}), [alignDesktop]);
	const itemPropsMobile = useMemo(() => ({
		[`${breakpoint}-padding-left`]: styles[alignMobile].itemPaddingLeft,
		[`${breakpoint}-padding-right`]: styles[alignMobile].itemPaddingRight,
		[`${breakpoint}-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
		[`${breakpoint}-width`]: styles[alignMobile].itemWidth,
		[`${breakpoint}-align-self`]: styles[alignMobile].itemAlignSelf,
		[`${breakpoint}-text-align`]: styles[alignMobile].itemTextAlign
	}), [alignMobile, breakpoint]);
	const pointPropsMobile = useMemo(() => ({
		[`${breakpoint}-left`]: styles[alignMobile].pointLeft,
		[`${breakpoint}-right`]: styles[alignMobile].pointRight
	}), [alignMobile, breakpoint]);
	return <Box
		box-sizing="border-box"
		position="relative"
		{...itemPropsDesktop}
		{...itemPropsMobile}
		{...rest}
	>
		<Box
			top="10px"
			width="6px"
			min-width="auto"
			height="6px"
			min-height="auto"
			background-color="--color-dark"
			border-radius="50%"
			position="absolute"
			{...pointPropsDesktop}
			{...pointPropsMobile}
			{...override('Timeline Point')}
		/>
		<Text margin="0 0 8px" font="--font-base" color="--color-darkL1" {...override('Timeline Dates')}>
			{override(`Timeline Dates`).children || '18:00 - 20:30'}
		</Text>
		<Text margin="0 0 6px" font="--font-headline3" color="--color-dark" {...override('Timeline Title')}>
			{override(`Timeline Title`).children || 'Desktop vs mobile'}
		</Text>
		<Text margin="0" font="--font-base" color="--color-darkL2" {...override('Timeline Descr')}>
			{override(`Timeline Descr`).children || 'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.'}
		</Text>
		{children}
	</Box>;
};

export default Object.assign(TimelineItem, {
	title: 'Timeline',
	description: {
		en: 'Awesome Timeline Item component!'
	},
	overrides
});