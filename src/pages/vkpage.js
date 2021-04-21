import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vkpage"} />
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
					VK Page
				</Text>
				<Components.VkPage groupId="175635117" />
			</Box>
			<Components.VkPage wide={false} viewMode="News" margin="30px 0px 0px 0px" />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Box quarkly-title="Space">
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
							Color{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-0 Col-1">
							Цвет кнопки{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-0 Col-2">
							#5181B8{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-1 Col-0">
							Element ID{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-1 Col-1">
							-
						</Override>
						<Override slot="Text TBody Row-1 Col-2">
							vk_groups{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-2 Col-0">
							Group ID{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-2 Col-1">
							ID группы{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-2 Col-2">
							-{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-3 Col-0">
							Background color{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-3 Col-1">
							Фон компонента{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-3 Col-2">
							#fff{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-4 Col-0">
							Color{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-4 Col-1">
							Цвет текста{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-4 Col-2">
							#000{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-5 Col-0">
							View{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-5 Col-1">
							Что отображать [members, news, only name]{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-5 Col-2">
							Members{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-6 Col-0">
							Dont use cover{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-6 Col-1">
							Не использовать обложку{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-6 Col-2">
							false
						</Override>
						<Override slot="Text TBody Row-7 Col-2">
							false{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-7 Col-0">
							Extended mode{"\n\n"}
						</Override>
						<Override slot="Text TBody Row-7 Col-1">
							-
						</Override>
					</Components.Table>
				</Box>
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