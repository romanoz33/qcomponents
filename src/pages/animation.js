import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"animation"} />
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
					Animation
				</Text>
			</Box>
			<Components.Animation
				iteration="infinite"
				test
				timingFunction="ease"
				duration="2s"
				animation="↑ Slide In"
				lg-margin="500px 0px 500px 0px"
			>
				<Text quarkly-title="Lorem" font="normal 20px/150% sans-serif">
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{"\n\n\n"}
				</Text>
			</Components.Animation>
			<Components.Animation />
			<Box margin="50px 0px 0px 0px" quarkly-title="Architecture">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Архитектура:
				</Text>
				<Box
					margin="0px 0px 50px 0px"
					display="flex"
					quarkly-title="Content"
					align-items="center"
					justify-content="center"
					text-align="center"
					border-width="2px"
					border-style="solid"
					border-color="#d3d3d3"
				>
					<Box display="flex" align-items="center" quarkly-title="Item" width="100%">
						<Text
							width="100%"
							font="18px sans-serif"
							margin="0 0 0 0"
							padding="15px 0px 15px 0px"
							height="auto"
							min-height="20px"
						>
							Animation
						</Text>
						<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
					</Box>
					<Box display="flex" align-items="center" quarkly-title="Item" width="100%">
						<Text
							width="100%"
							font="18px sans-serif"
							margin="0 0 0 0"
							padding="15px 0px 15px 0px"
							height="auto"
							min-height="20px"
						>
							Animation Presets
						</Text>
						<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
					</Box>
				</Box>
			</Box>
			<Text font="600 24px sans-serif" quarkly-title="Title">
				Пропсы:
			</Text>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Components.Table showHeader colsProp="3" rowsProp="7" width="100%">
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
						Trigger{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Действие, вызывающее анимацию{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Animation type{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Тип анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						Fade Out{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Iteration Count{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Повторяемость анимации [once, infinity]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						once{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Timing function{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Cкорость течения анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Duration{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Продолжительность анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						1s{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Delay before start{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Задержка перед началом анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						0s{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Play animation{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Включить анимацию для теста.{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						ffalse
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