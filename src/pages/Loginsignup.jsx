import React, { useState } from 'react';
import './CSS/Loginsignup.css';



    const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
    }

const Loginsignup = () => {

    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
    setSubmitting(false);
    },3000)
    }

    return (
        <div className='login-signup'>
                <div className="login-signup-container" onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <form action="" onSubmit={handleSubmit}>
                        
                        <div className="login-signup-field">
                            
                            <label htmlFor="name">
                                <p>Name</p>
                            <input type="text" name="name" id="name" placeholder='User Name' required/>
                            </label>

                            <label htmlFor="email">
                                <p>Email</p>
                            <input type="email" name="email" id="email"placeholder='email address' required/>
                            </label>

                            <label htmlFor="password">
                                <p>Password</p>
                            <input type="password" name="password" id="password" placeholder='password'required/>
                            </label>
                        </div>
                        <button className='continue-button' >Continue</button>
                        <p className='login-signup-login'>
                            Already have an account? <span>Login here.</span></p>
                        <div className="login-signup-agree">
                            <input type="checkbox" name="" id="" />
                            <p>By continuing, I agree the terms of use and privacy policy. </p>
                        </div>
                        
                        </form>
                </div>
        </div>
    );
}

export default Loginsignup;
