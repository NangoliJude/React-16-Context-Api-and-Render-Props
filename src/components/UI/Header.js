import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const styles = {
    headerStyle:{
        width: "100%",
        height: "70px",
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1,
        display: "flex",
        backgroundColor: "dodgerblue",
    },
    logoStyle:{
        marginTop: "-2px",
        marginLeft:"5rm"
    },
    notificationStyle:{
        color: "white",
        float: "right",
        lineHeight: "1px",
        marginTop: "20px",
        marginLeft: "auto",
        marginRight: "2em",
    }

}

class Header extends Component{
    render(){
        const { headerStyle, logoStyle, notificationStyle } = styles;
        return(
            <header style={headerStyle}>
            <NavLink to="/" exact activeClassName="active">
                pic
            </NavLink>
            <NavLink to="/mainpage" style={notificationStyle}  activeClassName="active">
              <i className="fa fa-bell" aria-hidden="true"/>
            </NavLink>
            </header>
        )
    }
};

export default Header;