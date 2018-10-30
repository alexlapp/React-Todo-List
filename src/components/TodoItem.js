import React from 'react';
import './TodoItem.css'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false
        }
    }

    handleInputChange = (event) => {
        const value = event.target.checked;
        this.setState({
            finished: value
        });
    }

    render() {
        const finished = this.state.finished;

        let text;
        if (finished) {
            text = <strike>{this.props.value}</strike>;
        } else {
            text = this.props.value;
        }

        return (
            <li key={this.props.keyValue}>
                <div className='TodoItem'>
                    <input type='checkbox' checked={this.state.finished} onClick={this.handleInputChange}></input>
                    {text}
                </div>
            </li>
        );
    }
}

export default TodoItem;