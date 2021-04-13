import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"slider"} />
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
					Slider
				</Text>
			</Box>
			<Box margin="50px 0px 0px 0px" quarkly-title="Architecture">
				<Components.Slider />
			</Box>
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
						Показать заголовок
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
						Показать заголовок{"\n\n"}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						true{" "}
					</Text>
				</Box>
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
						Показать описание
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
						Показать описание{"\n\n"}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						true{"\n\n"}
					</Text>
				</Box>
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
						Показать кнопку
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
						Показать кнопку{"\n\n"}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						true{"\n\n"}
					</Text>
				</Box>
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
						Показать стрелки{" "}
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
						Показать стрелки{" \n\n"}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						true{" "}
					</Text>
				</Box>
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
						Показать точки
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
						Показать точки{"\n\n"}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						true{" "}
					</Text>
				</Box>
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
						Длительность анимации
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
						Длительность анимации{"\n\n"}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						0.5s
					</Text>
				</Box>
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
						Функция анимации
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
						Скорость течения анимации
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						linear
					</Text>
				</Box>
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
						Количество слайдов
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
						Количество слайдов{" "}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						4
					</Text>
				</Box>
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
						Соотношение сторон
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
						Соотношение сторон слайдов
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						16:9
					</Text>
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