import React from 'react';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleSubmit = (event) => {
        const value = this.state.value;

        this.props.addTask(value);
        this.setState({
            value: ''
        });
        event.preventDefault();
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ value: value });
    }

    render() {
        const value = this.state.value;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Task...' value={value} onChange={this.handleInputChange} />
                <input type='submit' value='Add Task' />
            </form>
        );
    }
}

export default AddTask;