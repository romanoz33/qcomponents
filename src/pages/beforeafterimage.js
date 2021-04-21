import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"beforeafterimage"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 50px 30px" quarkly-title="Wrapper">
			<Icon category="md" icon={MdKeyboardArrowLeft} />
			<Box margin="50px 0px 100px 0px" quarkly-title="Header">
				<Text text-align="center" font="--headline1">
					Before After Image
				</Text>
			</Box>
			<Components.BeforeAfterImage aspectRatio="16:9" activationType="onDrag">
				<Override slot="Slider" border-width="2px" />
				<Override slot="Image" text-align="center" margin="0px auto 0px auto" />
			</Components.BeforeAfterImage>
			<Box margin="50px 0px 0px 0px" quarkly-title="Architecture" />
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table showHeader colsProp="3" rowsProp="2" width="100%">
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
						Aspect ratio{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Соотношение сторон [none, square, 4:3, 3:4, 16:9, 9:16]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						16:9{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Activation type{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Способ активации [onDrag, onMove]{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						onDrag{"\n\n"}
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