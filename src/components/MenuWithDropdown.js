/* КОМПОНЕНТ НЕ ДОДЕЛАН */
import React, { useState, useCallback, useEffect } from 'react'; // import { useMatch } from 'react/router';
// import { useRouteMatch } from 'react-router-dom';

import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Link, Icon } from '@quarkly/widgets';
import { MdKeyboardArrowDown } from "react-icons/md";
const overrides = {
	'Item': {
		props: {
			'box-shadow': '0 0 1px 0 red',
			'margin': '0px',
			'padding': '6px 12px',
			'position': 'relative'
		}
	},
	'Item :open': {},
	'Item :closed': {},
	'Item :active': {},
	'Sub': {
		props: {
			'margin': '0px',
			'padding': '1px',
			'list-style': 'none'
		}
	},
	'Sub :collapse': {
		props: {
			'box-shadow': '0 0 1px 0 violet',
			'background-color': 'white',
			'position': 'absolute',
			'z-index': '1'
		}
	},
	'Sub :bottom': {
		props: {
			'top': '100%',
			'left': '0'
		}
	},
	'Sub :left': {
		props: {
			'top': '0',
			'right': '100%'
		}
	},
	'Sub :right': {
		props: {
			'top': '0',
			'left': '100%'
		}
	},
	'Sub :open': {
		props: {
			transition: `
        visibility .15s step-start,
        opacity .15s ease
      `,
			visibility: 'visible',
			opacity: '1'
		}
	},
	'Sub :closed': {
		props: {
			transition: `
        visibility .15s step-end,
        opacity .15s ease
      `,
			visibility: 'hidden',
			opacity: '0'
		}
	},
	'Sub :active': {},
	'Link': {
		kind: 'Link',
		props: {
			'box-shadow': '0 0 1px 0 blue',
			'white-space': 'nowrap',
			'color': '--primary'
		}
	},
	'Link :open': {
		kind: 'Link'
	},
	'Link :closed': {
		kind: 'Link'
	},
	'Link :active': {
		kind: 'Link',
		props: {
			color: '--dark'
		}
	},
	'Overlay': {
		kind: 'Box',
		props: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			position: 'absolute'
		}
	},
	'Icon': {
		kind: 'Icon',
		props: {
			'box-shadow': '0 0 1px 0 green',
			'category': 'md',
			'icon': MdKeyboardArrowDown,
			'size': '16px',
			'color': 'inherit'
		}
	},
	'Icon :open': {
		kind: 'Icon'
	},
	'Icon :open :bottom': {
		kind: 'Icon',
		props: {
			'transform': 'rotate(180deg)'
		}
	},
	'Icon :open :left': {
		kind: 'Icon',
		props: {
			'transform': 'rotate(90deg)'
		}
	},
	'Icon :open :right': {
		kind: 'Icon',
		props: {
			'transform': 'rotate(-90deg)'
		}
	},
	'Icon :closed': {
		kind: 'Icon'
	},
	'Icon :active': {
		kind: 'Icon'
	}
};

const getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

const getParent = (pages, pageId) => {
	if (!pageId || !pages[pageId]) return null;
	return Object.values(pages).find(({
		children = []
	}) => children && Array.isArray(children) && children.includes(pageId));
};

const getMobileOS = () => {
	const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR',
	      platform = typeof window !== 'undefined' ? window.navigator.platform : 'SSR',
	      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
	let os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'MacOS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os === 'iOS' || os === 'Android';
};

const Ul = atomize.ul();
const Li = atomize.li();
const Name = atomize.span();

const ItemNoCollapse = ({
	id,
	commonParams,
	match,
	pageUrl,
	pagePath,
	linkName,
	linkHref,
	hasSub
}) => {
	const {
		override
	} = commonParams;
	return <Li {...override('Item', `Item-${pageUrl}`, match && 'Item :active')}>
		      
		<Link href={linkHref} {...override('Link', `Link-${pageUrl}`, match && 'Link :active')}>
			        
			{override(`Link-${pageUrl}`).children || linkName}
			      
		</Link>
		      
		{hasSub && <Wrapper rootId={id} path={pagePath} {...commonParams} {...override('Sub', `Sub-${pageUrl}`, match && 'Sub :active')} />}
		    
	</Li>;
};

