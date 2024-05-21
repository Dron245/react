import React from "react";
import './Button.scss'
export default function Button({children, onclick, isActive}) {
	return <button className = {isActive ? 'button active' : 'button'}
		onClick={onclick}
		>{children}
	</button>
}
