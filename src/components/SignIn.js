// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { signInWithGoogle, signOut } from './firebase';
// //getting the functionality to the buttons from the firebase
// // import {signInwithGoogle} from '../firebase';

// class SignIn extends Component {
//   // state = {
//   //   counter: 1,
//   // };
//   render() {
//     //to add a counter so tht like should get added to user  profile and friend feed as well
//     return (
//       <div className="sign-in-form">
//         <h2 id="head"> SIGN IN/ SIGN-UP</h2>
//         <button className="btn basic-btn" onClick= {signInWithGoogle}>
//           <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" alt ="pic"/>
//           Sign in with Google
//         </button>
//         <div style={{ textAlign: 'center', fontSize: 13 }}>OR</div>
//         <button className="btn basic-btn" onClick= {signInWithGoogle}>
//           <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" alt = "pic" />
//           Sign up with Google
//         </button>

//         <br></br>
//         <button onClick = {signOut}>SignOut</button>
//       </div>
//     );
//   }
// }

// export default SignIn;
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import { signInWithGoogle } from '../components/firebase';

function SignIn(props) {
  const auth = useContext(UserContext);
  // const { from } = props.location.state || {
  //   from: { pathname: '/home' },
  // };

  // Redirect the user if not logged in
  if (auth.user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin-form">
      <h1>Sign In/ Sign Up</h1>
      <button className="btn basic-btn" onClick={signInWithGoogle}>
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
        Sign in with Google
      </button>
      <div style={{ textAlign: 'center', fontSize: 13 }}>OR</div>
      <button className="btn basic-btn" onClick={signInWithGoogle}>
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
        Sign up with Google
      </button>
    </div>
  );
}

export default SignIn;
