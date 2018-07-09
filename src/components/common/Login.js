import React, { Component } from 'react';



const styles ={ 
    form: {
        position: "relative",
        maxWidth: "300px",
        padding: "19px 29px 29px",
        margin: "0 auto 20px",
        backgroundColor: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "5px"
        
             
      },

      input: {
        fontSize: "14px",
        height: "auto",
        marginBottom: "10px",
        padding: "5px 5px"
      },

    buttonStyle: {
    backgroundColor: "#C70039",
    margin: "auto",
    border: "none",
    color: "white",
    padding: "7px 31px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "14px",
    borderRadius: "5px", //
    outline: "none"  //Remove the blue outline on the button in chrome
  }

}



class LoginForm extends Component{
    render(){
        return(
            <div>
               <div style={styles.form}>
                   <label htmlFor="email"></label>
                   <input style={styles.input}
                    type="text"
                    id="email" 
                    placeholder="@example.com"/>
                   <br/>
                   <label htmlFor="password"></label>
                   <input style={styles.input}
                   type="password" 
                   id="password"
                   placeholder="password"/>
                   <br/>
                   <button type='button' style={styles.buttonStyle}>Login</button>
               </div>
            </div>
        )
    }
}


export default LoginForm;
