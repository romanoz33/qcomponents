import React from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Icon } from '@quarkly/widgets';
import { BsDot } from "react-icons/bs";
let overrides = {
	'Timeline Line': {
		kind: 'Box'
	},
	'Timeline Item': {
		kind: 'Box'
	},
	'Timeline Point': {
		kind: 'Icon'
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

const TimelineLine = ({
	alignDesktop,
	alignMobile,
	media,
	override
}) => {
	const styles = {
		'from the left': {
			lineLeft: '50%',
			lineRight: 'auto',
			lineTransform: 'translateX(-50%)'
		},
		'from the right': {
			lineLeft: 'auto',
			lineRight: '50%',
			lineTransform: 'translateX(50%)'
		},
		'to the left': {
			lineLeft: '2px',
			lineRight: 'auto',
			lineTransform: 'none'
		},
		'to the right': {
			lineLeft: 'auto',
			lineRight: '2px',
			lineTransform: 'none'
		}
	};
	overrides[`Timeline Line`].props = {
		[`${media}-left`]: styles[alignMobile].lineLeft,
		[`${media}-right`]: styles[alignMobile].lineRight,
		[`${media}-transform`]: styles[alignMobile].lineTransform
	};
	return <Box
		top="0"
		width="2px"
		min-width="auto"
		height="100%"
		background-color="--color-dark"
		position="absolute"
		opacity=".1"
		left={styles[alignDesktop].lineLeft}
		right={styles[alignDesktop].lineRight}
		transform={styles[alignDesktop].lineTransform}
		{...override('Timeline Line')}
	/>;
};

const TimelineItem = ({
	numb,
	alignDesktop,
	alignMobile,
	media,
	override
}) => {
	const styles = {
		'from the left': {
			itemPaddingLeft: numb % 2 ? '30px' : '',
			itemPaddingRight: numb % 2 ? '' : '30px',
			itemPaddingBottom: '15px',
			itemWidth: '50%',
			itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
			itemTextAlign: numb % 2 ? 'left' : 'right',
			pointLeft: numb % 2 ? '-20px' : '',
			pointRight: numb % 2 ? '' : '-20px'
		},
		'from the right': {
			itemPaddingLeft: numb % 2 ? '' : '30px',
			itemPaddingRight: numb % 2 ? '30px' : '',
			itemPaddingBottom: '15px',
			itemWidth: '50%',
			itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
			itemTextAlign: numb % 2 ? 'right' : 'left',
			pointLeft: numb % 2 ? '' : '-20px',
			pointRight: numb % 2 ? '-20px' : ''
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
	};
	overrides['Timeline Item'].props = {
		[`${media}-padding-left`]: styles[alignMobile].itemPaddingLeft,
		[`${media}-padding-right`]: styles[alignMobile].itemPaddingRight,
		[`${media}-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
		[`${media}-width`]: styles[alignMobile].itemWidth,
		[`${media}-align-self`]: styles[alignMobile].itemAlignSelf,
		[`${media}-text-align`]: styles[alignMobile].itemTextAlign
	};
	overrides['Timeline Point'].props = {
		[`${media}-left`]: styles[alignMobile].pointLeft,
		[`${media}-right`]: styles[alignMobile].pointRight
	};
	return <Box
		padding-left={styles[alignDesktop].itemPaddingLeft}
		padding-right={styles[alignDesktop].itemPaddingRight}
		padding-bottom={styles[alignDesktop].itemPaddingBottom}
		width={styles[alignDesktop].itemWidth}
		align-self={styles[alignDesktop].itemAlignSelf}
		text-align={styles[alignDesktop].itemTextAlign}
		box-sizing="border-box"
		position="relative"
		{...override('Timeline Item', `Timeline ${numb} Item`)}
	>
		      
		<Icon
			top="-8px"
			left={styles[alignDesktop].pointLeft}
			right={styles[alignDesktop].pointRight}
			width="40px"
			height="40px"
			color="--color-dark"
			position="absolute"
			size="40px"
			category="bs"
			icon={BsDot}
			{...override('Timeline Point', `Timeline ${numb} Point`)}
		/>
		      
		<Text margin="0 0 8px" font="--font-base" color="--color-darkL1" {...override('Timeline Dates', `Timeline ${numb} Dates`)}>
			        
			{override(`Timeline ${numb} Dates`).children || '18:00 - 20:30'}
			      
		</Text>
		      
		<Text margin="0 0 6px" font="--font-headline3" color="--color-dark" {...override('Timeline Title', `Timeline ${numb} Title`)}>
			        
			{override(`Timeline ${numb} Title`).children || 'Desktop vs mobile'}
			      
		</Text>
		      
		<Text margin="0" font="--font-base" color="--color-darkL2" {...override('Timeline Descr', `Timeline ${numb} Descr`)}>
			        
			{override(`Timeline ${numb} Descr`).children || 'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.'}
			      
		</Text>
		    
	</Box>;
};

const Timeline = ({
	items,
	alignDesktop,
	alignMobile,
	media,
	...props
}) => {
	items = +items;
	Array(items || 0).fill().map((item, numb) => {
		overrides[`Timeline ${numb} Item`] = {
			kind: 'Box'
		};
		overrides[`Timeline ${numb} Point`] = {
			kind: 'Icon'
		};
		overrides[`Timeline ${numb} Dates`] = {
			kind: 'Text'
		};
		overrides[`Timeline ${numb} Title`] = {
			kind: 'Text'
		};
		overrides[`Timeline ${numb} Descr`] = {
			kind: 'Text'
		};
	});
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box
		width="100%"
		max-width="100%"
		flex-direction="column"
		box-sizing="border-box"
		position="relative"
		display="flex"
		overflow-x="hidden"
		overflow-y="visible"
		{...rest}
	>
		      
		<TimelineLine alignDesktop={alignDesktop} alignMobile={alignMobile} media={media} override={override} />
		      
		{Array(items || 1).fill().map((item, numb) => <TimelineItem
			numb={numb}
			alignDesktop={alignDesktop}
			alignMobile={alignMobile}
			media={media}
			override={override}
		/>)}
	</Box>;
};

const propInfo = {
	items: {
		title: 'Number of items',
		control: 'number',
		type: 'number',
		category: 'Main',
		weight: 1
	},
	alignDesktop: {
		title: 'Alignment of items on the desktop',
		control: 'select',
		variants: ['from the left', 'from the right', 'to the left', 'to the right'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	alignMobile: {
		title: 'Alignment of items on the mobile',
		control: 'select',
		variants: ['to the left', 'to the right'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	media: {
		title: 'Mobile starts with the breakpoint',
		control: 'text',
		type: 'string',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	items: 4,
	alignDesktop: 'from the left',
	alignMobile: 'to the left',
	media: 'sm'
};
export default Object.assign(Timeline, {
	title: 'Timeline',
	description: {
		en: 'Awesome Timeline component!'
	},
	overrides,
	propInfo,
	defaultProps
});