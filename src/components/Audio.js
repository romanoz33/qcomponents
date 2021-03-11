import React from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';

const Audio = ({
	src,
	autoPlay,
	controls,
	muted,
	loop,
	children,
	...props
}) => {
	return <Box {...props}>
		<audio
			width='100%'
			height='auto'
			src={src}
			autoPlay={autoPlay}
			controls={controls}
			muted={muted}
			loop={loop}
		>
			{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
				container: 'audio'
			}) : child)}
		</audio>
	</Box>;
};

const propInfo = {
	src: {
		title: 'Src',
		description: {
			en: 'Audio file address',
			ru: 'Адрес аудио файла'
		},
		control: 'input',
		type: 'string',
		category: 'Main',
		weight: 1
	},
	autoPlay: {
		title: 'Autoplay',
		description: {
			en: 'Audio autoplay when it’s available',
			ru: 'Автоматическое воспроизведение аудио, как только это будет возможно'
		},
		control: 'checkbox',
		type: 'boolean',
		category: 'Main',
		weight: .5
	},
	controls: {
		title: 'Show controls',
		description: {
			en: 'Display audio playback controls',
			ru: 'Отображение элементов управления воспроизведения аудио'
		},
		control: 'checkbox',
		type: 'boolean',
		category: 'Main',
		weight: .5
	},
	muted: {
		title: 'Mute',
		description: {
			en: 'Turn off playback track',
			ru: 'Отключение воспроизведения аудиодорожки'
		},
		control: 'checkbox',
		type: 'boolean',
		category: 'Main',
		weight: .5
	},
	loop: {
		title: 'Loop',
		description: {
			en: 'Play audio from the beginning to the end',
			ru: 'Воспроизведение аудио с начала по окончании проигрывания'
		},
		control: 'checkbox',
		type: 'boolean',
		category: 'Main',
		weight: .5
	}
};
const defaultProps = {
	src: 'https://uploads.quarkly.io/molecules/default-audio.mp3',
	controls: true
};
export default atomize(Audio)({
	name: 'Audio',
	description: {
		en: 'Container for embedding audio content',
		ru: 'Контейнер для встраивания аудио контента'
	},
	propInfo
}, defaultProps);