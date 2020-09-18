import React, { Component, createContext } from 'react';
import { auth } from '../components/firebase';
import { createOrGetUserProfileDocument } from '../components/firebase';

const initialUserState = { user: null, loading: true };
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
  state = initialUserState;

  componentDidMount = async () => {
    /* Will be fired whenever user goes from loggedin to log out state or vice versa */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);

        // Attach listener to listen to user changes in firestore
        userRef.onSnapshot((snapshot) => {
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
      }
      this.setState({ user: userAuth, loading: false });
    });
  };

  render() {
    const { user, loading } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ user, loading }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;


// //we are storing the data in this file

// import { auth, createOrGetUserProfileDocument } from '../components/firebase';
// /* this is the concept of context api data can 
// //be passed anywhere anytime without using props{ -> }*/
// import React, { Component, createContext } from 'react';
// //PASS INITIALIZE DATA
// const initialUserState = { user: null, loading: false };
// export const UserContext = createContext(initialUserState);
// class UserProvider extends Component {
//   //state is a way to store your data
//   state = initialUserState;
//   //it is a life cycle , first added in the dom and then render from dom ,its basically class components
//   async componentDidMount() {
//     //it will listen to your auth changes
//     //log and log out  changed state authentication in boolean
//     //will be fired whenever u go from logged in or logged out state or vive versa
//     auth.onAuthStateChanged(async (userAuth) => {
//       //this call back is called
//       console.log('UserProvider -> componentDidMount -> userAuth ',userAuth);

//       if (userAuth) {
//         //pass the details
//         //check if it exists or not once it is signed in
//         const userRef = await createOrGetUserProfileDocument(userAuth);
//         console.log('userRef', userRef);
//         // Attach listener to listen to user changes in firestore
//         userRef.onSnapshot((snapshot) => {
//           this.setState({
//             user: { uid: snapshot.id, ...snapshot.data() },
//             loading: false,
//           });
//         });
//       }
//       this.setState({ user: userAuth, loading: false });
//     });
//   }

//   render() {
//     return (
//       //UserContext.Provider it is component  value is passed basically available throughout
//       //the component
//       <UserContext.Provider value={this.state}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }

// export default UserProvider;
