import Task from "../Task";

import "./createTask.css";

const CreateTask = ({
	taskInput,
	setTaskInput,
	taskCheckedList,
	setTaskCheckedList,
	taskUncheckedList,
	setTaskUncheckedList,
}) => {
	/**
	 *
	 * @param {Object} e
	 *
	 * check if the input is not empty -> create a task and reset taskInput
	 */
	const handleSubmit = (e) => {
		if (taskInput !== "") {
			e.preventDefault();
			const TaskListTemp = [...taskUncheckedList];
			const taskTemp = {
				text: taskInput.toLowerCase(),
				id: Math.floor(Math.random() * 100000) + 1,
				checked: false,
			};
			TaskListTemp.push(taskTemp);
			setTaskInput("");
			setTaskUncheckedList(TaskListTemp);
		} else {
			e.preventDefault();
		}
	};

	return (
		<>
			<main>
				<div>
					{/* create un task (checkbox, task text, delete button) for each item in the taskList state */}
					{taskUncheckedList.map((task, index) => {
						return (
							<Task
								key={task.id}
								task={task.text}
								index={index}
								checked={task.checked}
								taskCheckedList={taskCheckedList}
								setTaskCheckedList={setTaskCheckedList}
								taskUncheckedList={taskUncheckedList}
								setTaskUncheckedList={setTaskUncheckedList}
							/>
						);
					})}
					{taskCheckedList.map((task, index) => {
						return (
							<Task
								key={task.id}
								task={task.text}
								index={index}
								taskCheckedList={taskCheckedList}
								setsetTaskCheckedListTaskList={setTaskCheckedList}
								taskUncheckedList={taskUncheckedList}
								setTaskUncheckedList={setTaskUncheckedList}
							/>
						);
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
