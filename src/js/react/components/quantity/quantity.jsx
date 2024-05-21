import React from "react";
import { useState } from "react";
import "./quantity.scss"


const Quanity = () => {
	const [contentType, setContentType ] = useState(1)
	function changeminusQuantity() {
		setContentType(contentType - 1)
	}
	function changeplusQuantity() {
		setContentType(contentType + 1)
	}
	
	return (
		<section>
			<div>
				<p className="qua">{contentType}</p>
				<button onClick={changeminusQuantity} className="button minus"> - </button>
				<button onClick={changeplusQuantity} className="button plus"> + </button>
			</div>
		</section>
	)
}

export default Quanity