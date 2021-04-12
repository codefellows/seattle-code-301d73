import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

class App extends React.Component {
  render(){
    return(
      <>
        <LoginButton />
        <LogoutButton />
        {this.props.auth0.isAuthenticated && 
          <Profile />
        }
      </>
    )
  }

}

export default withAuth0(App);
