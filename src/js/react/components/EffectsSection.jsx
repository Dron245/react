import React, { useState, useEffect, useCallback } from "react";
import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";

export default function EffectsSection() {
	const [modal, setModal] = useState(false)
	const [load, setLoad] = useState(true)
	const [users, setUsers] = useState([])

	const qwe = useCallback(async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const users = await response.json()
			setUsers(users)
	}, [])

	useEffect(() => {
		qwe()
	}, [])
	return (
		<section>
			<h3>Effect</h3>
			<Button style={{marginBottom:'1rem'}} onclick={() => setModal(true)}>Открыть</Button>

			<Modal open = {modal}>
				<h3>Hello from</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus recusandae maiores ratione dolorum! Quidem pariatur modi voluptate fuga quibusdam assumenda.</p>
				<Button onclick={() => setModal(false)}>Закрыть</Button>
			</Modal>

			{load && <p>Загрузка...</p>}
			{!load && <ul>
					{users.map(user =>
						<li key={user.id}> <p>{user.name}</p>{user.email} </li>
					)}
				</ul>}
		</section>
	)
}