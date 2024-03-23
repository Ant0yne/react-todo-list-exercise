import { useState } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	// STRING -> state for the value of the input typed by the user
	const [taskInput, setTaskInput] = useState("");
	// ARRAY -> state for the actual list of task checked -> task is an OBJECT -> id:NUMBER text:STRING checked:BOOLEAN
	const [taskCheckedList, setTaskCheckedList] = useState([]);
	// ARRAY -> state for the actual list of task unchecked -> task is an OBJECT -> id:NUMBER text:STRING checked:BOOLEAN
	const [taskUncheckedList, setTaskUncheckedList] = useState([]);

	return (
		<>
			<Header />
			<CreateTask
				taskInput={taskInput}
				setTaskInput={setTaskInput}
				taskCheckedList={taskCheckedList}
				setTaskCheckedList={setTaskCheckedList}
				taskUncheckedList={taskUncheckedList}
				setTaskUncheckedList={setTaskUncheckedList}
			/>
			<Footer />
		</>
	);
}

export default App;
