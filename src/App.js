import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { MainWrapper } from './components/UI';
import Main from './components/Main';
import Provider from './components/context/Provider';
import Header from './components/UI/Header';




class App extends Component{
    render(){
        return(
              <MainWrapper>
                
                <Provider>
                   <Switch>
                     <Route exact path = "/" component={Main}/>
                   </Switch>
                </Provider>
            </MainWrapper>
            )
    }
};

export default App;