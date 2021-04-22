import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"pricelist"} />
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
					Pricelist{"\n\n"}
				</Text>
			</Box>
			<Components.Pricelist design="horizontal" active="2" />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Props{" "}
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
						Products{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Active column{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Design{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Show on screen (for horizontal design){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Show on screen (for vertical design){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Количество продуктов{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Активная колонка{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Дизайн компонента{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Высота компонента в px (Все остальные строки доступны по скролу){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Количество отображаемых колонок (Все остальные колонки доступны по скролу){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						4{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						2{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						vertical [horizontal]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						517{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						4{"\n\n"}
					</Override>
				</Components.Table>
			</Box>
			<Box margin="50px 0px 30px 0px" quarkly-title="Example 1 ">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пример с вертикальным положением:
				</Text>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
			</Box>
			<Components.Pricelist design="vertical" active="1" size="7" show="6" />
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