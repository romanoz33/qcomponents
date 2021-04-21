import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"collapse"} />
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
					Collapse
				</Text>
			</Box>
			<Components.Collapse>
				<Override slot="Button" disabled />
				<Text>
					Some text
				</Text>
			</Components.Collapse>
			<Box />
			<Components.Collapse animFunction="ease-in">
				<Override slot="Button">
					Toggle
				</Override>
				<Text font="18px/1.7 sans-serif" padding="10px 15px 10px 15px">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Lorem Ipsum
					</Strong>
					{" "}is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					<br />
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Why do we use it?
						<br />
					</Strong>
					<br />
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</Text>
			</Components.Collapse>
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Пропсы:
				</Text>
			</Box>
			<Components.Table showHeader colsProp="3" width="100%" rowsProp="3">
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
					Min animation duration (in seconds){"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-0">
					Max animation duration (in seconds){"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-0">
					Animation function{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-0">
					Animation function{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-1">
					Минимальная продолжительность анимации раскрытия / сворачивания{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-1">
					Cell 3-1
				</Override>
				<Override slot="Text TBody Row-2 Col-1">
					Cкорость течения анимации{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-2">
					Linear{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-2">
					1s{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-2">
					0.1s{"\n\n"}
				</Override>
			</Components.Table>
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