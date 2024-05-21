import React from "react";


function WayToTeach({title, description}) {
	return (
		<li>
			<strong>{title}</strong><br />
			<p>{description}</p>
		</li>
	)
}

export default WayToTeach