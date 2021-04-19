import React, { useEffect, useMemo } from 'react';
import { Box } from '@quarkly/widgets';
const FaceBook = {
	create: ({
		language,
		appId
	}) => {
		((d, s, id) => {
			const fjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
			if (d.getElementById(id)) return;
			const js = d.createElement(s);
			js.id = id;
			js.src = `//connect.facebook.net/${language}/sdk.js#xfbml=1&version=v2.12&appId=${appId}`;
			console.log(js);
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	},
	remove: () => {
		let elm = document.getElementById('facebook-jssdk');
		if (elm) elm.outerHTML = '';
		elm = document.getElementById('fb-root');
		if (elm) elm.outerHTML = '';
		window.FB = undefined;
	},
	parse: () => {
		if (window.FB && typeof window.FB !== 'undefined') {
			window.FB.XFBML.parse();
		}

		;
	}
};

const FacebookComments = ({
	appID,
	commentsNumberProp,
	languageProp,
	...props
}) => {
	const commentsNumber = useMemo(() => commentsNumberProp <= 0 ? 1 : commentsNumberProp, [commentsNumberProp]);
	useEffect(() => {
		FaceBook.create({
			languageProp,
			appID
		});
		FaceBook.parse();
	}, [languageProp, appID]);
	return <Box {...props}>
		      
		<Box className="fb-comments" data-href="https://www.facebook.com/cna.net.au/" data-numposts={commentsNumber}>
			      
		</Box>
		    
	</Box>;
};

const propInfo = {
	appID: {
		title: 'App ID',
		description: {
			en: 'ID приложения FaceBook'
		},
		control: 'input',
		category: 'Main',
		weight: .5
	},
	commentsNumberProp: {
		title: 'Comments number',
		description: {
			en: 'Количество комменитариев'
		},
		control: 'input',
		category: 'Main',
		weight: .5
	},
	languageProp: {
		title: 'Язык',
		description: {
			en: 'Язык формы'
		},
		control: 'select',
		variants: [{
			title: {
				en: 'English',
				ru: 'English'
			},
			value: 'en_US'
		}, {
			title: {
				en: 'Русский',
				ru: 'Русский'
			},
			value: 'ru_RU'
		}],
		category: 'Main',
		weight: .5
	}
};
const defaultProps = {
	appID: 767471200701076,
	commentsNumberProp: 10,
	languageProp: 'en_US'
};
Object.assign(FacebookComments, {
	propInfo,
	defaultProps
});
export default FacebookComments;