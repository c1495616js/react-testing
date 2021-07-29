import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {test: 'constructor'};
        this.setState({test: '2'}); // no use
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerievedFromProps')
        console.log('props:', props);
        console.log('state:', state);
        return {test: 'getDerievedFromProps'}
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.setState({test: 'componentDidMount'})
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <div>
                Life Cycle: <strong>{this.state?.test}</strong>
                <div>
                    <button onClick={()=> {
                        console.log('click button')
                        this.setState({test: 'setState'})}}
                    >
                        Update State
                    </button>
                </div>
                
            </div>
        )
    }
}
