import React from "react";


const now = new Date()
const Header = () => {
	return (
	<header>
		<h1>Шапка</h1>
		<span>Время сейчас: { now.toLocaleTimeString() }</span>
	</header>
	
	)
}

export default Header