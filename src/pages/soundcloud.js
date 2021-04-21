import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"soundcloud"} />
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
					Sound Cloud
				</Text>
				<Text color="#ff0000" font="21px sans-serif">
					<Strong>
						Ошибка при публикации:{" "}
						<Link
							href="https://app.netlify.com/sites/hungry-wozniak-7150fd/deploys/604b8f9a39bba01cb86cdbc9"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							ссылка{" "}
						</Link>
					</Strong>
				</Text>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="2">
					<Override slot="Text TBody Row-0 Col-0">
						Type{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						url{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Тип проигрывателя{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Ссылка на аудио трек из SounCloud{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						standart [visual]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						-
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
				</Components.Table>
			</Box>
		</Box>
		<Box />
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