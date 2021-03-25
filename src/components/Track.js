import React from 'react';
import atomize from '@quarkly/atomize';
const Track = atomize.track();
const Message = atomize.div();
const Empty = atomize.div();

const TrackComponent = ({
	container,
	src,
	srclang,
	kind,
	label,
	isDefault,
	children,
	...props
}) => {
	const Wrapper = container ? Track : Empty;
	return <Wrapper
		{...props}
		default={isDefault || undefined}
		src={src}
		srclang={srclang}
		kind={kind}
		label={label}
	>
		{!container && <Message
			padding="16px"
			font="--font-base"
			font-style="italic"
			color="--color-grey"
			background-color="--color-light"
			border="1px dashed --color-lightD2"
		>
			Этот компонент должен быть внутри "Audio" или "Video"
		</Message>}
	</Wrapper>;
};

const propInfo = {
	src: {
		title: 'Src',
		description: {
			en: 'Address of the track (.vtt file)',
			ru: 'Адрес файла текстовой дорожки (.vtt файл)'
		},
		control: 'input',
		type: 'string',
		category: 'Main',
		weight: 1
	},
	isDefault: {
		title: 'Default',
		description: {
			en: 'Use this track as default',
			ru: 'Использовать эту дорожку по умолчанию'
		},
		control: 'checkbox',
		type: 'boolean',
		category: 'Main',
		weight: 1
	},
	srclang: {
		title: 'SrcLang',
		description: {
			en: 'Language of the track text data',
			ru: 'Язык текстовых данных трека'
		},
		control: 'input',
		type: 'string',
		category: 'Main',
		weight: 1
	},
	kind: {
		title: 'Kind',
		description: {
			en: 'How the text track is meant to be used',
			ru: 'Как текстовый трек должен быть использован'
		},
		control: 'select',
		variants: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	label: {
		title: 'Label',
		description: {
			en: 'A user-readable title of the text track',
			ru: 'Видимый пользователю заголовок текстовой дорожки'
		},
		control: 'input',
		type: 'string',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	src: 'https://uploads.quarkly.io/molecules/subtitles_en.vtt',
	srclang: 'en',
	kind: 'subtitles'
};
export default atomize(TrackComponent)({
	name: 'Track',
	description: {
		en: 'Indicates timed text tracks for Video, and Audio components',
		ru: 'Указывает синхронизированные текстовые дорожки для компонентов Video и Audio'
	},
	propInfo
}, defaultProps);