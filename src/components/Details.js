import React from 'react';
import { Context } from './context/Context';




const Details = ({render})=>{
     return(
        <Context.Consumer>
            {(context)=>{
            const { on } =context.state;
            const { toggle } =context.actions;
                return (
                <div>
                   { render({ on, toggle })}
                </div>
                )
            }}
        </Context.Consumer>
    )
}
export default Details;