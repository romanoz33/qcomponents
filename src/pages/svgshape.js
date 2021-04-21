import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"svgshape"} />
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
					Svg Shape
				</Text>
				<Components.SvgShape />
			</Box>
			<Box display="flex" margin="500px 10 500px 100px">
				<Components.SvgShape
					width="300px"
					height="200px"
					margin="0px auto 0px auto"
					strokeWidth="8"
					type="Circle"
					stroke="#7df7e0"
					fill="#194968"
					strokeLinecap="butt"
					strokeDasharray="0"
				/>
				<Components.SvgShape
					width="300px"
					height="200px"
					margin="0px auto 0px auto"
					strokeWidth="8"
					fill="#0094ff"
					stroke="#393838"
					strokeLinecap="round"
					strokeDasharray="31"
					type="Square"
				/>
				<Components.SvgShape
					width="300px"
					height="200px"
					margin="0px auto 0px auto"
					strokeWidth="8"
					type="Ellipse"
					fill="#f76363"
					stroke="#c4c8c8"
					strokeLinecap="butt"
					strokeDasharray="0"
				/>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="8">
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
						Type{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Stroke{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Srtoke width{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Stroke opacity{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Stroke linecap{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Stroke dasharray{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Fill{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Fill opacity{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Тип формы{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Цвет рамки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Толщина рамки (px){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Прозрачность рамки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Форма рамки  [round, square]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Заполненность рамки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Цвет фигуры{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						Прозрачность фигуры{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						rectangle{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						1{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						1{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						butt
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						1{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
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