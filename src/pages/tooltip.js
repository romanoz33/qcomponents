import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Hr, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"tooltip"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 0px 30px">
			<Box margin="50px 0px 100px 0px">
				<Text text-align="center" font="--headline1">
					Tooltip
				</Text>
			</Box>
			<Components.Tooltip arrowStatusProp tooltipStatusProp="hover" arrowOffsetProp="12px">
				<Override slot="Title">
					Hello
				</Override>
				<Override slot="Content" text-align="center" />
				<Button>
					Button
				</Button>
			</Components.Tooltip>
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Пропсы:
				</Text>
			</Box>
			<Components.Table width="100%" showHeader colsProp="3" rowsProp="8">
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
					Размер стрелочки{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-1">
					Размер стрелочки{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-0 Col-2">
					8px{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-0">
					Отступ стрелочки{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-0">
					ArroowStatusProp{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-0">
					Положение Tooltip{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-0">
					Цвет Tooltip{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-5 Col-0">
					Отступ от краев{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-6 Col-0">
					Показать Tooltip{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-7 Col-0">
					Автоматическая смена положения Tooltip{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-1">
					Отступ стрелочки от блока с контентом{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-1">
					Показать / Скрыть стрелочку{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-3 Col-1">
					Положение стрелочки относительно блока с контентом. [top, bottom, left, right]{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-1">
					Цвет Tooltip, включая цвет стрелочки{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-5 Col-1">
					Минимальное расстояние между Tooltip до любого края окна{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-6 Col-1">
					:always - Отображать всегда.
					<br />
					:hover - Отображать только  при наведении на блок с контентом{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-7 Col-1">
					Изменять положение Tolltip при нехватке места.{" \n\n"}
				</Override>
				<Override slot="Text TBody Row-1 Col-2">
					4px{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-2 Col-2">
					true
				</Override>
				<Override slot="Text TBody Row-3 Col-2">
					top{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-4 Col-2">
					--color-dark{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-5 Col-2">
					0{"\n\n"}
				</Override>
				<Override slot="Text TBody Row-6 Col-2">
					:always{" \n\n"}
				</Override>
				<Override slot="Text TBody Row-7 Col-2">
					true
				</Override>
			</Components.Table>
			<Box margin="50px 0px 30px 0px">
				<Text font="600 24px sans-serif">
					Пример с разными положениями:
				</Text>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp="always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipAutoChangeProp={false}
					tooltipPositionProp="top"
				/>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp="always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="left"
					tooltipAutoChangeProp={false}
					tooltipPositionProp="left"
				/>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp="always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="right"
					tooltipAutoChangeProp={false}
					tooltipPositionProp="right"
				/>
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp="always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="bottom"
					tooltipAutoChangeProp={false}
					tooltipPositionProp="bottom"
				/>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
			</Box>
			<Box margin="50px 0px 30px 0px">
				<Text font="600 24px sans-serif">
					Пример с другим цветом и размером
				</Text>
				<Hr border-color="#c4c4c4" margin="16px 0px 40px 0px" />
				<Components.Tooltip
					arrowStatusProp
					tooltipStatusProp="always"
					width="600px"
					text-align="left"
					margin="0px auto 0px auto"
					tooltipDirectionProp="left"
					tooltipColorProp="#21b1f7"
					arrowSizeProp="28"
					tooltipOffsetProp="10"
					arrowOffsetProp="8"
					tooltipPositionProp="left"
				>
					<Override slot="Tooltip text">
						<Strong>
							Hello World!
						</Strong>
					</Override>
				</Components.Tooltip>
			</Box>
			<Box height="100px" />
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