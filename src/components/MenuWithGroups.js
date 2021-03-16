import React, { useState, useEffect, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text, Link, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useRouteMatch } from "react-router-dom";
import { useMatch } from "@reach/router";
import { MdKeyboardArrowDown } from "react-icons/md";
const overrides = {
	'List': {
		kind: 'Ul'
	},
	'Item': {
		kind: 'Li'
	},
	'Sub Head': {
		kind: 'Box'
	},
	'Sub Head Text': {
		kind: 'Text'
	},
	'Sub Head Icon': {
		kind: 'Icon'
	},
	'Sub Head Icon :open': {
		props: {
			transform: 'rotate(0deg)'
		}
	},
	'Sub Head Icon :closed': {
		props: {
			transform: 'rotate(-90deg)'
		}
	},
	'Sub Body': {
		kind: 'Box'
	},
	'Sub Body :open': {
		props: {
			display: 'block'
		}
	},
	'Sub Body :closed': {
		props: {
			display: 'none'
		}
	},
	'Link': {
		kind: 'Link',
		props: {
			color: '--primary'
		}
	},
	'Link :active': {
		props: {
			color: '--secondary'
		}
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

const Ul = atomize.ul();
const Li = atomize.li();

const Sub = ({
	common,
	item,
	other
}) => {
	const {
		tabState,
		override
	} = common,
	      {
		id,
		name,
		pageUrl
	} = item,
	      {
		pagePath,
		href,
		match,
		expanded
	} = other,
	      isClickable = tabState !== 'Keep all tabs expanded',
	      isSubOpenForce = tabState === 'Keep all tabs expanded' || tabState === 'Expand all tabs',
	      isSubCloseForce = tabState === 'Collapse all tabs',
	      [isSubOpen, setSubOpen] = useState(expanded && !isSubCloseForce || isSubOpenForce),
	      onSubToggle = useCallback(() => {
		setSubOpen(!isSubOpen);
	}, [isSubOpen]),
	      subOpenStatus = isSubOpen ? ':open' : ':closed';
	useEffect(() => {
		const isSubOpenForce = tabState === 'Keep all tabs expanded' || tabState === 'Expand all tabs';
		const isSubCloseForce = tabState === 'Collapse all tabs';
		setSubOpen(expanded && !isSubCloseForce || isSubOpenForce);
	}, [tabState]);
	return <>
		      
		<Box
			padding="6px 12px"
			align-items="center"
			display="flex"
			cursor={isClickable ? 'pointer' : 'default'}
			onClick={isClickable && onSubToggle}
			{...override('Sub Head', `Sub Head-${pageUrl}`, match && 'Sub Head :active', `Sub Head ${subOpenStatus}`)}
		>
			        
			<Text margin="0" white-space="nowrap" {...override('Sub Head Text', match && 'Sub Head Text :active', `Sub Head Text ${subOpenStatus}`, `Sub Head Text-${pageUrl}`)}>
				          
				{override(`Sub Head Text-${pageUrl}`).children || 'Group Name'}
				        
			</Text>
			        
			{isClickable && <Icon category="md" icon={MdKeyboardArrowDown} size="16px" {...override('Sub Head Icon', `Sub Head Icon-${pageUrl}`, match && 'Sub Head Icon :active', `Sub Head Icon ${subOpenStatus}`)} />}
			      
		</Box>
		      
		<Box padding="6px 12px" {...override('Sub Body', `Sub Body-${pageUrl}`, match && 'Sub Body :active', `Sub Body ${subOpenStatus}`)}>
			        
			<Link
				padding="6px 12px"
				white-space="nowrap"
				display="block"
				href={href}
				{...override('Link', `Link-${pageUrl}`, match && 'Link :active', `Link ${subOpenStatus}`)}
			>
				          
				{override(`Link-${pageUrl}`).children || name}
				        
			</Link>
			        
			<List
				list-style="none"
				rootId={id}
				path={pagePath}
				{...common}
				{...override('List', `List-${pageUrl}`, match && 'List :active', `List ${subOpenStatus}`)}
			/>
			      
		</Box>
		    
	</>;
};

const Item = ({
	path,
	common,
	item
}) => {
	const {
		mode,
		projectType
	} = getAPI(),
	      {
		depth,
		level,
		tabState,
		override
	} = common,
	      {
		name,
		pageUrl,
		children
	} = item,
	      hasSub = !!(children && children.length && level < depth),
	      expand = tabState === 'Expand before active item',
	      pagePath = [...path, mode === "production" && pageUrl === "index" ? "" : pageUrl],
	      href = `/${pagePath.join('/')}`;
	let match = null,
	    expanded = false;

	if (projectType === 'gatsby') {
		match = useMatch(href) && true;
	} else {
		match = useRouteMatch({
			path: href,
			exact: true
		}) && true;
		expanded = useRouteMatch({
			path: href,
			exact: !expand
		}) && true;
	}

	return <Li {...override('Item', `Item-${pageUrl}`, match && 'Item :active')}>
		      
		{hasSub ? <Sub
			path={path}
			common={common}
			item={item}
			other={{
				projectType,
				pagePath,
				href,
				match,
				expanded
			}}
			{...override('Sub', `Sub-${pageUrl}`, match && 'Sub :active')}
		/> : <Link
			padding="6px 12px"
			white-space="nowrap"
			display="block"
			href={href}
			{...override('Link', `Link-${pageUrl}`, match && 'Link :active')}
		>
			          
			{override(`Link-${pageUrl}`).children || name}
			        
		</Link>}
		    
	</Li>;
};

const List = ({
	rootId,
	path,
	pages,
	depth,
	expand,
	level = 0,
	tabState,
	override,
	...rest
}) => {
	const rootPage = pages?.[rootId];
	const common = {
		pages,
		depth,
		expand,
		level: level + 1,
		tabState,
		override
	};
	const list = rootPage?.children?.map(id => pages[id]) ?? [];
	return <Ul padding="0" list-style="none" {...rest}>
		      
		{list.map(item => <Item key={item.id} path={path} common={common} item={item} />)}
		    
	</Ul>;
};

const Menu = ({
	depth,
	rootId,
	expand,
	tabState,
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

	return <List
		user-select="none"
		flex-direction="column"
		display="flex"
		position="relative"
		z-index="10"
		rootId={rootId}
		path={path}
		pages={pages}
		depth={depth}
		expand={expand}
		tabState={tabState}
		override={override}
		{...rest}
	/>;
};

const propInfo = {
	depth: {
		title: 'Depth',
		control: 'input',
		category: 'Main',
		weight: 1
	},
	rootId: {
		title: 'Root ID',
		control: 'input',
		category: 'Main',
		weight: 1
	},
	tabState: {
		title: 'Tab state by default',
		control: 'select',
		variants: ['Collapse all tabs', 'Expand before active item', 'Expand all tabs', 'Keep all tabs expanded'],
		weight: 1
	}
};
const defaultProps = {
	rootId: 'root',
	depth: 1,
	tabState: 'Expand before active item'
};
export default Object.assign(Menu, {
	propInfo,
	defaultProps,
	overrides
});