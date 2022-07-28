import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    }
    constructor(props) {
        super(props);

        console.log("constructor", props);
    }

    render() {
        console.log('render');

        return <h1>{this.state.counter}</h1>
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.id = setInterval(() => {
            const { counter } = this.state;
            this.setState({ counter: counter + 1 })
        }, 5000);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        console.log(this.state);
        if (this.state.counter === 5) this.componentWillUnmount();
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.id);
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));