import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"looptext"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="0 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Loop Text{"\n\n"}
				</Text>
			</Box>
			<Components.LoopText fade mask display="block">
				<Override slot="After Text" />
				<Override slot="Before Text" />
				<Override slot="Looped Text" />
			</Components.LoopText>
			<Box quarkly-title="Props" height="auto" min-height="20px" margin="500 0px 0px 0px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" colsProp="3" rowsProp="7" showHeader>
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
						Интервал смены слайдеров{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Задержка между началом анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Скорость смены слайдера{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Анимация появления и скрытия{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Скрыть анимации на границе{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Запретить перенос текста{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Список слайдеров{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Интервал смены слайдеров (в миллисекундах){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Задержка между началом анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Скорость смены слайдера{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Показывать старый и новый слайдер{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						-{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Запретить перенос текста{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Список названий слайдеров{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						1500
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						0
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						150
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
						-
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