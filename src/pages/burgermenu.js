import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"burgermenu"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 0px 30px">
			<Box margin="50px 0px 100px 0px">
				<Text text-align="center" font="--headline1">
					Burger menu
				</Text>
			</Box>
			<Components.BurgerMenu>
				<Override slot="menu" exact-active-match>
					<Override slot="item" color="#ff0404" />
					<Override slot="link" color="#0083ff" />
				</Override>
			</Components.BurgerMenu>
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Вложенный элемент "Menu" имеет пропсы:
				</Text>
			</Box>
			<Components.Table showHeader colsProp="3" rowsProp="3" width="100%">
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
					Depth{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-0">
					Rootid{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-0">
					Exact active match{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-1">
					Уровень вложенности{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-1">
					Идентификатор{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-1">
					Включить совпадения{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-2">
					1
				</Override>
				<Override slot="Text TBody Row-1 Col-2">
					root
				</Override>
				<Override slot="Text TBody Row-2 Col-2">
					true
				</Override>
			</Components.Table>
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
					При добавлении автоматически подтягиваются все имеющиеся страницы сайта{"\n\n"}
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