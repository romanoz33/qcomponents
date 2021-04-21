import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"mobilesidepanel"} />
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
					Mobile Side Panel
				</Text>
			</Box>
			<Components.MobileSidePanel menuPosition="near" md-margin="500px 0px 50 0px">
				<Text lg-font="18px/1.7 sans-serif" font="18px/1.7 sans-serif">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Lorem Ipsum
					</Strong>
					{" "}is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					<br />
					{"\n\n"}
				</Text>
			</Components.MobileSidePanel>
			<Components.MobileSidePanel />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table lg-width="100%">
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
						Show/Hide duration{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Show/Hide duration Easing Function{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Mobile version breackpoint{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Mobile panel position{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Продолжительность анимации показа и скрытия{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Скорость течения анимации{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Брейкпоинт с которого изменять на мобильный вид{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Позиция панели в мобильной версии [full, left, right, near]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						0.3s{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						ease{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						md{" \n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						near{"\n\n"}
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