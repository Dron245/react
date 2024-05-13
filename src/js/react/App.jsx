import React from "react";
import Header from "./components/header.jsx"
import WayToTeach from "./components/WayToTeach.jsx"
import Button from "./components/Button/Button.jsx"
import { useState } from "react";
import {ways, differences} from "./data";
import Quanity from "./components/quantity/quantity.jsx";

const App = () => {
	const [contentType, setContentType ] = useState(null)
	function handleClick(contentType) {
		setContentType(contentType)
	}
	return (
		<div>
			<Header/>
			<main>
				<section>
					<h3>Заголовок</h3>
					<ul>
						<WayToTeach title={ways[0].title} description={ways[0].description} />
						<WayToTeach {...ways[1]} /> 
						<WayToTeach {...ways[2]} /> 
						<WayToTeach {...ways[3]} /> 
					</ul>
				</section>
				<section>
					<Button onclick={() => handleClick("way")}>Привет</Button>
					<Button onclick={() => handleClick("easy")}>Как</Button>
					<Button onclick={() => handleClick("program")}>Дела ?</Button>

					{/* {contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>} */}
					{!contentType && <p>Нажми на кнопку</p>}
					{contentType && <p>{differences[contentType]}</p>}
				</section>
				<section>
					<Quanity />
				</section>
			</main>
		</div>
	)
}



export default App