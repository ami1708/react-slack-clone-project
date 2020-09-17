/* this is the concept of context api data can 
//be passed anywhere anytime without using props{ -> }*/
import React, { Component, createContext } from 'react';
//PASS INITIALIZE DATA
const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);
class UserProvider extends Component {
  //state is a way to store your data
  state = initialUserState;
  //it is a lufe cycle , first added in the dom ans then render from dom ,its bascaaly class components
componentDidMount(){
//it will listen to your auth changes 

}


  render() {
    return (
      //UserContext.Provider it is component  value is passed basically available throughout
      //the component
      <UserContext.Provider value={this.state}>
          {this.props.children}
      </UserContext.Provider>
    )    
  }
}

export default UserProvider;

