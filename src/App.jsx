import { useState } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faListCheck,
	faCircleHalfStroke,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faListCheck, faCircleHalfStroke, faTrash);

import "./App.css";

function App() {
	// STRING -> state for the value of the input typed by the user to create task
	const [taskInput, setTaskInput] = useState("");
	// ARRAY -> state for the actual list of task -> task is an OBJECT -> text:STRING id:NUMBER checked:BOOLEAN
	const [taskList, setTaskList] = useState([]);
	// BOOLEAN -> state to toggle darkmode/lightmode
	const [isDark, setIsDark] = useState(false);

	isDark
		? ((document.body.style.backgroundColor = "var(--dark)"),
		  (document.body.style.color = "var(--white)"))
		: ((document.body.style.backgroundColor = "var(--white)"),
		  (document.body.style.color = "var(--black)"));

	return (
		<>
			<Header isDark={isDark} setIsDark={setIsDark} />
			<CreateTask
				taskInput={taskInput}
				setTaskInput={setTaskInput}
				taskList={taskList}
				setTaskList={setTaskList}
			/>
			<Footer isDark={isDark} setIsDark={setIsDark} />
		</>
	);
}

export default App;
