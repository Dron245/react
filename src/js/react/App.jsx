import React from "react";
import Header from "./components/header.jsx"
import WayToTeach from "./components/WayToTeach.jsx"
import Button from "./components/Button/Button.jsx"
import {ways} from "./data";

const App = () => {
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
					<Button>Привет</Button>
					<Button>Как</Button>
					<Button>Дела ?</Button>
				</section>
			</main>
		</div>
	)
}



export default App