import React, { useState } from "react";
import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";

export default function EffectsSection() {
	const [modal, setModal] = useState(false)
	function openModal() {
		setModal(true)
	}

	return (
		<section>
			<h3>Effect</h3>

			<Button onclick={openModal}>Открыть</Button>

			<Modal open = {modal}>
				<h3>Hello from</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus recusandae maiores ratione dolorum! Quidem pariatur modi voluptate fuga quibusdam assumenda.</p>
				<Button onclick={() => setModal(false)}>Закрыть</Button>
			</Modal>
		</section>
	)
}