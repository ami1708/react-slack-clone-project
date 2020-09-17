import React, { Component } from 'react';
import { Sidebar, MainContainer } from './';

class Slack extends Component {
  render() {
    const data = [];
    //to add a counter so tht like should get added to user  profile and friend feed as well
    return (
      <div id = "slack">
        {/* giving the data from parent to the children from line 6 using props */}
        
        <Sidebar data = {data}/>
        <MainContainer />
      </div>
    );
  }
}

export default Slack;
