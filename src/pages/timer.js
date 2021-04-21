import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"timer"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Box margin="50px 0px 70px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Timer
				</Text>
			</Box>
			<Components.Timer
				showDays
				showHours
				showTextDone="complete"
				showMinutes
				showSeconds
				max-width="880px"
				justify-content="center"
				margin="0px auto 0px auto"
			>
				<Override
					slot="Item"
					background="--color-lightD1"
					margin="0px 24px 0px 5px"
					padding="28px 32px 36px 32px"
					border-radius="32px"
				/>
				<Override slot="Value" font="--headline2" color="--dark" />
				<Override slot="Title" font="--headline3" color="--greyD2" />
			</Components.Timer>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="7">
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
						To Date{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Дата окончания таймера (в формате дд-мм-гггг){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						-{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						To Time{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Время окончания таймера (в формате чч:мм){"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						-{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Show Days{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Показать Дни{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						true{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Show Hours{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Показать Дни{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						true{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Show Minutes{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Показать Часы{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Show Seconds{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						When Show Text{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Когда показать текст об окончании таймера
						<br />
						- Always - всегда
						<br />
						- Complete - когда время закончится
						<br />
						- Never - Никогда{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Показать Секунды{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						complete{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						true{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						true{" \n\n"}
					</Override>
				</Components.Table>
				<Box quarkly-title="Space" />
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