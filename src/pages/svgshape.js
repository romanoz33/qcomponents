import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"svgshape"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeadMenu />
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="50px 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Svg Shape
				</Text>
			</Box>
			<Components.SvgShape width="300px" height="200px" margin="0px auto 0px auto" />
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
						Type
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
						Тип формы
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						rectangle [line, ellipse, circle, square]
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
						Stroke
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
						Цвет рамки
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						-
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
						Srtoke width
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
						Толщина рамки (px)
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						1
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
						Stroke opacity
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
						Прозрачность рамки
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						1
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
						Stroke linecap
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
						Форма рамки
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						butt [round, square]
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
						Stroke dasharray
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
						Заполненность рамки
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
						Fill
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
						Цвет фигуры
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						-{"\n\n"}
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
						Fill opacity
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
						Прозрачность фигуры
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						1
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