import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"menu"} />
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
					Menu
				</Text>
			</Box>
			<Menu exact-active-match>
				<Override
					slot="link"
					border-color="#777b80"
					color="#747678"
					text-decoration-line="initial"
					font="20px sans-serif"
					margin="5px 0px 5px 0px"
				/>
				<Override slot="item" margin="5px 0px 5px 0px" />
			</Menu>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="3">
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
						depth{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Глубина вложенности{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						1{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						rootid{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						root{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						exact active match{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Альтернативное имя{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						false
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