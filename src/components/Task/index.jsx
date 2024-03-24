import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./task.css";

const Task = ({ task, checked, index, taskList, setTaskList }) => {
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
	 * if the checkbox is checked -> toggle the checked key value then move the task to the bottom of the taskList and rerender
	 * if the checkbox is unchecked -> toggle the checked key value then move the task to the top of the taskList and rerender
	 */
	const handleCheckedTask = async (e) => {
		if (e.target.checked) {
			const listTemp = [...taskList];
			listTemp[index].checked = true;
			listTemp.push(listTemp.splice(index, 1)[0]);
			setTaskList(listTemp);
		} else {
			const listTemp = [...taskList];
			listTemp[index].checked = false;
			listTemp.unshift(listTemp.splice(index, 1)[0]);
			setTaskList(listTemp);
		}
	};

	return (
		<>
			<div className="task">
				<div className="checkbox-text">
					<input
						type="checkbox"
						name={`checkbox-${task}`}
						id={`checkbox-${task}`}
						checked={checked}
						onChange={handleCheckedTask}
					/>
					<label
						// if the checked key value of the state is true, line-through the task text
						style={{ textDecoration: `${checked ? "line-through" : ""}` }}
						htmlFor={`checkbox-${task}`}>
						{task}
					</label>
				</div>
				<button
					className="delete-button"
					type="button"
					value=""
					name={`button-${task}`}
					onClick={handleDelete}>
					<FontAwesomeIcon icon="trash" />
				</button>
			</div>
		</>
	);
};

export default Task;
