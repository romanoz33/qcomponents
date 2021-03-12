import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 30px 0px 30px" quarkly-title="Components">
			<Box height="100px" quarkly-title="Space" />
			<Box height="100px" quarkly-title="Title">
				<Text text-align="center" font="--headline1">
					Components
				</Text>
			</Box>
			<Box display="flex" margin="40px 0px 0px 0px" quarkly-title="Content" flex-wrap="wrap">
				<Link
					href="/audio"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Audio"
				>
					Audio
				</Link>
				<Link
					href="/video"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Video"
				>
					Video
				</Link>
				<Link
					href="/mobilemenu"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Mobile menu"
				>
					Mobile menu
				</Link>
				<Link
					href="/burgermenu"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Burger menu"
				>
					Burger menu
				</Link>
				<Link
					href="/popup"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Popup"
				>
					Popup
				</Link>
				<Link
					href="/tooltip"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Tooltip"
				>
					Tooltip
				</Link>
				<Link
					href="/collapse"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Collapse"
				>
					Collapse
				</Link>
				<Link
					href="/table"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Title"
				>
					Table{"\n\n"}
				</Link>
				<Link
					href="/accordion"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Accordion"
				>
					Accordion{"\n\n"}
				</Link>
				<Link
					href="/code"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Code"
				>
					Code
				</Link>
				<Link
					href="/backtotop"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Back to top"
				>
					Back to top
				</Link>
				<Link
					href="/vkpage"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="VK Page "
				>
					VK Page{" "}
				</Link>
				<Link
					href="/vkcomments"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="VK Comments"
				>
					VK Comments
				</Link>
				<Link
					href="/fbcomments"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="FB Comments"
				>
					FB Comments
				</Link>
				<Link
					href="/fblike"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="FB COmments"
				>
					FB Like
				</Link>
				<Link
					href="/vimeo"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Vimeo"
				>
					Vimeo
				</Link>
				<Link
					href="/youtube"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="YouTube"
				>
					YouTube
				</Link>
				<Link
					href="/card"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Card"
				>
					Card
				</Link>
				<Link
					href="/yandexmap"
					height="auto"
					box-shadow="0px 3px 2px 3px rgba(3, 3, 3, 0.07)"
					text-decoration-line="initial"
					color="#4d4d4d"
					margin="10px 10px 10px 10px"
					padding="10px 10px 10px 10px"
					hover-background="#99fff6"
					transition="all 0.2s ease-in 0s"
					target="_blank"
					quarkly-title="Yandex Map"
				>
					Yandex Map
				</Link>
			</Box>
			<Box height="100px" quarkly-title="Space" />
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