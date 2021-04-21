import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vkcomments"} />
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
					VK Comments
				</Text>
			</Box>
			<Components.VkComments
				apiId="7802296"
				attachGraffiti
				attachAudio
				attachVideo
				attachPhoto
				attachLink
			/>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="11">
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
						Graffiti{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Photo{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Audio{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Video{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Link{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						VK App ID{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Page ID{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Limit{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-0">
						Auto Publish{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-0">
						No Realtime{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-0">
						Page URL{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Возможность прикрепления граффити{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Возможность прикрепления изображений{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Возможность прикрепления аудио{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Возможность прикрепления видео{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Возможность прикрепления ссылок{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						ID виджета{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Внутренний идентификатор страницы.  Используйте{" "}
						<Strong>
							page_id
						</Strong>
						, чтобы разместить два и более независимых виджетов на одной странице{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						Максимальное число комментариев на странице. (мин:{" "}
						<Em>
							5
						</Em>
						, мак:{" "}
						<Em>
							100)
						</Em>
						{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-1">
						Aвтоматически публиковать комментарии на странице пользователя{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-1">
						Обновлять ленту комментариев в режиме реального времени.{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-1">
						URL страницы, ссылка на которую будет прикреплена к комментарию при его публикации на странице ВКонтакте{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						true{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						true{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						true{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						true{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-10 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						5
					</Override>
					<Override slot="Text TBody Row-8 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-9 Col-2">
						false{"\n\n"}
					</Override>
				</Components.Table>
				<Box quarkly-title="Space" />
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