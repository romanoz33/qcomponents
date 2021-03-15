import React from 'react';
import atomize from "@quarkly/atomize";
import { Box } from '@quarkly/widgets';
import ProgressLabel from 'react-progress-label';

const ProgressTrack = ({
	startDegree,
	trackSize,
	startSize,
	spaceSize,
	fillColor,
	progress,
	progressColor,
	trackColor,
	numb
}) => {
	const size = startSize - 50 + (trackSize * 2 + spaceSize * 2) * numb;
	return <Box
		top={`calc(50% - ${size / 2}px)`}
		left={`calc(50% - ${size / 2}px)`}
		width={`${size}px`}
		height={`${size}px`}
		position="absolute"
	>
		      
		<ProgressLabel
			progress={progress}
			startDegree={startDegree}
			progressWidth={trackSize}
			trackWidth={trackSize - 2}
			trackBorderWidth={1}
			trackBorderColor={trackColor}
			cornersWidth={trackSize / 2}
			size={size}
			fillColor={fillColor}
			trackColor={trackColor}
			progressColor={progressColor}
		/>
		    
	</Box>;
};

const Progress = ({
	startDegree,
	trackSize,
	startSize,
	spaceSize,
	fillColor,
	progress,
	progressColor,
	trackColor,
	...props
}) => {
	const arrProgress = progress.length > 0 ? progress.split(',').reverse() : [],
	      arrProgressColor = progressColor.length > 0 ? progressColor.split(',').reverse() : [],
	      arrTrackColor = trackColor.length > 0 ? trackColor.split(',').reverse() : [];
	const size = startSize - 50 + (trackSize * 2 + spaceSize * 2) * arrProgress.length;
	return <Box
		{...props}
		padding="32px"
		width={`${size}px`}
		height={`${size}px`}
		background={fillColor}
		position="relative"
	>
		      
		{arrProgress.map((item, i) => <ProgressTrack
			startDegree={startDegree}
			trackSize={trackSize}
			startSize={startSize}
			spaceSize={spaceSize}
			fillColor={fillColor}
			progress={arrProgress[i]}
			progressColor={arrProgressColor[i]}
			trackColor={arrTrackColor[i]}
			numb={arrProgress.length - i}
		/>)}
		    
	</Box>;
};

export default atomize(Progress)({
	name: "Progress",
	normalize: true,
	mixins: true,
	description: {
		en: "Progress — my awesome component",
		ru: "Progress — мой восхитительный компонент :)"
	},
	propInfo: {
		startDegree: {
			title: 'Угол начала отсчета:',
			control: 'text',
			type: 'number',
			category: 'Global',
			weight: 1
		},
		trackSize: {
			title: 'Ширина трека:',
			control: 'text',
			type: 'number',
			category: 'Global',
			weight: 1
		},
		startSize: {
			title: 'Начальный размер треков:',
			control: 'text',
			type: 'number',
			category: 'Global',
			weight: 1
		},
		spaceSize: {
			title: 'Отступы между треками:',
			control: 'text',
			type: 'number',
			category: 'Global',
			weight: 1
		},
		fillColor: {
			title: 'Цвет заливки отступов:',
			control: 'color',
			type: 'string',
			category: 'Global',
			weight: 1
		},
		progress: {
			title: 'Прогресс в процентах:',
			control: 'text',
			type: 'number',
			multiply: true,
			category: 'Tracks',
			weight: 1
		},
		progressColor: {
			title: 'Цвет выполненного прогресса:',
			control: 'color',
			type: 'string',
			multiply: true,
			category: 'Tracks',
			weight: 1
		},
		trackColor: {
			title: 'Цвет трека прогресса:',
			control: 'color',
			type: 'string',
			multiply: true,
			category: 'Tracks',
			weight: 1
		}
	}
}, {
	startDegree: '0',
	trackSize: '20',
	startSize: '100',
	spaceSize: '5',
	fillColor: '#000000',
	progress: '80,50,40',
	progressColor: '#03a9f4,#8bc34a,#f44336',
	trackColor: '#012C4E,#1A350F,#5C0E0E'
});