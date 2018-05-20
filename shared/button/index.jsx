import React from 'react';
import classnames from 'classnames';


export default function Button({ element = "button", 
									text,
									className, 
									small, 
									primary,
									info, 
									success, 
									warning, 
									danger, 
									neutral,
									children,
									...props}){
	return React.createElement(element, {
		className: classnames('btn', {
			'btn-sm': small,
			'btn-primary': primary,
			'btn-info': info,
			'btn-success': success,
			'btn-warning': warning,
			'btn-danger': danger,
			'btn-neutral': neutral,
		} ,className),
		...props
	}, text || children);
}