import React, { useState } from 'react'

import validate from '../Utilities/validate';
import db from '../Firebase';

import './Register.css';
import { useHistory } from 'react-router';
import CircularIndeterminate from '../Spinner/Spinner';

const Register = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [city, setCity] = useState('');
    const [bloodgrp, setbloodgrp] = useState('');
    const [errors, setError] = useState({});
    const [plasma, setPlasma] = useState('Yes');

    const [submitting, setIsSubmitting] = useState(false);

//    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("heloo");
        setError(validate({name,email,city,phoneno,bloodgrp}));
    //    setIsSubmitting(true);
    //    setSubmitted(true);
    
    console.log(name,email,city,phoneno,bloodgrp);
    
        
              
            try {
                db.collection('Users').add({
                    Name: name,
                    Email: email,
                    Contact_number: phoneno,
                    City: city,
                    Blood_group: bloodgrp,
                    Plasma_donation: plasma
                }).then(event => {
                    console.log(event);
                    setIsSubmitting(false);
                    alert('Thank you for registering');
                    history.push('/');
                }).catch(error1 => {console.log(error1);})
            } catch(error) {
                alert(error.message);
                setIsSubmitting(false);
                console.log(error);
            }
        
    }

    if(submitting) {
        return (
            <div className='spinner'>
                <CircularIndeterminate/>
            </div>
        );
    } else {
        return (
            <div className="register">
            <form className='form' onSubmit={handleSubmit}>
                <h2>Become a Donor today!! Start by filling out the information below.</h2>
                <div className='form__inputs'>
                    <label htmlfor="username" className='form__label form-control'>Name</label>
                    <input
                        id='username'
                        type='text' 
                        className='form__input'
                        name='username'
                        placeholder='Enter your Name'
                        onChange={e => setName(e.target.value)}
                        required={true}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form__inputs'>
                    <label htmlFor="email" className='form__label'>Email</label>
                    <input 
                        id='email'
                        type='email' 
                        className='form__input'
                        name='email'
                        placeholder='Enter your Email'
                        onChange={e => setEmail(e.target.value)}
                        required={true}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form__inputs'>
                    <label htmlFor="phoneno" className='form__label'>Phone number</label>
                    <input 
                        id='phoneno'
                        type='text' 
                        className='form__input'
                        name='phoneno'
                        placeholder='Enter your Phone number'
                        required={true}
                        onChange={e => setPhoneno(e.target.value)}
                    />
                    {errors.phoneno && <p>{errors.phoneno}</p>}
                </div>
                <div className='form__inputs'>
                    <label htmlFor="city" className='form__label'>City</label>
                    <input 
                        id='city'
                        type='text' 
                        className='form__input'
                        name='city'
                        placeholder='Enter your City'
                        required={true}
                        onChange={e => setCity(e.target.value)}
                    />
                    {errors.city && <p>{errors.city}</p>}
                </div>
                <div className='form__inputs'>
                    <label htmlFor="bloodgrp" className='form__label'>Blood group</label>
                    <input 
                        id='bloodgrp'
                        type='text' 
                        className='form__input'
                        name='bloodgroup'
                        placeholder='Enter your Blood group'
                        required={true}
                        onChange={e => setbloodgrp(e.target.value)}
                    />
                    {errors.bloodgrp && <p>{errors.bloodgrp}</p>}
                </div>
                <div className='form__radio'>
                    <label htmlFor="plasma" className='form__label' >Willing to Donate plasma</label>
                    <input 
                        id='plasma'
                        type='radio'
                        value='Yes' 
                        className='form__input__radio'
                        name='plasma'
                        required={true}
                        onChange={e => setPlasma(e.target.value)}
                    />
                    <label>Yes</label>
                    <input 
                        id='plasma'
                        type='radio'
                        value='No' 
                        className='form__input__radio'
                        name='plasma'
                        required={true}
                        onChange={e => setPlasma(e.target.value)}
                    />
                    <label>No</label>
                </div>                    
                <span className="form__text">Kindly refrain from registering with invalid details</span>
                <button className="form__button" type='submit' onClick={handleSubmit}>
                    Register
                </button>
                
            </form>
            <p></p>
        </div>
    )
}
}

export default Register
