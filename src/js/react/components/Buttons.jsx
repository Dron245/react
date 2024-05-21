import React from "react";

import { useState } from "react";
import {differences} from "../data";
import Button from "../components/Button/Button.jsx"

export default function Buttons() {
	let [contentType, setContentType ] = useState(null)
	function handleClick(contentType) {
		setContentType(contentType)
	}
	return (
		<section>
			<Button isActive={contentType == "way"}
				onclick={() => handleClick("way")}>Привет</Button>
			<Button isActive={contentType == "easy"}
				onclick={() => handleClick("easy")}>Как</Button>
			<Button isActive={contentType == "program"}
				onclick={() => handleClick("program")}>Дела ?</Button>
			{!contentType && <p>Нажми на кнопку</p>}
			{contentType && <p>{differences[contentType]}</p>}
		</section>
	)
}