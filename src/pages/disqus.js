import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"disqus"} />
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
					Disqus
				</Text>
			</Box>
			<Components.Disqus identifierProp="sasdasd" languageProp="en">
				<Override slot="Disqus Content" languageProp="en" width="auto" />
			</Components.Disqus>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title" margin="76px 0px 16px 0px">
					Пропсы:
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
						Shortname{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Имя вашей ленты. Подробнее здесь:{" "}
						<Link href="https://beta.quarkly.io/preview#/https://help.disqus.com/en/articles/1717111-what-s-a-shortname">
							ссылка
						</Link>
						{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						-{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Language{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Язык{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						ru{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Идентификатор обсуждения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Идентификатор обсуждения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						URL-адрес обсуждения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						URL-адрес обсуждения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Заголовок обсуждения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Заголовок обсуждения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						-
					</Override>
				</Components.Table>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 4"
				>
					<Text
						width="100%"
						font="18px sans-serif"
						padding="15px 15px 15px 15px"
						margin="0 0 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#eaeaea"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							*
						</Strong>
						{" "}Идентификатор, URL-адрес и заголовок обсуждения создаются и сохраняются при первом комментарии. Далее не изменяются.{" "}
						<br />
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Подробнее тут:
						</Span>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" "}
							<Link
								href="https://help.disqus.com/en/articles/1717084-javascript-configuration-variables"
								target="_blank"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								ссылка
							</Link>
						</Strong>
					</Text>
				</Box>
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