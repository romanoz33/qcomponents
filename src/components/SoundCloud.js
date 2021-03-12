import React, { useState } from "react";
import atomize from "@quarkly/atomize";
import { useOverrides } from '@quarkly/components';
import { Box, Image } from "@quarkly/widgets";

const DefaultHTML = ({
	errorText
}) => {
	return <Box
		display="flex"
		justify-content='center'
		align-items='center'
		flex-wrap="wrap"
		width="100%"
		min-height="100%"
		border=".5px solid #ccc"
		margin="0"
	>
		      
		<Image src="https://w.soundcloud.com/icon/assets/images/orange_transparent_64-94fc761.png" />
		      
		<Box width="100%" text-align="center">
			        
			{errorText}
			      
		</Box>
		    
	</Box>;
};

const IframeBlock = atomize.iframe();

const Iframe = ({
	trackId,
	typeUrl
}) => {
	return <IframeBlock width="100%" height="100%" src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}${typeUrl}`}>
		    
	</IframeBlock>;
};

const Wrapper = atomize.div();

const SoundCloud = ({
	type,
	url,
	...props
}) => {
	const [trackId, setTrackId] = useState('');
	const [typeUrl, setTypeUrl] = useState('');
	const [errorText, setErrorText] = useState('');

	if (typeof url !== 'undefined') {
		fetch('https://soundcloud.com/oembed?format=json&url=' + encodeURI(url) + '&iframe=true').then(response => {
			return response.json();
		}).then(data => {
			const trackIdTemp = data.html.match(/\d{7,}/g)[0];
			setTypeUrl(type === 'visual' ? '&visual=true' : '');
			setTrackId(trackIdTemp);
			setErrorText('');
		}).catch(() => {
			setErrorText('Неверная ссылка');
		});
	}

	return <Wrapper display="flex" justify-content='center' align-items='center' {...props}>
		      
		{trackId != '' && errorText == '' ? <Iframe trackId={trackId} typeUrl={typeUrl} /> : <DefaultHTML errorText={errorText} />}
		   
    
	</Wrapper>;
};

export default atomize(SoundCloud)({
	name: "SoundCloud",
	normalize: true,
	mixins: true,
	propInfo: {
		type: {
			description: {
				en: 'SoundCloud'
			},
			control: 'radio-group',
			variants: ['standart', 'visual'],
			weight: 1
		},
		url: {
			description: {
				en: 'Track url'
			},
			control: 'input',
			weight: 1
		}
	}
}, {
	type: 'standart'
});