import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"card"} />
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
					Card
				</Text>
			</Box>
			<Components.Card
				showTitle
				showText
				showButton
				showImage
				width="350px"
			>
				<Override slot="Card Image AspectRatio" src="https://romanbabad.ucoz.net/src/aba/1/default-picture-1440.png" />
				<Override slot="Card Title">
					The mountains{"\n\n"}
				</Override>
				<Override slot="Card Text" font="300 20px/100% sans-serif">
					Great view...
					<br />
					{"\n\n"}
				</Override>
				<Override slot="Card Button">
					More
				</Override>
			</Components.Card>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="7">
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
						View{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Отображение{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						vertical{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Show title{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Show text{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Show button{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Show image{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Image type{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Aspect ratio{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Показать Заголовок{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Показать Описание{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Показать кнопку{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Показать изображение{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Тип изображения [image, icon]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Формат изображения [none, square, circle, 4:3, 3:4]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						true{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						true{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						true{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						image{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						square{"\n\n"}
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