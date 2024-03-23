import { useState } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	// STRING -> state for the value of the input typed by the user
	const [taskInput, setTaskInput] = useState("");
	// ARRAY -> state for the actual list of task
	const [taskList, setTaskList] = useState([]);

	return (
		<>
			<Header />
			<CreateTask
				taskInput={taskInput}
				setTaskInput={setTaskInput}
				taskList={taskList}
				setTaskList={setTaskList}
			/>
			<Footer />
		</>
	);
}

export default App;
