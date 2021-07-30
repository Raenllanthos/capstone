import React from 'react';
import Joi from "joi-browser"
import Form from './form';

class SigninForm extends Form {
    state = {
        data: { username: "", password: ""},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    doSubmit = () => {
        // Call the server and redirect
        console.log("Submitted")
    }
    
    render() { 
        return ( 
        <div>
            <h1>Sign In Form</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("Username", "username")}
                {this.renderInput("Password", "password", "password")}
                {this.renderButton("Sign In")}
            </form>
        </div>);
    }
}
 
export default SigninForm;