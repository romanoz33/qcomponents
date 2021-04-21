import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
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
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="6">
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Starting Number{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Ending Number{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Revers{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Duration Animation{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Number Suffix{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Number Prefix{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Начальное значение{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Конечное значение{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Возрастание / Убывание{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Продолжительность анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Символ после числа{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Символ перед числом{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						0{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						100{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						2000
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						none{"\n\n"}
					</Override>
				</Components.Table>
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