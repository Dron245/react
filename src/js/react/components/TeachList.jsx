import React from "react";
import WayToTeach from "../components/WayToTeach.jsx"
import { ways } from "../data.js";
export default function WayToTeachList() {
	return (
		<section>
			<h3>Заголовок</h3>
			<ul>
				{ways.map((way)=> 
					<WayToTeach key={way.title} {...way} />
				)}
			</ul>
		</section>
	)
}
