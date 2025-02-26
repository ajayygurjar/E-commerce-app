import { useRef,useContext } from 'react';
import classes from './Profile.module.css';

import AuthContext from '../../store/auth-context';


const Profile = () => {
const authCtx= useContext(AuthContext);


const newPasswordInputRef=useRef()

const submitHandler=(event)=>{
  event.preventDefault();

  const enteredNewPassword=newPasswordInputRef.current.value;

  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA9oMqGYDUx0KYIJvCuWZ1p0iGTl0WwazE',{
    method: 'POST',
       body: JSON.stringify({
        idToken: authCtx.token, 
        password: enteredNewPassword, 
        returnSecureToken: false,
      }),
      headers:{
        'Content-Type':'application/json'
      }
  }).then((res)=>{
    //assumption: Always succeeds!
    console.log(res.status)

  })


}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'minLength='7' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default Profile;
