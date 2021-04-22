import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"cardflip"} />
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
					Slider
				</Text>
			</Box>
			<Components.CardFlip flipTriggerProp="Click" isFlippedProp={false}>
				<Text>
					Some text
				</Text>
				<Button>
					Button
				</Button>
			</Components.CardFlip>
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
							CardFlip
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
							Image
						</Text>
						<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="5">
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
						Flip Duration{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Timing Function{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Flip Trigger{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Flip Direction{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Aspect Ratio{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Продолжительность анимации разворота{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Cкорость течения анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Действие, вызывающее анимацию [Click, Hover]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Направление разворота [toRight, toLeft, ToUp, toDown]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Размер изображения в пропорциях [auto, 16:9, 4:3, 1:1, 3:4, 9:16 ]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						1000{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						Click{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						toRight{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						auto{"\n\n"}
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