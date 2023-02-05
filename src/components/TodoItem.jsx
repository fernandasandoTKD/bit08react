import React from 'react';
import Button from 'react-bootstrap/Button';
import { IoTrashSharp } from 'react-icons/io5';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<Button
				className='btn-delete' variant="danger"
				onClick={() => handleDeleteTodo(todo.id)}>
				<IoTrashSharp/> 
			</Button>
		</li>
	);
};