import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn, Slack } from './';
import { UserContext } from '../providers/UserProvider';

const PrivateRoute = ({ component: Component, isLoggedIn, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          // we will pass the path the user is trying to access to our login component
          // instead of passing string we pass object
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function App() {
  //to check the user us logged in or not
  const auth = useContext(UserContext);
  console.log('App -> auth', auth);

  if (auth.loading) {
    return <h1>Loading!</h1>;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignIn} />
        <PrivateRoute
          exact
          path="/"
          component={Slack}
          isLoggedIn={auth.user ? true : false}
        />
        {/* <Route exact path="/slack" component={Slack} /> */}
      </Switch>
    </div>
  );
}

export default App;



// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { SignIn, Slack } from './';
// import {UserContext } from './pr'./provider
// const PrivateRoute = ({ component: Component, isLoggedIn, ...others }) => {
//   return (
//     <Route
//       {...others}
//       render={(props) => {
//         return isLoggedIn ? (
//           <Component {...props} />
//         ) : (
//           // we will pass the path the user is trying to access to our login component
//           // instead of passing string we pass object
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: {
//                 from: props.location,
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// };

// //jx javascript x html
// //app component
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Switch>
//           {/* //if we don't use exact switch will only match nd return only one component */}
//           {/* variable write it on curly bracket */}
//           <Route exact path="/login" component={SignIn} />
//           <Route exact path="/signup" component={SignIn} />
//           <PrivateRoute
//             exact
//             path="/"
//             component={Slack}
//             isLoggedIn={isLoggedIn}
//           />
//           {/* <PrivateRoute exact path="/" component={Slack} /> */}
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;
