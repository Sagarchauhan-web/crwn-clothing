import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createProfileDocument} from '../firebase/firebase.utils'

import './sign-up.style.scss'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName,email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert(" password does not match ");
            return;
        }

        try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        await createProfileDocument(user, {displayName});
 
        this.setState = ({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        } catch(error)
        {
            console.error(error);
        }
    }

    handleChange = (event) => {
        event.preventDefault();

        const {name, value} = event.target;

        this.setState( {[name]:value} );
    }

    render () {
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with email and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    changeHandler={this.handleChange}
                    label='display Name'
                    required
                    />
                    <FormInput
                    name='email'
                    type='email'
                    value={email}
                    changeHandler={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    name='password'
                    type='password'
                    value={password}
                    changeHandler={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    changeHandler={this.handleChange}
                    label='Confirm Password'
                    required
                    />

                    <CustomButton type='submit'> Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;