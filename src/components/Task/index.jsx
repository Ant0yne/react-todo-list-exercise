import { useState } from "react";

import "./task.css";

const Task = ({ task }) => {
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
			</div>
		</>
	);
};

export default Task;
