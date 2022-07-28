import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    render() {
        console.log('render');
        // return <button onClick={() => {
        //     const { amount } = this.state
        //     this.setState({ amount: amount + 1 })
        // }}>
        return <button onClick={() => this.addOne()}>
            click me ({this.state.amount})</button>
    }

    addOne() {
        const { amount } = this.state
        this.setState({ amount: amount + 1 })
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));