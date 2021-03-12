import React from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Button } from '@quarkly/widgets';
const overrides = {
	'Column': {
		kind: 'Box'
	},
	'Column Title': {
		kind: 'Text'
	},
	'Column Price': {
		kind: 'Text'
	},
	'Column Descr': {
		kind: 'Text'
	},
	'Column Button': {
		kind: 'Button'
	}
};

const PriceList = ({
	size,
	show,
	height,
	design,
	active,
	...props
}) => {
	Array(+size || 1).fill().map((item, numb) => {
		overrides[`Column ${numb}`] = {
			'kind': 'Box'
		};
		overrides[`Column ${numb} Title`] = {
			'kind': 'Text'
		};
		overrides[`Column ${numb} Price`] = {
			'kind': 'Text'
		};
		overrides[`Column ${numb} Descr`] = {
			'kind': 'Text'
		};
		overrides[`Column ${numb} Button`] = {
			'kind': 'Button'
		};
	});
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	size = +size;
	show = +show;
	active = +active;
	return <Box
		{...rest}
		width="100%"
		max-width="100%"
		box-sizing="border-box"
		position="relative"
		overflow="hidden"
	>
		<Box
			position="static"
			flex-direction={design === 'vertical' ? 'row' : 'column'}
			display="flex"
			max-width={design === 'vertical' && show !== size ? '100vw' : 'initial'}
			max-height={design === 'horizontal' && height ? `${height}px` : 'initial'}
			overflow-x="auto"
			overflow-y={design === 'horizontal' && height ? 'auto' : 'initial'}
		>
			{Array(+size || 1).fill().map((item, numb) => <Box
				padding={design === 'vertical' ? '32px 40px 48px' : '24px 32px'}
				width={design === 'vertical' ? `calc(${100 / show}% - ${1 / show}px)` : 'fit-content'}
				border="1px solid --color-lightD2"
				border-right={design === 'vertical' && numb !== size ? 'none' : ''}
				border-bottom={design === 'horizontal' && numb !== size ? 'none' : ''}
				flex="1 0 auto"
				box-sizing="border-box"
				text-align="center"
				background={numb === active ? '--color-primary' : 'none'}
				border-color={numb === active ? '--color-primary' : ''}
				align-items={design === 'vertical' ? 'space-between' : 'center'}
				justify-content={design === 'vertical' ? 'space-between' : 'center'}
				flex-direction={design === 'vertical' ? 'column' : 'row'}
				display="flex"
				md-width={design === 'vertical' ? `${size === 2 ? 50 : 42.5}%` : 'fit-content'}
				sm-width={design === 'vertical' ? `${size === 1 ? 100 : 75}%` : 'fit-content'}
				min-width={design === 'horizontal' ? '100%' : ''}
				{...override('Column', `Column ${numb}`)}
			>
				<Text
					font-size="20px"
					line-height="1.5"
					font-weight="500"
					margin-right={design === 'horizontal' ? '36px' : '0'}
					margin-bottom={design === 'vertical' ? '16px' : '16px'}
					color={numb === active ? '--color-light' : '--color-dark'}
					flex="1 0 auto"
					{...override('Column Title', `Column ${numb} Title`)}
				>
					{override(`Column ${numb} Title`).children || 'Awesome product'}
				</Text>
				<Text
					font-size="48px"
					line-height="1"
					font-weight="700"
					margin-right={design === 'horizontal' ? '36px' : '0'}
					margin-bottom={design === 'vertical' ? '36px' : '16px'}
					color={numb === active ? '--color-light' : '--color-dark'}
					flex="1 0 auto"
					{...override('Column Price', `Column ${numb} Price`)}
				>
					{override(`Column ${numb} Price`).children || `\$${numb}0`}
				</Text>
				<Text
					font-size="14px"
					line-height="1.5"
					font-weight="300"
					margin="0 auto"
					margin-bottom={design === 'vertical' ? '48px' : '16px'}
					min-width={design === 'horizontal' ? '180px' : ''}
					max-width={design === 'vertical' ? '180px' : '100%'}
					color={numb === active ? '--color-light' : '--color-dark'}
					flex="1 1 auto"
					opacity=".8"
					{...override('Column Descr', `Column ${numb} Descr`)}
				>
					{override(`Column ${numb} Descr`).children || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
				</Text>
				<Button
					width="100%"
					max-width="180px"
					font-weight="500"
					border="1px solid --color-lightD2"
					outline="none"
					box-shadow="none"
					flex="1 0 auto"
					color={numb === active ? '--color-dark' : '--color-primary'}
					background={numb === active ? '--color-secondary' : 'none'}
					border-color={numb === active ? '--color-secondary' : 'none'}
					margin-top={design === 'vertical' ? '48px' : '0'}
					margin-left={design === 'horizontal' ? '48px' : 'auto'}
					margin-right={design === 'horizontal' ? '0' : 'auto'}
					transition="color .15s ease, opacity .15s ease"
					hover-color="--color-dark"
					hover-opacity=".9"
					{...override('Column Button', `Column ${numb} Button`)}
				>
					{override(`Column ${numb} Button`).children || 'Buy'}
				</Button>
			</Box>)}
		</Box>
	</Box>;
};

const propInfo = {
	size: {
		title: 'Products',
		control: 'text',
		type: 'string',
		category: '.Main',
		weight: 1
	},
	active: {
		title: 'Active column',
		control: 'text',
		type: 'number',
		category: '.Main',
		weight: 1
	},
	design: {
		title: 'Design',
		control: 'radio-group',
		variants: ['vertical', 'horizontal'],
		type: 'string',
		category: '.Main',
		weight: 1
	},
	show: {
		title: 'Show on screen (for vertical design)',
		control: 'text',
		type: 'string',
		category: 'Vertical',
		weight: 1
	},
	height: {
		title: 'Show on screen (for horizontal design)',
		control: 'text',
		type: 'string',
		category: 'Horizontal',
		weight: 1
	}
};
const defaultProps = {
	size: 4,
	show: 4,
	height: 517,
	active: 2,
	design: 'vertical'
};
export default Object.assign(PriceList, {
	title: 'Price List',
	description: {
		en: 'Awesome price list!'
	},
	overrides,
	propInfo,
	defaultProps
});