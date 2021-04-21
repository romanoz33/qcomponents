import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"popup"} />
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
					Popup
				</Text>
			</Box>
			<Components.Popup text-align="center" margin="500px 0px 500 0px">
				<Override slot="button" />
				<Override slot="Wrapper" width="70%" height="600px" />
				<Box display="flex" padding="50px 50px 50px 50px">
					<Image width="600px" src="https://images.unsplash.com/photo-1587554801471-37976a256db0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" height="469px" />
					<Box width="100%">
						<Text font="--headline2">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="inline-block"
								text-align="center"
							>
								Title
							</Strong>
						</Text>
						<Text font="normal 300 18px/1.7 --fontFamily-sansHelvetica" text-align="left" color="#5d5959">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="inline-block"
								text-align="left"
								margin="28px 0px 0px 36px"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Strong>
						</Text>
					</Box>
				</Box>
			</Components.Popup>
			<Box margin="50px 0px 0px 0px">
				<Text font="600 24px sans-serif">
					Пропсы:
				</Text>
			</Box>
			<Components.Table width="100%" showHeader rowsProp="2" colsProp="3">
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
					Animation Duration (in seconds)
				</Override>
				<Override slot="Text TBody Row-1 Col-0">
					Animation function
				</Override>
				<Override slot="Text TBody Row-0 Col-1">
					Продолжительность анимации
				</Override>
				<Override slot="Text TBody Row-1 Col-1">
					Скорость течения анимации
				</Override>
				<Override slot="Text TBody Row-1 Col-2">
					linear
				</Override>
				<Override slot="Text TBody Row-0 Col-2">
					0.15s
				</Override>
			</Components.Table>
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