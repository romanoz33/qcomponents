import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vimeo"} />
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
					Vimeo
				</Text>
			</Box>
			<Components.Vimeo
				controls
				autopause
				playBackground={false}
				responsive
				video="187987907"
			/>
			<Components.Vimeo controls autopause playBackground={false} responsive />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Props{" "}
				</Text>
				<Box quarkly-title="Space">
					<Components.Table width="100%" showHeader colsProp="3" rowsProp="14">
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
							Color{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-1 Col-0">
							Enable{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-2 Col-0">
							Autopause{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-3 Col-0">
							Autoplay{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-4 Col-0">
							Show portrait{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-5 Col-0">
							Show title{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-6 Col-0">
							Show byline{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-7 Col-0">
							Responsive{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-8 Col-0">
							Video ID or URL{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-9 Col-0">
							Start{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-10 Col-0">
							Loop{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-11 Col-0">
							Muted{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-12 Col-0">
							Play background{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-13 Col-0">
							Volume{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-0 Col-1">
							Цвета элементов проигрывателя{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-1 Col-1">
							Показать элементы управления проигрывателя{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-2 Col-1">
							Автоматически останавливать при воспроизведении другого видео{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-3 Col-1">
							Воспроизвести видео, после загрузки страницы{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-4 Col-1">
							Отображать портрет владельца видео{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-5 Col-1">
							Показать название видео{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-6 Col-1">
							Отображать имя владельца видео{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-7 Col-1">
							Растянуть проигрыватель на всю ширину{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-8 Col-1">
							ID или URL видео{" \n\n"}
						</Override>
						<Override slot="Text TBody Row-9 Col-1">
							Старт с определенной секунды{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-10 Col-1">
							Воспроизводить видео завного по завершению{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-11 Col-1">
							Отключить звук видео{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-12 Col-1">
							Фоновый режим (скрываются элементы управления воспроизведением, включается автовоспроизведение и зацикливается видео){"\n\n"}
						</Override>
						<Override slot="Text TBody Row-13 Col-1">
							Громкость звука (диапазон от 0 до 1){"\n\n"}
						</Override>
						<Override slot="Text TBody Row-0 Col-2">
							#00ADEF{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-1 Col-2">
							true
						</Override>
						<Override slot="Text TBody Row-2 Col-2">
							true{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-4 Col-2">
							true{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-5 Col-2">
							true{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-6 Col-2">
							true{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-7 Col-2">
							true{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-8 Col-2">
							-
						</Override>
						<Override slot="Text TBody Row-3 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-9 Col-2">
							none{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-10 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-11 Col-2">
							false{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-12 Col-2">
							false{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-13 Col-2">
							1
						</Override>
					</Components.Table>
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