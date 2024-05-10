import React from "react";


function WayToTeach({title, description}) {
	return (
		<li>
			<strong>{title}</strong><br />
			{description}
		</li>
	)
}

export default WayToTeach