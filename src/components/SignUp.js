/*import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import classes from './SignUp.module.css';

const Signup = (props) => {
  const navigate = useNavigate();

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSignup(enteredName, enteredEmail, enteredPassword);

    // Redirect to home page after successful signup
    navigate('/');
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    validateForm();
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    validateForm();
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    setFormIsValid(
      enteredName.trim().length > 0 &&
        enteredEmail.includes('@') &&
        enteredPassword.trim().length > 6
    );
  };

  return (
    <div className={classes.signupContainer}>
      <Card className={classes.signup}>
        <form onSubmit={submitHandler}>
          <div className={`${classes.control}`}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} />
          </div>
          <div className={`${classes.control}`}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} />
          </div>
          <div className={`${classes.control}`}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
              Signup
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Signup;*/

import '../App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState({ id: "",name:"",pnumber : "",password: ""});
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then((response) => { setUser(response.data) })
      .catch((error) => { console.log(error) })
  }, []);

  const handleAddSubmit = (event) => {
    event.preventDefault();
      axios.post("http://localhost:4000/users", users)
        .then((response) => {
          setUser([...user, response.data])
          navigate("/");
          //setSuccesMsg("New Bookings has been added with the book id " + response.data.id)
        })
        .catch((error) => {
          setErrorMsg(error);
        })
  }

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value })
  }

  return (
    <div className="signup" bg="dark">
      <br/>
      <h1>Sign Up</h1><br/>
      <div className="form">
        <form onSubmit={handleAddSubmit}>
        <input name="name" type="text" value={users.name} onChange={handleChange} placeholder="Enter the Name:" />
        <input name="pnumber" type="text" value={users.pnumber} onChange={handleChange} placeholder="Enter the Number:" />
        <input name="password" type="password" value={users.password} onChange={handleChange} placeholder="Enter the Password:"/>
        {/* <input type="button" className="btn" value="Sign Up" /> */}
       <button name="Submit" value="Submit" className="btn">Sign Up </button><br/>
        <br/><p>
          Already register?<Link style={{color:"#00ff00", textDecoration: "none"}} to="/login">Login</Link> 
        </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;



