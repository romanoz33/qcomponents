import React, { useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
const overrides = {
	'Timeline Line': {
		kind: 'Box'
	}
};

const TimelineLine = ({
	alignDesktop,
	alignMobile,
	breakpoint,
	override
}) => {
	// Cтили для разных типов выравнивания
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
	const linePropsDesktop = useMemo(() => ({
		left: styles[alignDesktop].lineLeft,
		right: styles[alignDesktop].lineRight,
		transform: styles[alignDesktop].lineTransform
	}), [alignDesktop]);
	const linePropsMobile = useMemo(() => ({
		[`${breakpoint}-left`]: styles[alignMobile].lineLeft,
		[`${breakpoint}-right`]: styles[alignMobile].lineRight,
		[`${breakpoint}-transform`]: styles[alignMobile].lineTransform
	}), [alignMobile, breakpoint]);
	return <Box
		top="0"
		width="2px"
		min-width="auto"
		height="100%"
		background-color="--color-dark"
		position="absolute"
		opacity=".1"
		{...linePropsDesktop}
		{...linePropsMobile}
		{...override('Timeline Line')}
	/>;
};

const TimelineList = ({
	alignDesktop,
	alignMobile,
	breakpoint,
	...props
}) => {
	const {
		override,
		children,
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
		<TimelineLine alignDesktop={alignDesktop} alignMobile={alignMobile} breakpoint={breakpoint} override={override} />
		{React.Children.map(children, (child, numb) => React.isValidElement(child) ? React.cloneElement(child, {
			numb,
			alignDesktop,
			alignMobile,
			breakpoint
		}) : child)}
	</Box>;
};

const propInfo = {
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
	breakpoint: {
		title: 'Mobile starts with the breakpoint',
		control: 'text',
		type: 'string',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	alignDesktop: 'from the left',
	alignMobile: 'to the left',
	breakpoint: 'sm'
};
export default Object.assign(TimelineList, {
	title: 'Timeline List',
	description: {
		en: 'Awesome Timeline component!'
	},
	overrides,
	propInfo,
	defaultProps
});