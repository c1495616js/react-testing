import React from 'react';
import {reportError} from '../../api'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
        // reportError(error, info);
    }

    render() {
        return this.state.hasError ? (<div role="alert">There was a problem</div>) : this.props.children
    }


}

export {ErrorBoundary}