import React from "react"
import Button from "./Button/Button.jsx"
export default function TabsSection ({active, onChange}) {
	return (
		<section style = {{marginBottom: '1rem'}}>
			<Button isActive={active == 'main'}
			 onclick={() => onChange('main')}
			 >ОСнованая
			 </Button>
			 
			<Button isActive={active == 'feedback'}
			 onclick={() => onChange('feedback')}
			 >Обратная связь
			 </Button>
			<Button isActive={active == 'Effect'}
			 onclick={() => onChange('Effect')}
			 >Effects
			 </Button>
		</section>
	)
}