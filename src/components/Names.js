import React from 'react';
import { Context } from './context/Context';



const NamesList = ()=>{
    return(
        <Context.Consumer>
            {(context)=>{
                return(
                        <p>{context.state.name}</p>
                      )
                      }
                   }
        </Context.Consumer>
    )
}

export default NamesList;