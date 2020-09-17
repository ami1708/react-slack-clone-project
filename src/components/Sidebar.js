import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
   
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div className="avatar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg" alt = "pic" />
          </div>
          <div>AMISHA</div>

          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2150/2150480.svg"
            height="25" alt = "pic"
          />
        </div>
        <hr className="sidebar-spacer" />

        <div className="channels">
          <div className="header">Channels</div>

          <ul className="channels-list">
            <li>#assignment</li>
            <li>#test</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
