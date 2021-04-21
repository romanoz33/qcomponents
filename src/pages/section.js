import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"section"} />
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
					Section
				</Text>
			</Box>
			<Section border-width=".5px" border-style="solid" border-color="rgba(0, 0, 0, 0.18)">
				<Text font="--headline3">
					Section
				</Text>
				<Text font="18px/1.7 sans-serif">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.{"\n\n"}
				</Text>
			</Section>
			<Section border-width=".5px" border-style="solid" border-color="rgba(0, 0, 0, 0.18)" lg-margin="10px 0 0 0">
				<Text font="--headline3">
					Section
				</Text>
				<Text font="18px/1.7 sans-serif">
					In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
					<br />
					{"\n\n"}
				</Text>
			</Section>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table width="100%" showHeader colsProp="3" rowsProp="4">
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
						inner-width{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						inner-min-width{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						inner-max-width{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						lazy load{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						Отложенная загрузка контейнера{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Максимальная ширина контейнера{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						default{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Минимальная ширина контейнера{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						default{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Ширина контейнера{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						default{"\n\n"}
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