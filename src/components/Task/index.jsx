import "./task.css";

const Task = ({ task }) => {
	return (
		<>
			<div>
				<input
					type="checkbox"
					name={`checkbox-${task}`}
					id={`checkbox-${task}`}
				/>
				<label htmlFor={`checkbox-${task}`}>{task}</label>
			</div>
		</>
	);
};

export default Task;
