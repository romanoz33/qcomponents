import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"accordion"} />
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
					Accordion{"\n\n"}
				</Text>
			</Box>
			<Components.Accordion allowMultiple allowToggle>
				<Components.AccordionItem isOpen={false} disabled={false} border-width="0px">
					<Components.AccordionItemSummary box-shadow="none" margin="0px 0px 0px 0px" font="--lead">
						<Override slot="Accordion Summary" margin="0px 0px 5px 0px" background="white" box-shadow="inset 2px 2px 5px rgba(154, 147, 140, 0.5)" />
						<Override slot="Accordion Summary :open" border-width="0px" border-style="none" />
						<Override
							slot="Accordion Summary Icon"
							size="34px"
							width="32px"
							height="32px"
							color="--darkL2"
						/>
						<Text font="--headline3" margin="0 0px 0 0px" color="--darkL2">
							First
						</Text>
					</Components.AccordionItemSummary>
					<Components.AccordionItemDetails>
						<Text font="--lead" margin="0px 0px 32px 0px" color="--darkL2">
							<Strong>
								Lorem Ipsum
							</Strong>
							{" "}is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{"\n\n"}
						</Text>
					</Components.AccordionItemDetails>
				</Components.AccordionItem>
				<Components.AccordionItem isOpen={false} disabled={false} border-width="0px">
					<Components.AccordionItemSummary box-shadow="none" margin="0px 0px 0px 0px" font="--lead">
						<Override slot="Accordion Summary" margin="0px 0px 5px 0px" background="white" box-shadow="inset 2px 2px 5px rgba(154, 147, 140, 0.5)" />
						<Override slot="Accordion Summary :open" border-width="0px" border-style="none" />
						<Override
							slot="Accordion Summary Icon"
							size="34px"
							width="32px"
							height="32px"
							color="--darkL2"
						/>
						<Text font="--headline3" margin="0 0px 0 0px" color="--darkL2">
							Second
						</Text>
					</Components.AccordionItemSummary>
					<Components.AccordionItemDetails>
						<Text font="--lead" margin="0px 0px 32px 0px" color="--darkL2">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							/>
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).{"\n\n"}
						</Text>
					</Components.AccordionItemDetails>
				</Components.AccordionItem>
				<Components.AccordionItem isOpen={false} disabled={false} border-width="0px">
					<Components.AccordionItemSummary box-shadow="none" margin="0px 0px 0px 0px" font="--lead">
						<Override slot="Accordion Summary" margin="0px 0px 5px 0px" background="white" box-shadow="inset 2px 2px 5px rgba(154, 147, 140, 0.5)" />
						<Override slot="Accordion Summary :open" border-width="0px" border-style="none" />
						<Override
							slot="Accordion Summary Icon"
							size="34px"
							width="32px"
							height="32px"
							color="--darkL2"
						/>
						<Text font="--headline3" margin="0 0px 0 0px" color="--darkL2">
							Third
						</Text>
					</Components.AccordionItemSummary>
					<Components.AccordionItemDetails>
						<Text font="--lead" margin="0px 0px 32px 0px" color="--darkL2">
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</Text>
					</Components.AccordionItemDetails>
				</Components.AccordionItem>
			</Components.Accordion>
			<Box margin="50px 0px 0px 0px" quarkly-title="Architecture">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Архитектура:
				</Text>
				<Box
					margin="0px 0px 50px 0px"
					display="flex"
					quarkly-title="Content"
					align-items="center"
					justify-content="center"
					text-align="center"
					border-width="2px"
					border-style="solid"
					border-color="#d3d3d3"
				>
					<Box display="flex" align-items="center" quarkly-title="Item" width="100%">
						<Text
							width="100%"
							font="18px sans-serif"
							margin="0 0 0 0"
							padding="15px 0px 15px 0px"
							height="auto"
							min-height="20px"
						>
							Accordion{"\n\n"}
						</Text>
						<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
					</Box>
					<Box display="flex" align-items="center" quarkly-title="Item" width="100%">
						<Text
							width="100%"
							font="18px sans-serif"
							margin="0 0 0 0"
							padding="15px 0px 15px 0px"
							height="auto"
							min-height="20px"
						>
							Accordion Item{"\n\n"}
						</Text>
						<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
					</Box>
					<Box width="100%" font="20px --fontFamily-sans" quarkly-title="Item">
						<Box display="flex" align-items="center" min-height="52px">
							<Text
								width="100%"
								font="18px sans-serif"
								margin="0 0 0 0"
								padding="15px 0px 15px 0px"
								height="auto"
								min-height="20px"
							>
								Accordion Summary
							</Text>
							<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
						</Box>
						<Box display="flex" align-items="center" min-height="52px">
							<Text
								width="100%"
								font="18px sans-serif"
								margin="0 0 0 0"
								padding="15px 0px 15px 0px"
								height="auto"
								min-height="20px"
							>
								Accordion Details
							</Text>
							<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
						</Box>
					</Box>
					<Box width="100%" font="20px --fontFamily-sans" quarkly-title="Item">
						<Box display="flex" align-items="center" min-height="52px" />
						<Box display="flex" align-items="center" min-height="52px">
							<Text
								width="100%"
								font="18px sans-serif"
								margin="0 0 0 0"
								padding="15px 0px 15px 0px"
								height="auto"
								min-height="20px"
							>
								Скрывающийся контент{"\n\n"}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы:
				</Text>
				<Components.Table showHeader colsProp="3" width="100%" rowsProp="2">
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
						Arrow multiple{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Arrow toogle{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Arrow toogle{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Отображать несколько раскрытых вкладок одновременно{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Возможность сворачивания всех вкладок{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						true
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						true
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