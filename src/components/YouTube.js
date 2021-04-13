import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { useOverrides } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';
import ComponentNotice from './ComponentNotice';
import { FaPlay } from "react-icons/fa";
const overrides = {
	'YouTube Content': {
		kind: 'Box',
		props: {
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			position: 'absolute'
		}
	},
	'YouTube Button': {
		kind: 'Box',
		props: {
			top: 'calc(50% - 45px)',
			left: 'calc(50% - 45px)',
			width: '90px',
			height: '90px',
			'background-color': '--color-primary',
			'border-radius': '100%',
			'align-items': 'center',
			'justify-content': 'center',
			position: 'absolute'
		}
	},
	'YouTube Button Icon': {
		kind: 'Icon',
		props: {
			size: '28px',
			category: 'fa',
			icon: FaPlay,
			color: '#FFFFFF',
			margin: '0px -6px 0px 0px'
		}
	}
};

const YouTubeComponent = ({
	videoId,
	...props
}) => {
	const [isReady, setReady] = useState(false);
	const [isPlay, setPlay] = useState(false);
	const playerRef = useRef(null);
	const {
		override,
		rest
	} = useOverrides(props, overrides);

	const playVideo = () => {
		setPlay(true);
		playerRef.current.internalPlayer.playVideo();
	};

	const onReady = ({
		target
	}) => {
		const checkIframe = value => value instanceof HTMLElement && value.tagName === 'IFRAME';

		const iframe = Object.values(target).find(value => checkIframe(value));
		if (!iframe) return;
		iframe.style.position = 'absolute';
		setReady(true);
	};

	return <Box
		padding-top={videoId ? '56.25%' : '0'}
		min-height={videoId && '0'}
		height={videoId && '0'}
		transition="opacity 0s initial .5s"
		opacity={isReady ? '1' : '0'}
		{...rest}
	>
		            
		<Box {...override('YouTube Content')} display={!videoId && 'none'}>
			                
			<YouTube ref={playerRef} videoId={videoId} opts={{
				width: '100%',
				height: '100%',
				playerVars: {
					autoplay: 0
				}
			}} onReady={onReady} />
			            
		</Box>
		            
		<Box {...override('YouTube Button')} display={isPlay || !videoId ? 'none' : 'flex'} onClick={playVideo}>
			                
			<Icon {...override('YouTube Button Icon')} />
			            
		</Box>
		            
		{!videoId && <ComponentNotice message="Добавьте ID видео на панели Props" />}
		        
	</Box>;
};

const propInfo = {
	videoId: {
		control: 'input',
		weight: 1
	}
};
const defaultProps = {
	position: 'relative'
};
Object.assign(YouTubeComponent, {
	title: 'YouTube Player',
	propInfo,
	defaultProps,
	overrides
});
export default YouTubeComponent;