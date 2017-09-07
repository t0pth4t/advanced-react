import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { answer: 42 };

    asyncFunc = () => {
        return Promise.resolve(32);
    }
    componentDidMount() {
        this.setState({});
    }
    render() {
        return (
            <h2>Hello Class Component -- {this.state.answer} </h2>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);