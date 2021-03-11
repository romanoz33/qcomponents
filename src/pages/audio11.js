import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"audio11"} />
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
					Video
				</Text>
			</Box>
			<Components.Video />
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Пропсы:
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Название
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Описание
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					Значение по дефолту
				</Text>
			</Box>
			<Box />
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					PlayOnHover
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Воспроизводить при наведении на видео{" "}
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					off
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Src
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Прямая ссылка на видеофайл
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					-
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Poster
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Ссылка на изображение постера
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					-
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Autoplay
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Автоматическое воспроизведение видео, после загрузки страницы
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					off
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Show controls
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Показать плеер
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					on
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Muted
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Отключить звук{" "}
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					off
				</Text>
			</Box>
			<Box display="flex" border-width="1px" border-style="solid" border-color="#eaeaea">
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Loop
				</Text>
				<Text
					width="100%"
					font="18px sans-serif"
					padding="15px 15px 15px 15px"
					margin="0 0 0 0"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
				>
					Зацикливает воспроизведение видео, чтобы оно повторялось с начала после завершения.
				</Text>
				<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
					off
				</Text>
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
				<Components.Video>
					<Components.Track isDefault kind="descriptions" label="dfgdfgdf" />
				</Components.Video>
			</Box>
			<Box height="100px" />
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