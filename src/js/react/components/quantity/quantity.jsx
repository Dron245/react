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
		<div>
			<p className="qua">{contentType}</p>
			<button onClick={changeminusQuantity} className="button minus"> - </button>
			<button onClick={changeplusQuantity} className="button plus"> + </button>
		</div>
	)
}

export default Quanity