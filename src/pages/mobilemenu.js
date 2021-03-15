import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"mobilemenu"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeadMenu />
		<Box padding="0px 30px 0px 30px">
			<Box margin="50px 0px 100px 0px">
				<Text text-align="center" font="--headline1">
					Mobile menu
				</Text>
			</Box>
			<Components.MobileMenu />
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Пропсы:
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
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
			<Box />
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Mobile version breakpoint
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
					Брейкпоинт, меньше которого меню сворачивается в бургер
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					md
				</Text>
			</Box>
			<Box />
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					При добавлении автоматически подтягиваются все имеющиеся страницы сайта
				</Text>
			</Box>
			<Box height="100px" />
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