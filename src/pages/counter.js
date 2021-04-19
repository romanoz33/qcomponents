import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"counter"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.HeadMenu />
		<Box
			padding="15px 15px 15px 15px"
			quarkly-title="Wrapper"
			lg-padding="15px 15px 15px 15px"
			lg-border-width=".5px"
			lg-border-style="solid"
			lg-border-color="#b5b5b5"
			border-width=".5px"
			border-style="solid"
			border-color="#767676"
		>
			{" "}
			<Box margin="50px 0px 48px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Counter
				</Text>
			</Box>
			<Box
				min-height="50px"
				display="flex"
				justify-content="space-around"
				flex-wrap="wrap"
				lg-margin="100px 0px 100px 0px"
				width="75%"
				text-align="center"
				padding="32px 0px 48px 0px"
				margin="0px auto 0px auto"
			>
				<Box
					lg-padding="15px 15px 15px 15px"
					lg-border-width=".5px"
					lg-border-style="solid"
					lg-border-color="#b5b5b5"
					border-width="0px"
					border-style="none"
					padding="28px 32px 36px 32px"
					background="--color-lightD1"
					border-radius="32px"
				>
					<Text
						text-align="center"
						font="--headline3"
						height="auto"
						lg-color="#767676"
						color="--greyD2"
					>
						Clients worldwide
					</Text>
					<Components.Counter
						endingNumber="135"
						revers
						lg-color="#767676"
						lg-font="900 58px sans-serif"
						border-color="#b5b5b5"
						font="--headline2"
						color="--dark"
					/>
				</Box>
				<Box
					lg-padding="15px 15px 15px 15px"
					lg-border-width=".5px"
					lg-border-style="solid"
					lg-border-color="#b5b5b5"
					border-width="0px"
					border-style="none"
					padding="28px 32px 36px 32px"
					background="--color-lightD1"
					border-radius="32px"
				>
					<Text
						text-align="center"
						font="--headline3"
						height="auto"
						lg-color="#767676"
						color="--greyD2"
					>
						Organic likes
					</Text>
					<Components.Counter
						endingNumber="5000"
						revers
						lg-color="#767676"
						lg-font="900 58px sans-serif"
						border-color="#b5b5b5"
						font="--headline2"
						color="--dark"
					/>
				</Box>
				<Box
					lg-padding="15px 15px 15px 15px"
					lg-border-width=".5px"
					lg-border-style="solid"
					lg-border-color="#b5b5b5"
					border-width="0px"
					border-style="none"
					padding="28px 32px 36px 32px"
					background="--color-lightD1"
					border-radius="32px"
				>
					<Text
						text-align="center"
						font="--headline3"
						height="auto"
						lg-color="#767676"
						color="--greyD2"
					>
						Active employees
					</Text>
					<Components.Counter
						endingNumber="1100"
						revers
						lg-color="#767676"
						lg-font="900 58px sans-serif"
						border-color="#b5b5b5"
						font="--headline2"
						color="--dark"
					/>
				</Box>
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
						Starting Number
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
						Начальное значение
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						0
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
						Ending Number
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
						Конечное значение
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						100
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
						Revers
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
						Возрастание / Убывание
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						false
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
						Duration Animation
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
						Продолжительность анимации
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						2000
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
						Number Suffix
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
						Символ после числа
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
						Number Prefix
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
						Символ перед числом
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						none
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