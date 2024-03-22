import Task from "../Task";

import "./createTask.css";

const CreateTask = ({ taskInput, setTaskInput, taskList, setTaskList }) => {
	return (
		<>
			<main>
				<div>
					{taskList.map((task, index) => {
						return <Task key={index} task={task} />;
					})}
				</div>
				<div>
					<form
						onSubmit={(e) => {
							if (taskInput !== "") {
								e.preventDefault();
								const listTemp = [...taskList];
								listTemp.push(taskInput);
								setTaskInput("");
								setTaskList(listTemp);
							} else {
								e.preventDefault();
							}
						}}>
						<input
							type="text"
							placeholder="New task..."
							name="taskI"
							value={taskInput}
							onChange={(e) => {
								setTaskInput(e.target.value);
							}}
						/>
						<input type="submit" />
					</form>
				</div>
			</main>
		</>
	);
};

export default CreateTask;
