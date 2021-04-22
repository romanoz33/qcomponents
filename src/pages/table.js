import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"table"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="50px 0px 100px 0px">
				<Text text-align="center" font="--headline1">
					Table
				</Text>
			</Box>
			<Components.Table
				showHeader
				showFooter
				showHeader2="Show"
				colsProp="4"
				rowsProp="3"
				width="100%"
			>
				<Override slot="Text THead Col-0">
					Name
				</Override>
				<Override slot="Text THead Col-1">
					City
				</Override>
				<Override slot="Text THead Col-2">
					Phone
				</Override>
				<Override slot="Text THead Col-3">
					Sex
				</Override>
				<Override slot="Text TBody Row-0 Col-0">
					Roman
				</Override>
				<Override slot="Text TBody Row-1 Col-0">
					Alex
				</Override>
				<Override slot="Text TBody Row-2 Col-0">
					David
				</Override>
				<Override slot="Text TFoot Col-0">
					Sofia
				</Override>
				<Override slot="Text TBody Row-0 Col-1">
					Moscow
				</Override>
				<Override slot="Text TBody Row-1 Col-1">
					London
				</Override>
				<Override slot="Text TBody Row-2 Col-1">
					Berlin{" \n\n"}
				</Override>
				<Override slot="Text TFoot Col-1">
					Sydney{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-2">
					+7 999 000 00 00
				</Override>
				<Override slot="Text TBody Row-1 Col-2">
					+44 20 0000 0000
				</Override>
				<Override slot="Text TBody Row-2 Col-2">
					+49 3000 0000
				</Override>
				<Override slot="Text TFoot Col-2">
					{" "}+61 28 000000
				</Override>
				<Override slot="Text TBody Row-0 Col-3">
					male
				</Override>
				<Override slot="Text TBody Row-1 Col-3">
					male
				</Override>
				<Override slot="Text TBody Row-2 Col-3">
					male
				</Override>
				<Override slot="Text TFoot Col-3">
					female
				</Override>
				<Override slot="Cell" background="#ffffff" />
				<Override slot="Cell TBody Row-1" background="#ffffff" />
				<Override slot="Cell THead" background="#ffffff" />
			</Components.Table>
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Props{" "}
				</Text>
			</Box>
			<Components.Table width="100%" colsProp="3" rowsProp="5" showHeader>
				<Override slot="Text TBody Row-0 Col-0">
					Show header{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-0">
					Show footer{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-0">
					Short Description{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-0">
					Cols{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-0">
					Rows{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-1">
					Показать Header{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-1">
					Показать Footer{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-1">
					Описание таблицы. Используются поисковыми системами или речевыми браузерами.{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-1">
					Количество колонок{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-1">
					Количество строк{"\n\n"}
				</Override>
				<Override slot="Text THead Col-0">
					Название{"\n\n"}
				</Override>
				<Override slot="Text THead Col-1">
					Описание{"\n\n"}
				</Override>
				<Override slot="Text THead Col-2">
					Значение по дефолту{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-2">
					false
				</Override>
				<Override slot="Text TBody Row-1 Col-2">
					false{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-2">
					none
				</Override>
				<Override slot="Text TBody Row-3 Col-2">
					8
				</Override>
				<Override slot="Text TBody Row-4 Col-2">
					4
				</Override>
			</Components.Table>
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