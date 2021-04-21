import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"slider"} />
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
					Slider
				</Text>
			</Box>
			<Box margin="50px 0px 0px 10" quarkly-title="Architecture">
				<Components.Slider height="600px">
					<Override slot="Slide Image" filter="brightness(40%) saturate(80%)" />
					<Override slot="Arrow" background="none" />
					<Override slot="Point Icon :active" border-color="none" color="#ffffff" />
					<Override slot="Point Icon" padding="4px 5px 4px 5px" />
					<Override slot="Point" opacity="0.4" />
					<Override slot="Arrow Next" background="none" />
					<Override slot="Arrow Prev" background="none" />
					<Override slot="Points" height="60px" />
					<Override slot="Slide Image 1" src="https://images.unsplash.com/photo-1618759047667-ef9bf8828d98?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
					<Override slot="Slide Image 2" src="https://images.unsplash.com/photo-1618762058219-e8928e457b3c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
					<Override slot="Slide Image 3" src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
					<Override slot="Slide Image 4" src="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
				</Components.Slider>
				<Components.Slider>
					<Override slot="Slide Image" />
					<Override slot="Arrow" background="none" />
					<Override slot="Point Icon" padding="4px 5px 4px 5px" />
					<Override slot="Point Icon :active" border-color="none" color="#ffffff" />
					<Override slot="Point" opacity="0.4" />
					<Override slot="Arrow Next" background="none" />
					<Override slot="Arrow Prev" background="none" />
					<Override slot="Slide Content" display="none" />
					<Override
						slot="Arrow Icon"
						background="--color-light"
						border-radius="50%"
						color="--darkL2"
						font="38px sans-serif"
						size="38px"
						width="48px"
						height="48px"
						padding="0px 0px 0px 0px"
					/>
				</Components.Slider>
				<Components.Slider>
					<Override slot="Slide Image" position="relative" display="block" flex="1 1 auto" />
					<Override slot="Arrow" background="none" />
					<Override slot="Point Icon" padding="4px 5px 4px 5px" />
					<Override slot="Point Icon :active" border-color="none" color="#ffffff" />
					<Override slot="Point" opacity="0.4" />
					<Override slot="Arrow Next" background="none" />
					<Override slot="Arrow Prev" background="none" />
					<Override
						slot="Slide Content"
						width="100%"
						display="flex"
						position="relative"
						top="0px"
						left={0}
						right={0}
						bottom={0}
						transform="none"
						background="--color-lightD1"
						justify-content="space-between"
						align-items="flex-start"
						padding="0px 16px 12px 16px"
					/>
					<Override
						slot="Arrow Icon"
						background="--color-light"
						border-radius="50%"
						color="--darkL2"
						font="38px sans-serif"
						size="38px"
						width="48px"
						height="48px"
						padding="0px 0px 0px 0px"
					/>
					<Override slot="Slide" display="flex" flex-direction="column" />
					<Override slot="Slide Head" color="--darkL2" width="100%" text-align="left" />
					<Override slot="Slide Text" color="--darkL2" text-align="left" />
					<Override slot="Slide Link" margin="16px 2px 16px 2px" />
					<Override slot="Points" top="75%" />
				</Components.Slider>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
			</Box>
			<Components.Table width="100%" showHeader colsProp="3" rowsProp="9">
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
					Показать заголовок{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-1">
					Показать заголовок{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-2">
					true{" \n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-0">
					Показать описание{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-1">
					Показать описание{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-2">
					true{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-0">
					Показать кнопку{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-1">
					Показать кнопку{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-2">
					true
				</Override>
				<Override slot="Text TBody Row-3 Col-0">
					Показать стрелки{" \n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-0">
					Показать точки{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-1">
					Показать стрелки{" \n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-1">
					Показать точки{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-2">
					true{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-2">
					true{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-5 Col-0">
					Длительность анимации{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-6 Col-0">
					Функция анимации{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-7 Col-0">
					Количество слайдов{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-8 Col-0">
					Соотношение сторон{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-5 Col-1">
					Длительность анимации{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-5 Col-2">
					0.5s{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-6 Col-1">
					Скорость течения анимации{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-6 Col-2">
					linear{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-7 Col-1">
					Количество слайдов{" \n\n"}
				</Override>
				<Override slot="Text TBody Row-7 Col-2">
					4{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-8 Col-1">
					Соотношение сторон слайдов{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-8 Col-2">
					16:9{"\n\n"}
				</Override>
			</Components.Table>
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