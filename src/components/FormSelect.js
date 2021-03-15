import React from 'react';
import atomize from "@quarkly/atomize";
import { Box } from '@quarkly/widgets';
import Select from 'react-select';
const propInfo = {
	variants: {
		title: 'Variants',
		control: 'input',
		multiply: true,
		type: 'string',
		weight: '1'
	}
};

const getOptions = x => {
	if (typeof x === 'undefined') return [];
	const mapOptions = {};
	const options = [];
	const arr = x.split(',');
	arr.forEach(k => {
		const [key, value] = k.split('.');

		if (value) {
			if (!mapOptions[key] || typeof mapOptions[key] === 'boolean') mapOptions[key] = {};
			console.log(mapOptions, key, value);
			mapOptions[key][value] = true;
		} else {
			mapOptions[key] = true;
		}

		console.log(key, value);
	});
	const optionsKeys = Object.keys(mapOptions);
	optionsKeys.forEach((v, i) => {
		const option = {
			label: optionsKeys[i]
		};

		if (typeof mapOptions[v] === 'object') {
			option.options = Object.keys(mapOptions[v]).map(k => ({
				label: k,
				value: k
			}));
		} else {
			option.value = v;
		}

		options.push(option);
	});
	console.log(options);
	return options;
};

const FormSelect = ({
	variants,
	...props
}) => {
	const options = getOptions(variants);
	return <Box {...props}>
		<Select options={options} />
	</Box>;
};

export default atomize(FormSelect)({
	name: "FormSelect",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "FormSelect — my awesome component"
	},
	propInfo
});