import React from "react"
import TabsSectionTwo from "./TabsSectionTwo.jsx"
import { useState } from "react"
import VOne from "./VOne.jsx"
import VTwo from "./VTwo.jsx"
import Button from "./Button/Button.jsx"
export default function FeedBackSection () {

	const [form, setForm] = useState({
		name:'',
		// tab:'two',
		error:false,
		reason:'suggest'
	})
	const [tab, setTab] = useState('two')
	return (
		<>
			<section >
				<h3>Обратная связь</h3>
				<form className="form" action="#">
					<label htmlFor="name">Ваше имя</label>
					<input value={form.name} id="name" type="text"
					style={{border: form.error ? '1px solid red' : null}}
					 onChange={(event) =>
						// {
							setForm((prev) =>({...prev,
								name: event.target.value,
								error: event.target.value.trim().length == 0
							}))
						// }
					} />

					<select value={form.reason} 
						onChange={(event) =>
						setForm((prev) => ({...prev, 
							reason:event.target.value.trim().length == 0
						}))
						}
					>
						<option value="error">ошибка</option>
						<option value="help">помощь</option>
						<option value="suggest">предложение</option>
					</select>

					<Button isActive={!form.error} disabled={form.error} >Отправить</Button>
				</form>
			</section>
			<TabsSectionTwo active={tab} onChange={(cur) => setTab(cur)}
			/>
			{tab =='two' && <VTwo/>}
			{tab =='one' && <VOne/>}
			
		</>
	)
}