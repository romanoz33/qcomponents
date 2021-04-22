import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { StackItem, Stack, Section, Override } from "@quarkly/components";
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
				<Section
					padding="60px 0"
					sm-padding="40px 0"
					background="--color-light"
					display="flex"
					flex-direction="column"
				>
					<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
						<StackItem flex-grow="1" md-width="100%">
							<Text
								as="h1"
								margin="0px"
								font="--headline1"
								md-font="--headline2"
								color="--dark"
							>
								Heading
							</Text>
						</StackItem>
						<StackItem md-width="100%">
							<Text margin="0px" max-width="260px">
								Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
							</Text>
						</StackItem>
						<StackItem md-width="100%">
							<Text margin="0px" font="--headline1" md-font="--headline2" color="--dark">
								17
							</Text>
						</StackItem>
					</Stack>
				</Section>
				<Box />
				<Section
					padding="60px 0"
					sm-padding="40px 0"
					background="--color-light"
					display="flex"
					flex-direction="column"
				>
					<Stack color="--grey" font="--base">
						<StackItem width="25%" md-width="50%" sm-width="100%">
							<Text margin="0px" font="--headline1" md-font="--headline2" color="--dark">
								17
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%" sm-width="100%">
							<Text margin="0px">
								Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%" sm-width="100%">
							<Text margin="0px">
								Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
							</Text>
						</StackItem>
						<StackItem width="25%" md-width="50%" sm-width="100%">
							<Text margin="0px">
								Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
							</Text>
						</StackItem>
					</Stack>
				</Section>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Props{" "}
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