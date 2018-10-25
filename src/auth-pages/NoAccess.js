import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div>
        <p>
          Sorry, you do not have access to this page.
        </p>
        <a href={'/'}>Go Back</a>
      </div>
    )
  }
}

export default NotFound;