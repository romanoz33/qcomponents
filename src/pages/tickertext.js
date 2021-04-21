import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"tickertext"} />
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
					Ticker Text
				</Text>
			</Box>
			<Components.TickerText move="enable" mode="chain" />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3">
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Speed{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Direction{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Mode{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Move{"\n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Скорость анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Направления анимации [toLeft, toRight]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Тип отображения [
						<br />
						chain  - бесконечная лента с дублированием текстов;
						<br />
						await -  бесконечная лента, с одиночным текстом;
						<br />
						smooth - ]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Состояние анимации [enable, disable]{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						5{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						toLeft{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						chain{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						enable{"\n\n"}
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