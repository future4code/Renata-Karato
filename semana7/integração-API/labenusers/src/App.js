import React from 'react';
import './index.css';

import RegisterUserPage from './components/RegisterUserPage'
import UserListPage from './components/UserListPage'


class App extends React.Component {
  state = {
    goToPageX: true,
  }

  onClickGoToPageX = () => {
    this.setState({goToPageX: !this.state.goToPageX})
  }
 

  render () {
    if (this.state.goToPageX) {
      return (
        <div>
          <RegisterUserPage goToUserListPage={this.onClickGoToPageX}/>
        </div>
      );
    } else {
      return (
        <div>
          <UserListPage goToRegisterUserPage={this.onClickGoToPageX}/>
        </div>
      )
    }
  }
}

export default App
