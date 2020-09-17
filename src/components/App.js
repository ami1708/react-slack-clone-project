import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn ,Slack} from './';


function Home() {
  return <div>Home</div>;
}
function Some() {
  return <div>Some</div>;
}

//jx javascript x html
//app component
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* //if we dont use exact switch will only match nd return only one component */}
          {/* variable write it on curly bracket */}
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
