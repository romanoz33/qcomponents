import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Hr, Strong } from "@quarkly/widgets";
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
			</Box>
			<Components.LiveChat license="12685392" chatBetweenGroups="enable" />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Header row"
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
				<Box quarkly-title="Space" />
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 1"
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
						License ID
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
						ID чата (можно получить после регистрации на сайте livechatinc.com)
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						none{" "}
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 2"
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
						Отступ стрелочки
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
						Отступ стрелочки от блока с контентом
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						4px
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 3"
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
						ArroowStatusProp
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
						Показать / Скрыть стрелочку
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						on
					</Text>
				</Box>
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
						Положение Tooltip
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
						Положение стрелочки относительно блока с контентом. [top, bottom, left, right]
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						top
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 5"
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
						Цвет Tooltip
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
						Цвет Tooltip, включая цвет стрелочки
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						--color-dark
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 6"
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
						Отступ от краев
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
						Минимальное расстояние между Tooltip до любого края окна
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						0
					</Text>
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 7"
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
						Показать Tooltip
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
						:always - Отображать всегда.
						<br />
						:hover - Отображать только  при наведении на блок с контентом
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						:always{" \n\n"}
					</Text>
					{" "}
				</Box>
				<Box
					display="flex"
					border-width="1px"
					border-style="solid"
					border-color="#eaeaea"
					quarkly-title="Row 8"
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
						Автоматическая смена положения Tooltip
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
						Изменять положение Tolltip при нехватке места.{" "}
					</Text>
					<Text width="100%" font="18px sans-serif" padding="15px 15px 15px 15px" margin="0 0 0 0">
						on
					</Text>
					{" "}
				</Box>
			</Box>
			<Box margin="50px 0px 30px 0px" quarkly-title="Example 1 ">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пример с разными положениями:
				</Text>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp=":always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
				/>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp=":always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="left"
				/>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp=":always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="right"
				/>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp=":always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="bottom"
				/>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
			</Box>
			<Box margin="50px 0px 30px 0px" quarkly-title="Example 2">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пример с другим цветом и размером
				</Text>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp=":always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="left"
					tooltipColorProp="#21b1f7"
					arrowSizeProp="28"
					tooltipOffsetProp="10"
				>
					<Override slot="Tooltip text">
						<Strong>
							Hello World!
						</Strong>
					</Override>
				</Components.Tooltip>
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