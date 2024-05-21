import React from "react"
import TabsSectionTwo from "./TabsSectionTwo.jsx"
import { useState } from "react"
import VOne from "./VOne.jsx"
import VTwo from "./VTwo.jsx"
// import Button from "./Button/Button.jsx"
export default function FeedBackSection () {
	const [tab, settab] = useState('two')
	return (
		<>
			<section >
				<h3>Обратная связь</h3>
			</section>
			<TabsSectionTwo active={tab} onChange={(cur)=>settab(cur)}/>
			{tab =='two' && <VTwo/>}
			{tab =='one' && <VOne/>}
			
		</>
	)
}