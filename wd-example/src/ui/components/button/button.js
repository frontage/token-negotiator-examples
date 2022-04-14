
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// App
import { Icon, Link, Loader } from 'ui/components';

// Styles
import styles from "./button.module.scss";


//
//	TokenScript / UI / Components / Button
//


export default function Button( props ) {
	const { children, className, ariaLabel, format, size, icon, iconSize, iconPos, iconFormat, iconTag, isLoading, iconLoaderSize, ...restProps } = props;
	const _isIconButton = icon && !children;
	const _icon = <Icon type={ icon } format={ iconFormat } size={ iconSize } tag={ iconTag } />;
	let iconContent = typeof icon === 'string' ? _icon : icon;
	if ( isLoading ) iconContent = <Loader size={ iconLoaderSize } />;

	const sizeClass = size && styles[ `-size-${ size }` ] || null;
	const formatClass = format && styles[ `-format-${ format }` ] || null;
	const classes = clsx( styles[ 'c-button' ], className, formatClass, sizeClass, { [ styles[ '-format-icon' ]]: _isIconButton });

	return (
		<Link
			className={ classes }
			ariaLabel={ ariaLabel }
			{ ...restProps }
		>
			<span className={ styles[ 'c-button_content' ]}>
				{ iconPos === 'before' && iconContent }
				{ children && <span className={ styles[ 'c-button_text' ] }>{ children }</span> }
				{ iconPos === 'after' && iconContent }
			</span>
		</Link>
	);
}

function ButtonGroup({ children, className }) {
	return (
		<div className={ clsx( styles[ 'c-button-group' ], className )}>
			{ children && children }
		</div>
	);
}

Button.Group = ButtonGroup;

ButtonGroup.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

Button.propTypes = {
	children: PropTypes.node,
	element: PropTypes.oneOf([ 'a', 'button', 'span' ]),
	type: PropTypes.oneOf([ 'submit', 'button' ]),
	className: PropTypes.string,
	format: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
	iconSize: PropTypes.string,
	iconFormat: PropTypes.string,
	iconPos: PropTypes.string,
	ariaLabel: PropTypes.string,
	href: PropTypes.string,
	as: PropTypes.string,
	external: PropTypes.bool,
	disabled: PropTypes.bool,
	focusable: PropTypes.bool,
	onClick: PropTypes.func,
	isLoading: PropTypes.bool,
	iconLoaderSize: PropTypes.string,
};

Button.defaultProps = {
	external: false,
	iconPos: 'after',
	element: 'button',
	type: 'button',
	iconLoaderSize: 'm',
};
