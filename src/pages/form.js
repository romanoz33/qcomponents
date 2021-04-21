import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"form"} />
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
					Form{"\n\n"}
				</Text>
			</Box>
			<Components.Form>
				<Components.FormLabel width="5%" display="inline-block" />
				<Components.FormSelect width="95%" variants=", , " display="inline-block" />
				<Components.FormTextarea width="100%" autocomplete={false} spellcheck="true" />
			</Components.Form>
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
							Form
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
								Form Label
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
								Form Input
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
								Form Select
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
								Form Textarea
							</Text>
							<Icon category="md" icon={MdKeyboardArrowRight} size="40px" color="#747272" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы FormLabel:
				</Text>
				<Components.Table showHeader width="100%" colsProp="3" rowsProp="2">
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						For{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Text{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Идентификатор элемента, с которым следует установить связь.{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Текст лейбла{" \n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						label:
					</Override>
				</Components.Table>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы FormInput:
				</Text>
				<Components.Table showHeader width="100%" colsProp="3" rowsProp="1">
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Name{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Text{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Идентификатор поля{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Текст лейбла{" \n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						label:
					</Override>
				</Components.Table>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы FormSelect:
				</Text>
				<Components.Table showHeader width="100%" colsProp="3" rowsProp="1">
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Variants{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Text{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Варианты списка{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Текст лейбла{" \n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						label:
					</Override>
				</Components.Table>
			</Box>
			<Box quarkly-title="Props" height="auto" min-height="20px">
				<Text font="600 24px sans-serif" quarkly-title="Title">
					Пропсы FormTextarea:
				</Text>
				<Components.Table showHeader width="100%" colsProp="3" rowsProp="13">
					<Override slot="Text THead Col-0">
						Название{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-0">
						Max lenght{"\n\n\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-0">
						Min lenght{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-1">
						Максимальная длина текста{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-1">
						Минимальная длина текста{"\n\n"}
					</Override>
					<Override slot="Text THead Col-1">
						Описание{"\n\n"}
					</Override>
					<Override slot="Text THead Col-2">
						Значение по дефолту{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-0 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-1 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-0">
						Default value{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-0">
						Autocomplete{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-0">
						Autofocus{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-0">
						Disabled{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-0">
						Name{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-0">
						Placeholder{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-0">
						Read only{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-0">
						Requared{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-0">
						Spellcheck{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-11 Col-0">
						Cols{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-12 Col-0">
						Rows{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-1">
						Дефолтный текст{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-4 Col-1">
						Автоматическое получение фокуса{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-1">
						-
					</Override>
					<Override slot="Text TBody Row-5 Col-1">
						Деактивировать{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-1">
						Идентификатор поля{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-7 Col-1">
						Указывает замещающийся текст{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-8 Col-1">
						Устанавливает, что поле не может изменяться пользователем{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-9 Col-1">
						Является обязательным для заполнения{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-1">
						Проверка правописания{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-11 Col-1">
						Ширина поля в символах{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-12 Col-1">
						Высота поля в строках текста{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-2 Col-2">
						none{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-3 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-4 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-5 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-6 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-7 Col-2">
						none
					</Override>
					<Override slot="Text TBody Row-8 Col-2">
						false
					</Override>
					<Override slot="Text TBody Row-9 Col-2">
						false{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-10 Col-2">
						default{"\n\n"}
					</Override>
					<Override slot="Text TBody Row-11 Col-2">
						20
					</Override>
					<Override slot="Text TBody Row-12 Col-2">
						none
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