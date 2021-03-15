import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 0px 30px" quarkly-title="Components">
			<Box height="100px" quarkly-title="Space" />
			<Box height="100px" quarkly-title="Title">
				<Text text-align="center" font="--headline1">
					Components
				</Text>
			</Box>
			<Components.MobileMenu>
				<Override slot="menu" flex-wrap="wrap">
					<Override
						slot="link"
						display="inline-block"
						padding="10px 10px 10px 10px"
						color="#4d4d4d"
						text-decoration-line="initial"
						text-align="center"
						box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
						transition="all 0.2s ease-in 0s"
						hover-background="#99fff6"
					/>
					<Override slot="item" color="#4d4d4d" padding="0 0 0 0" margin="10px 10px 10px 10px" />
					<Override slot="link-index">
						index
					</Override>
					<Override slot="link-audio">
						Audio
					</Override>
				</Override>
			</Components.MobileMenu>
			<Box height="100px" quarkly-title="Space" />
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});