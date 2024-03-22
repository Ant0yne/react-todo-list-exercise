import { useState } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	const [taskInput, setTaskInput] = useState("");
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