const ItemCollapse = ({
	id,
	commonParams,
	match,
	pageUrl,
	pagePath,
	linkName,
	linkHref,
	hasSub
}) => {
	const {
		level,
		breakpoint,
		platform,
		override
	} = commonParams,
	      [isOpen, setOpen] = useState({
		open: true,
		touch: true
	}),
	      [isMobile, setMobile] = useState(getMobileOS()),
	      [position, setPosition] = useState('right'),
	      onSubOpen = () => {
		if (isMobile) return;
		setOpen({
			open: true,
			touch: false
		});
	},
	      onSubClose = useCallback(() => {
		if (isMobile) return;
		setOpen({
			open: false,
			touch: isOpen.touch
		});
	}, [isOpen]),
	      onSubToggle = useCallback(() => {
		if (!isMobile) return;
		setOpen({
			open: !isOpen.open,
			touch: true
		});
	}, [isOpen]);

	const subRef = useCallback(node => {
		if (level > 1 && node instanceof HTMLElement) {
			const {
				x,
				width
			} = node.getBoundingClientRect(),
			      sW = typeof window !== 'undefined' ? window.screen.width : 0;

			if (x + width > sW && position !== 'left') {
				setPosition('left');
			}
		}
	}, []);
	return <Li onMouseEnter={onSubOpen} onMouseLeave={onSubClose} {...override('Item', `Item-${pageUrl}`, match && 'Item :active', `Item ${isOpen.open ? ':open' : ':closed'}`)}>
		      
		<Link href={linkHref} align-items="center" display="flex" {...override('Link', `Link-${pageUrl}`, match && 'Link :active', `Link ${isOpen.open ? ':open' : ':closed'}`)}>
			        
			<Name order={position === 'right' ? 1 : 2}>
				          
				{override(`Link-${pageUrl}`).children || linkName}
				        
			</Name>
			        
			<Icon order={position === 'right' ? 2 : 1} {...override('Icon', `Icon-${pageUrl}`, match && 'Icon :active', `Icon ${isOpen.open ? ':open' : ':closed'}`, isOpen.open && level === 1 && 'Icon :open :bottom', isOpen.open && level > 1 && `Icon :open :${position}`)} />
			      
		</Link>
		      
		{isMobile && <Box onClick={onSubToggle} {...override('Overlay')} />}
		      
		{hasSub && <Wrapper
			subRef={subRef}
			rootId={id}
			path={pagePath}
			{...commonParams}
			{...override('Sub', `Sub-${pageUrl}`, 'Sub :collapse', level === 1 && 'Sub :bottom', level > 1 && `Sub :${position}`, `Sub ${isOpen.open ? ':open' : ':closed'}`)}
		/>}
		    
	</Li>;
};

const Item = ({
	id,
	name,
	pageUrl,
	path = [],
	children = [],
	pages,
	exact = false,
	depth = 0,
	level = 0,
	collapse,
	breakpoint,
	platform,
	override
}) => {
	const hasSub = !!(children.length && level < depth);
	const pagePath = [...path, pageUrl];
	const linkHref = `/${pagePath.join("/")}`; // const { projectType } = getAPI() || {};

	let match = null; // if (projectType === 'gatsby') {
	//   match = useMatch(href) || null;
	// } else {
	//   match = useRouteMatch({ path: href, exact }) || null;
	// }

	const commonParams = {
		pages,
		depth,
		level,
		collapse,
		breakpoint,
		platform,
		override
	};
	const otherParams = {
		id,
		match,
		pageUrl,
		pagePath,
		linkName: name,
		linkHref,
		hasSub
	};

	if (hasSub && collapse) {
		return <ItemCollapse commonParams={commonParams} {...otherParams} />;
	} else {
		return <ItemNoCollapse commonParams={commonParams} {...otherParams} />;
	}
};

const Wrapper = ({
	subRef,
	pages,
	rootId,
	override,
	depth,
	collapse,
	level = 0,
	path,
	exact,
	breakpoint,
	platform,
	...rest
}) => {
	const rootPage = pages?.[rootId];
	const common = {
		pages,
		override,
		depth,
		collapse,
		path,
		exact,
		breakpoint,
		platform
	};
	const list = rootPage?.children?.map(id => pages[id]) ?? [];
	return <Ul
		ref={subRef}
		margin="0px"
		padding="6px 0px"
		list-style="none"
		{...rest}
	>
		      
		{list.map(item => <Item key={item.id} level={level + 1} {...item} {...common} />)}
		    
	</Ul>;
};

const NestedMenu = ({
	rootId,
	depth,
	collapse,
	exact,
	breakpoint,
	platform,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const pages = getAPI().pages || {};
	let path = [];

	if (rootId !== 'root') {
		let parent = pages[rootId];

		while (parent && parent.id !== 'root') {
			path = [parent.pageUrl, ...path];
			parent = getParent(pages, parent?.id);
		}
	}

	const breakpointStyles = {
		[`${breakpoint}-flex-direction`]: 'column'
	};
	return <Wrapper
		flex-wrap="wrap"
		display="flex"
		position="relative"
		{...breakpointStyles}
		rootId={rootId}
		path={path}
		pages={pages}
		depth={depth}
		collapse={collapse}
		exact={exact}
		breakpoint={breakpoint}
		platform={platform}
		override={override}
		{...rest}
	/>;
};

const propInfo = {
	rootId: {
		title: 'Root ID',
		control: 'input',
		category: 'Main',
		weight: 1
	},
	depth: {
		title: 'Depth',
		control: 'input',
		category: 'Main',
		weight: 1
	},
	collapse: {
		title: 'Collapse nested',
		control: 'checkbox',
		category: 'Main',
		weight: 1
	},
	exact: {
		title: 'Exact active match',
		control: 'checkbox',
		category: 'Main',
		weight: 1
	},
	alignMobile: {
		title: 'Alignment of items on the mobile',
		control: 'select',
		variants: ['to the left', 'to the right'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	breakpoint: {
		title: 'Mobile version breakpoint',
		control: 'input',
		category: 'Mobile',
		weight: 1
	},
	platform: {
		title: 'Detect device platform',
		control: 'checkbox',
		category: 'Mobile',
		weight: 1
	}
};
const defaultProps = {
	rootId: 'root',
	depth: 1,
	collapse: false,
	breakpoint: 'md',
	platform: true
};
export default Object.assign(NestedMenu, {
	propInfo,
	defaultProps,
	overrides
});