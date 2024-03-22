import { useState } from "react";

import "./task.css";

const Task = ({ task, index, taskList, setTaskList }) => {
	const [isLine, setIsLine] = useState(false);

	return (
		<>
			<div>
				<input
					type="checkbox"
					name={`checkbox-${task}`}
					id={`checkbox-${task}`}
					onChange={(e) => {
						e.target.checked ? setIsLine(true) : setIsLine(false);
					}}
				/>
				<label
					style={{ textDecoration: `${isLine ? "line-through" : ""}` }}
					htmlFor={`checkbox-${task}`}>
					{task}
				</label>
				<input
					type="button"
					name={`button-${task}`}
					value={"X"}
					onClick={() => {
						const listTemp = [...taskList];
						listTemp.splice(index, 1);
						setTaskList(listTemp);
					}}
				/>
			</div>
		</>
	);
};

export default Task;
