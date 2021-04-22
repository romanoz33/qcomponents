import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
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
			<Section height="200px">
				<Override slot="SectionContent" flex-direction="row" />
				<Components.Animation
					width="100%"
					height="300px"
					overflow-x="hidden"
					overflow-y="hidden"
					display="flex"
					align-items="center"
					justify-content="center"
					iteration="infinite"
					animation="Pop"
					duration="1s"
					test
					trigger="Onload"
					md-background="--color-lightD2"
				>
					<Text text-align="center" font="900 50px --fontFamily-serifTimes">
						Pop
					</Text>
				</Components.Animation>
				<Components.Animation
					width="100%"
					height="300px"
					overflow-x="hidden"
					overflow-y="hidden"
					display="flex"
					align-items="center"
					justify-content="center"
					iteration="infinite"
					animation="Juggle"
					duration="1s"
					test
					trigger="Onload"
					md-background="--color-lightD2"
				>
					<Text text-align="center" font="900 50px --fontFamily-serifTimes">
						Juggle
					</Text>
				</Components.Animation>
				<Components.Animation
					width="100%"
					height="300px"
					overflow-x="hidden"
					overflow-y="hidden"
					display="flex"
					align-items="center"
					justify-content="center"
					iteration="infinite"
					animation="Blink"
					duration="1s"
					test
					trigger="Onload"
					md-background="--color-lightD2"
				>
					<Text text-align="center" font="900 50px --fontFamily-serifTimes">
						Blink
					</Text>
				</Components.Animation>
			</Section>
			<Section>
				<Override slot="SectionContent" flex-direction="row" />
				<Components.Animation
					width="100%"
					height="300px"
					overflow-x="hidden"
					overflow-y="hidden"
					display="flex"
					align-items="center"
					justify-content="center"
					iteration="infinite"
					animation="Bounce"
					duration="1s"
					test
					trigger="Onload"
					md-background="--color-lightD2"
				>
					<Text text-align="center" font="900 50px --fontFamily-serifTimes">
						Bounce
					</Text>
				</Components.Animation>
				<Components.Animation
					width="100%"
					height="300px"
					overflow-x="hidden"
					overflow-y="hidden"
					display="flex"
					align-items="center"
					justify-content="center"
					iteration="infinite"
					animation="Jello"
					duration="1s"
					test
					trigger="Onload"
					md-background="--color-lightD2"
				>
					<Text text-align="center" font="900 50px --fontFamily-serifTimes">
						Jello
					</Text>
				</Components.Animation>
				<Components.Animation
					width="100%"
					height="300px"
					overflow-x="hidden"
					overflow-y="hidden"
					display="flex"
					align-items="center"
					justify-content="center"
					iteration="infinite"
					animation="Rubber"
					duration="1s"
					test
					trigger="Onload"
					md-background="--color-lightD2"
				>
					<Text text-align="center" font="900 50px --fontFamily-serifTimes">
						Rubber
					</Text>
				</Components.Animation>
			</Section>
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
						Название
					</Override>
					<Override slot="Text THead Col-1">
						Описание
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Trigger
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Действие, вызывающее анимацию
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Animation type
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Тип анимации
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						Fade Out
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Iteration Count
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Повторяемость анимации [once, infinity]
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						once
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Timing function
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Cкорость течения анимации
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Duration
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Продолжительность анимации
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						1s
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Delay before start
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Задержка перед началом анимации
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						0s
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Play animation
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Включить анимацию для теста.
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