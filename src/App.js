import React from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    addTask = (value) => {
        const tasks = this.state.tasks;
        this.setState({
            tasks: tasks.concat(value)
        });
    }

    render() {
        return (
            <div>
                <AddTask addTask={this.addTask} />
                <TodoList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;