import React from "react";
import { useState } from "react";
import {styled} from 'styled-components'

const HeaderComponents = styled.header`
	height: 50px;
	display: flex;
	padding: 0 2rem;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	background: #fafafa;
`
const Header = () => {
	const [now, setNow] = useState(new Date())
	setInterval(() => setNow(new Date()), 1000)
	return (
	<HeaderComponents>
		<h1>Лого</h1>
		<span>Время сейчас: { now.toLocaleTimeString() }</span>
	</HeaderComponents>
	
	)
}

export default Header