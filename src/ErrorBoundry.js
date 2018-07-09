import React, { Component } from 'react';

class ErrorBoundry extends Component{
    state = { hasError: false }

    componentDidCatch(error, info){
        console.log("Oh nooo", error.message)
        this.setState({
            hasError: true
        })
    }
    render(){

        return this.state.hasError ? (<h1>Doom!!</h1>):
              ( this.props.children )
    }
};

export default ErrorBoundry;