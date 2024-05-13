import React from "react";
import { useState } from "react";

const Header = () => {
	const [now, setNow] = useState(new Date())
	setInterval(() => setNow(new Date()), 1000)
	return (
	<header>
		<h1>Шапка</h1>
		<span>Время сейчас: { now.toLocaleTimeString() }</span>
	</header>
	
	)
}

export default Header