import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"bgimageparallax"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box quarkly-title="Header" margin="50px 0px 100px 0px">
				<Text text-align="center" font="--headline1">
					BgImage Parallax
				</Text>
			</Box>
			<Components.BgImageParallax
				imageURL="https://romanbabad.ucoz.net/src/aba/1/default-picture-1440.png"
				height="600px"
				imageRepeat="repeat"
				imagePosition="center"
				scrollInertiaProp=".2"
				text-align="center"
				width="80%"
				margin="0px auto 0px auto"
			>
				<Override slot="Bground" height="1000px" />
			</Components.BgImageParallax>
			<Box margin="50px 0px 0px 0px" quarkly-title="Architecture">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Архитектура:
				</Text>
				<Box
					margin="0px 0px 50px 0px"
					display="flex"
					quarkly-title="Content"
					align-items="center"
					justify-content="center"
					text-align="center"
					border-width="2px"
					border-style="solid"
					border-color="#d3d3d3"
				>
					<Box display="flex" align-items="center" quarkly-title="Item" width="100%">
						<Text
							width="100%"
							font="18px sans-serif"
							margin="0 0 0 0"
							padding="15px 0px 15px 0px"
							height="auto"
							min-height="20px"
						>
							BgImage Parallax
						</Text>
						<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
					</Box>
					<Box width="100%" font="20px --fontFamily-sans" quarkly-title="Item">
						<Box display="flex" align-items="center" min-height="52px">
							<Text
								width="100%"
								font="18px sans-serif"
								margin="0 0 0 0"
								padding="15px 0px 15px 0px"
								height="auto"
								min-height="20px"
							>
								Bground
							</Text>
							<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
						</Box>
						<Box display="flex" align-items="center" min-height="52px">
							<Text
								width="100%"
								font="18px sans-serif"
								margin="0 0 0 0"
								padding="15px 0px 15px 0px"
								height="auto"
								min-height="20px"
							>
								Content
							</Text>
							<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table colsProp="3" showHeader rowsProp="6" width="100%">
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
						Ссылка на изображение{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Ссылка на изображение{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Размер изображения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Выравнивание изображения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Повтор изображения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Скорость прокрутки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Инерция прокрутки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Размер изображения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Выравнивание изображения, если оно меньше блока{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Повторять изображения по вертикали и горизонтали{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Скорость прокрутки изображения{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Прокрутка, после остановки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						cover{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						center{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						no-repeat{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						0.5{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						1{"\n\n"}
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