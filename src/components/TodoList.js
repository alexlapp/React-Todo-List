import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends React.Component {
    render() {
        const tasks = this.props.tasks;
        const listItems = tasks.map((task, index) =>
            <TodoItem keyValue={index} value={task} />
        );
        return (
            <ul className='TodoList'>{listItems}</ul>
        );
    }
}

export default TodoList;