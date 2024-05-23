import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.jsx"
import TeachList from "./components/TeachList.jsx";
import Buttons from "./components/Buttons.jsx";
import Quanity from "./components/quantity/quantity.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedBackSection from "./components/feedBackSection.jsx";
import EffectsSection from "./components/EffectsSection.jsx";

const App = () => {
	const [tab, setTab] = useState('Effect')
	return (
		<>
			<Header/>
			<main>
				<TabsSection active={tab} onChange={(current) => setTab(current)} />
				{tab == "main" && (
					<>
						<TeachList />
						<Buttons />
					</>
				)}
				
				{tab == "feedback" && (
					<>
						<FeedBackSection/>
						<Quanity />
					</>
				)}

				{tab == "Effect" && (
					<>
						<EffectsSection/>
					</>
				)}
			</main>
		</>
	)
}
// Объект для вывода
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

