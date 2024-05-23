import React from "react";
import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";

export default function EffectsSection() {
	function openModal() {

	}

	return (
		<section>
			<h3>Effect</h3>

			<Button onclick={openModal}>Открыть</Button>

			<Modal>
				<h3>Hello from</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus recusandae maiores ratione dolorum! Quidem pariatur modi voluptate fuga quibusdam assumenda.</p>
			</Modal>
		</section>
	)
}