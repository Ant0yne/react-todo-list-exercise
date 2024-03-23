import { useState } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	// STRING -> state for the value of the input typed by the user to create task
	const [taskInput, setTaskInput] = useState("");
	// STRING -> state for the value of the input typed by the user to search task
	const [taskSearch, setTaskSearch] = useState("");
	// ARRAY -> state for the actual list of task -> task is an OBJECT -> text:STRING id:NUMBER checked:BOOLEAN
	const [taskList, setTaskList] = useState([]);

	return (
		<>
			<Header />
			<CreateTask
				taskInput={taskInput}
				setTaskInput={setTaskInput}
				taskList={taskList}
				setTaskList={setTaskList}
				taskSearch={taskSearch}
				setTaskSearch={setTaskSearch}
			/>
			<Footer />
		</>
	);
}

export default App;
