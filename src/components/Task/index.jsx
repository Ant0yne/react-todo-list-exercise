import { useState } from "react";

import "./task.css";

const Task = ({
	task,
	index,
	checked,
	taskCheckedList,
	setTaskCheckedList,
	taskUncheckedList,
	setTaskUncheckedList,
}) => {
	/**
	 * delete the task when the button is clicked
	 */
	const handleDelete = () => {
		if (task.checked === false) {
			const listTemp = [...taskUncheckedList];
			listTemp.splice(index, 1);
			setTaskUncheckedList(listTemp);
		} else {
			const listTemp = [...taskCheckedList];
			listTemp.splice(index, 1);
			setTaskCheckedList(listTemp);
		}
	};

	/**
	 *
	 * @param {Object} e
	 *
	 * checkbox is checked ? -> change the key checked of the task to true then send it to the end of taskList
	 * checkbox is unchecked ? -> change the key checked of the task to false then send it to the top of taskList
	 *
	 */
	const handleCheckedTask = async (e) => {
		if (e.target.checked) {
			const listUncheckTemp = [...taskUncheckedList];
			const listCheckTemp = [...taskCheckedList];
			listUncheckTemp[index].checked = true;
			listCheckTemp.push(listUncheckTemp.splice(index, 1)[0]);
			listUncheckTemp.splice(index, 1);
			setTaskCheckedList(listCheckTemp);
			setTaskUncheckedList(listUncheckTemp);
		} else {
			const listUncheckTemp = [...taskUncheckedList];
			const listCheckTemp = [...taskCheckedList];
			listCheckTemp[index].checked = false;
			listUncheckTemp.push(listCheckTemp.splice(index, 1)[0]);
			listCheckTemp.splice(index, 1);
			setTaskUncheckedList(listUncheckTemp);
			setTaskCheckedList(listCheckTemp);
		}
	};

	return (
		<>
			<div>
				<input
					type="checkbox"
					name={`checkbox-${task}`}
					id={`checkbox-${task}`}
					checked={checked ? "true" : false}
					onChange={handleCheckedTask}
				/>
				<label
					// if isLine state is true, line-through the task text
					style={{ textDecoration: `${checked ? "line-through" : ""}` }}
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
