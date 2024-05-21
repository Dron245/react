import React from "react";
import Button from "./Button/Button.jsx";

export default function TabsSectionTwo({active, onChange}) {
	return (
		<section>
			<Button isActive={active == 'one'} onclick={() => onChange('one')}>Привет1</Button>
			<Button isActive={active == 'two'} onclick={() => onChange('two')}>Это я2</Button>
		</section>
	)
}