import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"youtube"} />
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
					YouTube
				</Text>
			</Box>
			<Components.YouTube variant="Fast and low traffic (recomended)" margin="500px 100 500px 100px" videoId="Rzgdz1mbLbE" url="https://www.youtube.com/watch?v=Rzgdz1mbLbE" />
			<Box />
			<Components.YouTube variant="Fast and low traffic (recomended)" margin="500px 100 500px 100px" />
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
						variant{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Src{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Alt{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Loop{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Autoplay{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Start{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						End{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						[fast and low traffic, standart]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Ссылка на видео ролик из YouTube{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						-
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Ссылка на видео ролик из YouTube{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Автоматически воспроизвести видео, после загрузки страницы{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Начать воспроизведение с определенной секунды{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Количество секунд, после которой видео остановится (Время измеряется с начала видео, а не со значения параметра start ){" \n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						0{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						My video
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						--
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						fast and low traffic{"\n\n"}
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