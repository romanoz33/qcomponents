import React from 'react';
import Ticker from 'react-ticker';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';
const overrides = {
	'Text': {
		kind: 'Text'
	}
};

const TickerText = ({
	speed,
	direction,
	mode,
	move,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		      
		<Ticker speed={speed} direction={direction} mode={mode} move={move === 'enable'}>
			          
			{({
				index
			}) => <Text {...override('Text')}>
				                
				{override('Text').children || 'Hello World!!!'}
				              
			</Text>}
			      
		</Ticker>
		    
	</Box>;
};

const propInfo = {
	speed: {
		title: 'Speed:',
		control: 'number',
		type: 'number',
		category: 'Main',
		weight: 1
	},
	direction: {
		title: 'Direction:',
		control: 'select',
		variants: ['toLeft', 'toRight'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	mode: {
		title: 'Mode:',
		control: 'select',
		variants: ['chain', 'await', 'smooth'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	move: {
		title: 'Move:',
		control: 'radio-group',
		variants: ['enable', 'disable'],
		type: 'text',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	speed: '5',
	direction: 'toLeft',
	mode: 'chain',
	move: 'enable'
};
export default Object.assign(TickerText, {
	title: 'TickerText',
	description: {
		en: 'TickerText component!'
	},
	overrides,
	propInfo,
	defaultProps
});