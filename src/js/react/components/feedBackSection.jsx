import React from "react"
import TabsSectionTwo from "./TabsSectionTwo.jsx"
import { useState, useRef } from "react"
import VOne from "./VOne.jsx"
import VTwo from "./VTwo.jsx"
import Button from "./Button/Button.jsx"
export default function FeedBackSection () {
	const [form, setForm] = useState({
		// name:'',
		// tab:'two',
		error:false,
		reason:'suggest'
	})
	const [tab, setTab] = useState('two')
	const input = useRef()
	const [show, setShow] = useState(false)
	function changeKey(e) {
		if(e.key == 'Enter') setShow(true)
	}
	return (
		<>
			<section >
				<h3>Обратная связь</h3>
				<form className="form" action="#">
					<h3 >Ваше имя: {show && input.current.value}</h3>
					{console.log(show)}
					<h3 >Ваше имя: {show}</h3>
					<label htmlFor="name">Ваше имя</label>
					<input ref={input} value={form.name} id="name"
						onKeyUp={changeKey}
						style={{border: form.error ? '1px solid red' : null}}
					/>

					<select value={form.reason} 
						onChange={function(event) {
							console.log(event);
							setForm((prev) => ({...prev, reason:event.target.value}))
						}
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