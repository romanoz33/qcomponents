import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"livechat"} />
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
					LiveChat{"\n\n"}
				</Text>
				<Text color="#f90000" font="19px sans-serif">
					<Strong>
						Ошибка при публикации: https://app.netlify.com/sites/hungry-wozniak-7150fd/deploys/604f228b294def059836b1bc
					</Strong>
				</Text>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="3">
					<Override slot="Text TBody Row-0 Col-0">
						License ID{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Group number{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Chat sessions between groups{"\n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						ID чата (можно получить после регистрации на сайте livechatinc.com){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Сеансы чата между группами [ enable, disable]
						<br />
						(В случае, если установлены несколько чатов из разных групп, сеанс будет один){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Номер группы
						<br />
						(Инструкция по созданию групп -{" "}
						<Link href="https://beta.quarkly.io/preview#/https://beta.quarkly.io/preview#/https://www.livechat.com/help/dividing-live-chat-by-group/">
							ссылка
						</Link>
						{"\n\n"}
					</Override>
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						enable
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