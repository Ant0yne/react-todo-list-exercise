import { useState } from "react";

import "./task.css";

const Task = ({ task, index, taskList, setTaskList }) => {
	const [isLine, setIsLine] = useState(false);

	/**
	 * delete the task when the button is clicked
	 */
	const handleDelete = () => {
		const listTemp = [...taskList];
		listTemp.splice(index, 1);
		setTaskList(listTemp);
	};

	/**
	 *
	 * @param {Object} e
	 *
	 * if the checkbox is checked -> toggle the isLine state then move the task to the bottom of the taskList and rerender
	 */
	const handleCheckedTask = async (e) => {
		if (e.target.checked) {
			setIsLine(true);
			const listTemp = [...taskList];
			listTemp.push(listTemp.splice(index, 1)[0]);
			setTaskList(listTemp);
		} else {
			setIsLine(false);
			const listTemp = [...taskList];
			listTemp.unshift(listTemp.splice(index, 1)[0]);
			setTaskList(listTemp);
		}
	};

	return (
		<>
			<div>
				<input
					type="checkbox"
					name={`checkbox-${task}`}
					id={`checkbox-${task}`}
					onChange={handleCheckedTask}
				/>
				<label
					// if isLine state is true, line-through the task text
					style={{ textDecoration: `${isLine ? "line-through" : ""}` }}
					htmlFor={`checkbox-${task}`}>
					{task}
				</label>
				<i>
					<input
						type="button"
						name={`button-${task}`}
						value={"X"}
						onClick={handleDelete}
					/>
				</i>
			</div>
		</>
	);
};

export default Task;
