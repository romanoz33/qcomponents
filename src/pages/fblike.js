import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"fblike"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="50px 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					FB Like
				</Text>
			</Box>
			<Components.FbLike />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Header row"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Название
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Описание
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						Значение по дефолту
					</Text>
				</Box>
				<Box quarkly-title="Space" />
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 1"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Referal
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Реферал
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						none
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 2"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Color scheme
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Цветовая схема
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						light
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 3"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Share
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					/>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						off
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 4"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						URL
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					/>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						none
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 5"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Layout
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					/>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						standart
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 6"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Size
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					/>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						small
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 7"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Action
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					/>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						like
					</Text>
					{" "}
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 8"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Kid directed site
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					/>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						off
					</Text>
					{" "}
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 8"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Facebook App ID
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					/>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						none
					</Text>
					{" "}
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 8"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Language
					</Text>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						Язык
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						English
					</Text>
					{" "}
				</Box>
			</Box>
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