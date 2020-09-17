import React, { Component } from 'react';
import { Sidebar, MainContainer } from './';

class Slack extends Component {
  render() {
    //to add a counter so tht like should get added to user  profile and friend feed as well
    return (
      <div>
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

export default Slack;
