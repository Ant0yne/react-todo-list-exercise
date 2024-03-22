import "./createTask.css";

const CreateTask = ({ taskInput, setTaskInput, taskList, setTaskList }) => {
	return (
		<>
			<main>
				<div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							const listTemp = [...taskList];
							listTemp.push(taskInput);
							setTaskList(listTemp);
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
