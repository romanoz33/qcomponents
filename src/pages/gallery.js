import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"gallery"} />
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
					Gallery
				</Text>
			</Box>
			<Components.Gallery autoFillInProp offScrollProp hideLoaderFullImage={false} aspectRatioProp="auto">
				<Override
					slot="Item"
					stretchFull
					showFullImage={false}
					border-color="#690b0b"
					border-width="2px"
					border-style="red"
					fullSrc="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					previewSrc="https://images.unsplash.com/photo-1618249311687-ec9599381287?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
				/>
				<Override slot="Item 0" showFullImage={false} fullSrc="https://images.unsplash.com/photo-1617820784160-a18adff1cdc4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" previewSrc="https://images.unsplash.com/photo-1618248047249-9bb3341fd6b6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
				<Override slot="Item 3" showFullImage={false} />
				<Override slot="Item 1" showFullImage previewSrc="https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
				<Override slot="Item 2" showFullImage={false} />
			</Components.Gallery>
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
							Gallery
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
								GalleryLoader
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
								GalleryScrollBlock
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
								GalleryLightBox{"\n\n"}
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
								GalleryItem{"\n\n"}
							</Text>
							<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы Gallery:
				</Text>
				<Components.Table width="100%" colsProp="3" rowsProp="11" showHeader>
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
						Количество изображений{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Количество изображений галереи{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						8
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Коичество столбцов{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Количество столбцов галереи{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						4
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Ширина отступов{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Ширина отступов между изображениями. Задаются в любых измерениях (px, %, pt и т.д.) Если указать просто цифру, то задается в px{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						10
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Автоматически заполнять свободные места{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						В случае, если в галерее образуются свободные места, заполнять его изображением, который помещается в это место.{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Отключить скрол{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						При открытии полной картинки, возможность скрола окна пропадает{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Отключить лоадер для полной картинки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						При открытии полной картинки, если она еще не прогрузилась, показывается лоадер. Как только картинка загрузится, лоадер исчезнет.{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Соотношения сторон{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Варианты загрузки изображений{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						<Strong>
							В конструкторе:{" "}
							<br />
						</Strong>
						- При выборе "Все сразу" и "При скроле"  - загружаются и показываются сразу все имеющиеся изображения;
						<br />
						- При выборе "По клику" - Загружаются и показываются кол-во изображений, помещающиеся в полтора экрана. Снизу появляется кнопка "Загрузить еще". По клику, подгружаются столько же изображений.
						<br />
						<Strong>
							На сайте:{" "}
						</Strong>
						<br />
						- Если выбрано "Все сразу " - загружаются и показываются сразу все имеющиеся изображения;
						<br />
						- Если выбрано " При скроле " -  Загружаются и показываются кол-во изображений, помещающиеся в полтора экрана. Далее, при скроле подгружаются повторно такие же количества изображений.
						<br />
						- Если выбрано " По клику " -   Загружаются и показываются кол-во изображений, помещающиеся в полтора экрана. Снизу появляется кнопка "Загрузить еще". По клику, подгружаются столько же изображений.
						<br />
						<br />
						Кол-во подгружаемых изображений завит от размера самого галереи и размеров блоков с изображениями.{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						Все сразу{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						<Strong>
							auto{" "}
						</Strong>
						- Пропорции изображений не меняются.
						<br />
						16:9, 4:3, 3:2, 1:1, 2:3, 3:4,  9:16
						<br />
						<br />
						Соотношение сторон рассчитывается от ширина изображений.{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						auto{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-0">
						Максимальная ширина изображений{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-1">
						Максимальная ширина блока с изображением. 1fr - занимает все свободное пространство, с учетом количество столбцов{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-2">
						1fr{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-0">
						Минимальная ширина изображений{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-1">
						Минимальная ширина блока с изображением.{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-2">
						80{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-0">
						Отключить лоадер для превью{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-1">
						Если превью изображений не прогрузились, показывается лоадер.  Как только картинка загрузится, лоадер исчезнет.{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-2">
						false
					</Override>
				</Components.Table>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы GalleryItem:
				</Text>
				<Components.Table showHeader width="100%" colsProp="3" rowsProp="6">
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
						Категория image full{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Категория image preview{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Ширина в столбцах{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Высота в столбцах{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Растянуть на всю ширину и высоту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Показать изображения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Все стандартные пропсы изображений, для полной картинки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Все стандартные пропсы изображений, для превью картинки{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Ширина элемента в кол-ве столбцах{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Ширина элемента в кол-ве столбцах. В случае, если элемент занимает всю ширину галереи, высота не увеличивается. Это поведение грида.{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Изображение растягивается на всю ширину и высоту блока, если пропорции картинки не совпадают с пропорциями блока{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Когда галочка активна, показывается полная картинка lightbox{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						-
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						4
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						1
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						1
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						false
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