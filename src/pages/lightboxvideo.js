import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdPlayCircleFilled } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lightboxvideo"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="0 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Lightbox Video
				</Text>
			</Box>
			<Components.LightBoxVideo text-align="center">
				<Box>
					<Icon category="md" icon={MdPlayCircleFilled} size="60px" />
				</Box>
			</Components.LightBoxVideo>
			<Box quarkly-title="Props" height="auto" min-height="20px" margin="500 0px 0px 0px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" colsProp="3" rowsProp="3" showHeader>
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
						Показать изображение{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Отключить скролл{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Деактивировать Lightbox{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0" />
					<Override slot="Text TBody Row-4 Col-0" />
					<Override slot="Text TBody Row-5 Col-0" />
					<Override slot="Text TBody Row-6 Col-0" />
					<Override slot="Text TBody Row-0 Col-1">
						Показать полное изображение Lightbox{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Запретить возможность прокрутки при открытии Lightbox{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Запретить открытие Lightbox{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1" />
					<Override slot="Text TBody Row-4 Col-1" />
					<Override slot="Text TBody Row-5 Col-1" />
					<Override slot="Text TBody Row-6 Col-1" />
					<Override slot="Text TBody Row-0 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2" />
					<Override slot="Text TBody Row-4 Col-2" />
					<Override slot="Text TBody Row-5 Col-2" />
					<Override slot="Text TBody Row-6 Col-2" />
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