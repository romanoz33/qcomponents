import React from 'react';
import atomize from "@quarkly/atomize";

const LightBox = props => <div {...props}>
	Say hello LightBox
</div>;

export default atomize(LightBox)({
	name: "LightBox",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "LightBox — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});