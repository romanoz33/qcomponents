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
		<GlobalQuarklyPageStyles pageUrl={"timelinefull"} />
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
					TimeLine Full
				</Text>
			</Box>
			<Components.TimelineFull margin="0px 100px 0px 100px" width="auto">
				<Override slot="Descr 0">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
				</Override>
				<Override slot="Descr 1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
				</Override>
				<Override slot="Descr 2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
				</Override>
				<Override slot="Descr 3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
				</Override>
			</Components.TimelineFull>
			<Box height="100px" />
			<Box margin="50px 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					TimeLineList + 
TimeLineItem
				</Text>
			</Box>
			<Components.TimelineList margin="500px 0px 500 0px">
				<Components.TimelineItem>
					<Override slot="Timeline Dates">
						18:00 - 20:30
					</Override>
					<Override slot="Timeline Descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</Override>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</Override>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</Override>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</Override>
				</Components.TimelineItem>
			</Components.TimelineList>
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
							TimeLineList{" "}
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
							TimeLineItem
						</Text>
						<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы 
TimeLine Full

:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3">
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Number of items{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Alignment of items on the desctop{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Alignment of items on the mobile{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Mobile starts with the breakpoint{"\n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Количество элементов{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Способ выравнивания для десктоп from the left [from the left, from the right, ti the left, to the right]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Способ выравнивания для десктоп from the left [to the left, to the right]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						С какого брейкпоинта изменять на мобильный вид{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						4{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						from the left{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						to the left{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						sm{"\n\n"}
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