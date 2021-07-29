import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        
        if(error) {
            console.log('getDerivedStateFromError:', error)
            return { hasError: true };
        } else {
            console.log('getDerivedStateFromError No Error:', error)
            return {hasError: false}
        }
        
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidCatch(error, info) {
        // this.setState({hasError: true});
        // reportError(error, info);
        console.error('componentDidCatch: ',error, 'info:::', info)
    }

    render() {
        console.log('render')
        return this.state.hasError ? (<div role="alert">There was a problem</div>) : this.props.children
    }

}

const Bomb =  () => {
    throw new Error('Error');
}

const App = () => {
    return (
    <ErrorBoundary>
        <Bomb />
    </ErrorBoundary>
    )
}

export default App;