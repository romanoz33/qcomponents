import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"video"} />
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
					Video
				</Text>
			</Box>
			<Components.Video poster=" ">
				<Override slot="Video Tag" />
			</Components.Video>
			<Components.Source sm-margin="500px 0px 0px 0px" />
			<Components.Track />
			<Box>
				<Box margin="50px 0px 0px 0px">
					<Text font="600 24px sans-serif">
						Props video
					</Text>
				</Box>
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
						Loop{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Show controls{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Muted{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Autoplay{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Poster{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Src{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						PlayOnHover{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Зацикливает воспроизведение видео, чтобы оно повторялось с начала после завершения.{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Показать плеер{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Отключить звук{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Автоматическое воспроизведение видео, после загрузки страницы{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Ссылка на изображение постера{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Прямая ссылка на видеофайл{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Воспроизводить при наведении на видео{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						true
					</Override>
				</Components.Table>
			</Box>
			<Box>
				<Box margin="50px 0px 0px 0px">
					<Text font="600 24px sans-serif">
						Props source
					</Text>
				</Box>
				<Components.Table width="100%" colsProp="3" rowsProp="8" showHeader>
					<Override slot="Text TBody Row-0 Col-0">
						Src{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Ссылка на видео или аудио файл{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Type{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Codesc{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Srcset{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Sizes{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Device{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Media query{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Type{"\n\n"}
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
					<Override slot="Text TBody Row-1 Col-1">
						MIME-тип видео или аудио{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Значение видео или аудиокодека{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Ссылка на изображение{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Размеры изображения при разных размерах экрана{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Тип устройства для медиа запроса{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Mедиа-запрос, согласно которому будет выводиться изображение. (Работает только в элементе Picture.){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						MIME-тип изображения{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						all
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						none{"\n\n"}
					</Override>
				</Components.Table>
			</Box>
			<Box margin="50px 0px 30px 0px">
				<Text font="600 24px sans-serif">
					Пример с постером:
				</Text>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
				<Components.Video poster="https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
			</Box>
			<Box margin="50px 0px 30px 0px">
				<Text font="600 24px sans-serif">
					Пример с вложенным компонентом Track
				</Text>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
			</Box>
			<Box margin="50px 0px 30px 0px">
				<Text font="600 24px sans-serif">
					Пример с вложенным компонентом Source
				</Text>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
				<Components.Video poster=" ">
					<Components.Source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4" />
				</Components.Video>
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