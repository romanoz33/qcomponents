import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"yandexmap"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.YandexMap
			display="block"
			fullscreenControl
			searchControl
			zoomControl
			typeSelectorContol
			trafficControl
			zoomValue="6"
			height="500px"
			width="auto"
			margin="0px 100px 0px 100px"
		/>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="50px 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Yandex Map
				</Text>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Props{" "}
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="11">
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
						Zoom{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Latitude{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Longitude{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Search control{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Fullscreen control{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Geolocation control{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Zoom control{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Traffic{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-0">
						Ruler{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-0">
						Type selector{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-0">
						API Key{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Масштаб карты{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Широта{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Долгота{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Показать инструмент поиска{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Показать инструмент полного экрана{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Показать инструмент геопозиции{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Показать инструмент масштабирования{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						Показать пробки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-1">
						Показать линейку{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-1">
						Показать варианты слоев{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-1">
						-{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						9{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-2">
						none
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