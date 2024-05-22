import React from "react";
import './Button.scss'
export default function Button({children, onclick, isActive, ...props}) {
	return <button className = {isActive ? 'button active' : 'button'}
		{...props}
		onClick={onclick}
		>{children}
	</button>
}
