import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
import MobileMenu from "./MobileMenu";
const defaultProps = {
	"padding": "0px 30px 0px 30px",
	"quarkly-title": "Components"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"height": "50px",
			"quarkly-title": "Space"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"height": "70px",
			"quarkly-title": "Title"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"text-align": "left",
			"font": "--headline2",
			"children": "Menu"
		}
	},
	"mobileMenu": {
		"kind": "MobileMenu",
		"props": {}
	},
	"mobileMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "menu",
			"flex-wrap": "wrap"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"display": "inline-block",
			"padding": "10px 10px 10px 10px",
			"color": "#4d4d4d",
			"text-decoration-line": "initial",
			"text-align": "center",
			"box-shadow": "0px 3px 2px 3px rgba(3, 3, 3, 0.07)",
			"transition": "all 0.2s ease-in 0s",
			"hover-background": "#99fff6"
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"color": "#4d4d4d",
			"padding": "0 0 0 0",
			"margin": "10px 10px 10px 10px"
		}
	},
	"overrideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"children": "index"
		}
	},
	"overrideOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-audio",
			"children": "Audio"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"height": "50px",
			"quarkly-title": "Space"
		}
	}
};

const HeadMenu = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		<Box {...override("box1")}>
			<Text {...override("text")} />
		</Box>
		<MobileMenu {...override("mobileMenu")}>
			<Override {...override("mobileMenuOverride")}>
				<Override {...override("overrideOverride")} />
				<Override {...override("overrideOverride1")} />
				<Override {...override("overrideOverride2")} />
				<Override {...override("overrideOverride3")} />
			</Override>
		</MobileMenu>
		<Box {...override("box2")} />
		{children}
	</Box>;
};

Object.assign(HeadMenu, { ...Box,
	defaultProps,
	overrides
});
export default HeadMenu;