import { useState, useRef,useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';


const API_Key='AIzaSyA9oMqGYDUx0KYIJvCuWZ1p0iGTl0WwazE';
const SignUp_Url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
const SignIn_url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`

const AuthForm = () => {

  const navigate=useNavigate()
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx=useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional validation
    setIsLoading(true);
    let url;

    if (isLogin) {
      url = `${SignIn_url}${API_Key}`
    } else {
      url = `${SignUp_Url}${API_Key}`
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword, 
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json' 
      }
    }).then(res => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then(() => {
          let errorMessage = 'Authentication Failed!';
          // if(data && data.error &&data.error.message){
          // errorMessage=data.error.message; }
          alert(errorMessage);
          throw new Error(errorMessage);
        });
      }
    }).then((data) => {
      authCtx.login(data.idToken,data.email)
      navigate('/store',{replace:true})
    })
    .catch((err) => {
      alert(err.message);
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
