import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
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
		<Box height="100px" />
		<Text text-align="center" font="--headline1">
			Components
		</Text>
		<Box height="100px" />
		<Box display="flex">
			<Link
				href="/audio"
				height="auto"
				box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
				text-decoration-line="initial"
				color="#4d4d4d"
				margin="10px 10px 10px 10px"
				padding="10px 10px 10px 10px"
				hover-background="#99fff6"
				transition="all 0.2s ease-in 0s"
				target="_blank"
			>
				Audio
			</Link>
		</Box>
		<Box height="100px" />
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