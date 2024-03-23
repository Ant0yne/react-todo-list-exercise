import Task from "../Task";

import "./createTask.css";

const CreateTask = ({ taskInput, setTaskInput, taskList, setTaskList }) => {
	/**
	 *
	 * @param {Object} e
	 *
	 * check if the input is not empty -> reset the taskInput state then add to the taskList input the new task & render it
	 */
	const handleSubmit = (e) => {
		if (taskInput !== "") {
			e.preventDefault();
			const TaskListTemp = [...taskList];
			const taskTemp = {
				text: taskInput.toLowerCase(),
				id: Math.floor(Math.random() * 100000) + 1,
				checked: false,
			};
			TaskListTemp.push(taskTemp);
			setTaskInput("");
			setTaskList(TaskListTemp);
		} else {
			e.preventDefault();
		}
	};

	return (
		<>
			<main>
				<div>
					{taskList.map((task, index) => {
						if (task.text.indexOf(taskInput) !== -1) {
							return (
								<Task
									key={task.id}
									task={task.text}
									checked={task.checked}
									index={index}
									taskList={taskList}
									setTaskList={setTaskList}
								/>
							);
						}
					})}
				</div>
				<div>
					<form onSubmit={handleSubmit}>
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
