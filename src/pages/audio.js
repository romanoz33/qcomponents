import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"audio"} />
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
					Audio
				</Text>
			</Box>
			<Components.Audio
				controls
				autoPlay={false}
				muted={false}
				loop={false}
				src="https://uploads.quarkly.io/molecules/default-audio.mp3"
				margin="500px au 500px auto"
			>
				<Override slot="Audio Tag" margin="500px 0px 500px 0px" />
			</Components.Audio>
			<Components.Audio src="  " />
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Пропсы:
				</Text>
				<Components.Table showHeader width="100%" colsProp="3" rowsProp="5">
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
						Src{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Autoplay{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Show controls{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Muted{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Loop{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Прямая ссылка на аудиофайл{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Автоматическое воспроизведение аудио, после загрузки страницы{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Показать плеер{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Отключить звук{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Зацикливает воспроизведение аудио, чтобы оно повторялось с начала после завершения
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						false{"\n\n"}
					</Override>
				</Components.Table>
				<Box height="100px" />
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