import React, { Component } from 'react';
import { Context } from './Context';

class Provider extends Component{
    state= { 
        name: "Jude Nangoli",
        on: false
    }

    toggle=()=>{
        this.setState({
         on: !this.state.on
        })
    }
    render(){
        return(
            <Context.Provider value={{
                state: this.state,
                actions: {
                    toggle: this.toggle
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export default Provider