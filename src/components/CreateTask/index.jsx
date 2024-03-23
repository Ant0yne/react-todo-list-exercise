import Task from "../Task";

import "./createTask.css";

const CreateTask = ({
	taskInput,
	setTaskInput,
	taskList,
	setTaskList,
	taskSearch,
	setTaskSearch,
}) => {
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
				{taskList.length > 0 && (
					<div>
						<input
							type="text"
							placeholder="Search task..."
							name="taskSrch"
							value={taskSearch}
							onChange={(e) => {
								setTaskSearch(e.target.value);
							}}
						/>
					</div>
				)}
				<div>
					{taskList.map((task, index) => {
						{
							/* if there is no search -> create un task (checkbox, task text, delete button) for each element in the taskList state */
						}
						if (taskSearch === "") {
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
							{
								/* update the task list rendered with all the task that include the taskSearch state in their text key */
							}
						} else if (task.text.indexOf(taskSearch) !== -1) {
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
