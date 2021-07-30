import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
    state = { 
        data: { email: "", password: "", username: ""},
        errors: {}
    };

    schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(5).label("Password"),
        username: Joi.string().required().label("Username")
    }

    doSubmit = () => {
        // Call the server
        console.log("Submitted")
    }

    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("Email","email")}
                    {this.renderInput("Password","password","password")}
                    {this.renderInput("Username","username")}
                    {this.renderButton("Register")}
                </form>
            </div>
         );
    }
}
 
export default RegisterForm;