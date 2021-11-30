import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      path: '/'
    }
  }

  render() {
    if (!this.state.show) return null;
    return (
      <div>
        
      </div>
    );
  }
}

export default Profile;
