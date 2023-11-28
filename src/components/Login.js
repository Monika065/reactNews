// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import { Card } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import classes from './login.module.css';

// const Login = (props) => {
//   const navigate = useNavigate();

//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [formIsValid, setFormIsValid] = useState(false);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);

//     // Redirect to home page after successful login
//     navigate('/');
//   };

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//     validateForm();
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);
//     validateForm();
//   };

//   const validateForm = () => {
//     setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
//   };

//   return (
//     <div className={classes.loginContainer}>
//       <Card className={classes.login}>
//         <form onSubmit={submitHandler}>
//           <div className={`${classes.control}`}>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={enteredEmail}
//               onChange={emailChangeHandler}
//             />
//           </div>
//           <div className={`${classes.control}`}>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={enteredPassword}
//               onChange={passwordChangeHandler}
//             />
//           </div>
//           <div className={classes.actions}>
//             <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//               Login
//             </Button>
//           </div>
//           <p>
//             Don't have an account?{' '}
//             <Link to="/signup" className={classes.signupLink}>
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default Login;

import '../App.css';
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState({ id: "",pnumber : "",password: ""});
  const [errorMsg, setErrorMsg] = useState("");
const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then((response) => { setUser(response.data) })
      .catch((error) => { console.log(error) })
  }, [])

  function login(event){
    event.preventDefault();

    var pnumber=users.pnumber;
    //console.log(id);

    var password = users.password;
    //console.log(password);

    let emp = user.find(
      function (el) {
        
        return (String(el.pnumber) === pnumber && String(el.password)===password);
        
      }
    )
    console.log("True or False",emp!=null);
    console.log("Emp",emp);
    if(emp!=null){
      sessionStorage.setItem("cAuthenticated",true);
      props.onLogin(pnumber, password)
    //   window.location.href = "/";  
    navigate("/")
    }
    else{
      setErrorMsg("Invalid Credentials");
    }
    //console.log(emp);
  }


  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value })
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="form">
        <form onSubmit={login}>
        <input name="pnumber" type="text" value={users.pnumber} onChange={handleChange} placeholder="Enter the Phone Number:" />
        <input name="password" type="password" value={users.password} onChange={handleChange} placeholder="Enter the Password:"/>
        {/* <input type="button" className="btn" value="Sign Up" />*/ }
       <button type="submit" value="Submit"  className="btn">Sign Up </button>
       <br/> <p>
          Not register? <Link style={{color:"#00ff00", textDecoration: "none"}} to="/signup">Register</Link> 
        </p>
        {(errorMsg) ? <p style={{color:"red"}}>{errorMsg}</p> : null}
        </form>
      </div>
    </div>
  );
};
export default Login;