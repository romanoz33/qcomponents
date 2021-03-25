import React, { useState, useRef, useEffect } from 'react';
import atomize from '@quarkly/atomize';
const Audio = atomize.audio();
const Content = atomize.div();
const DropArea = atomize.div();
const Empty = atomize.div();

const AudioComponent = ({
	src,
	autoPlay,
	controls,
	muted,
	loop,
	children,
	...props
}) => {
	const contentRef = useRef(null);
	const [isEmpty, setEmpty] = useState(false);
	useEffect(() => {
		setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
	}, [children]);
	const Wrapper = !isEmpty || src ? Audio : Empty;
	return <Wrapper
		width='100%'
		height='auto'
		min-height="48px"
		src={src}
		autoPlay={autoPlay}
		controls={controls}
		muted={muted}
		loop={loop}
		{...props}
	>
		<Content ref={contentRef}>
			{React.Children.map(children, child => React.isValidElement(child) && React.cloneElement(child, {
				container: 'audio'
			}))}
		</Content>
		{isEmpty && !src && <DropArea
			padding="16px"
			font="--font-base"
			font-style="italic"
			color="--color-grey"
			background-color="--color-light"
			border="1px dashed --color-lightD2"
		>
			Drag "Source" components here
		</DropArea>}
	</Wrapper>;
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
export default atomize(AudioComponent)({
	name: 'Audio',
	description: {
		en: 'Container for embedding audio content',
		ru: 'Контейнер для встраивания аудио контента'
	},
	propInfo
}, defaultProps);