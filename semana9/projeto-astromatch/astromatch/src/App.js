import React, {useState} from 'react';
import './App.css';

import InitialScreen from './components/InitialScreen';
import MatchScreen from './components/MatchScreen'
import ClearMatches from './components/ClearMatches'

const App = props => {
  const [initialScreen, setInitialScreen] = useState(true);

  const onClickChangeScreen = () => {
    setInitialScreen(!initialScreen);
  };

  const changeScreen = () => {
    if (initialScreen) {
      return (
        <div>
          <InitialScreen changePage={onClickChangeScreen} />
        </div>
      );
    } else {
      return (
        <div>
          <MatchScreen changePage={onClickChangeScreen} />
        </div>
      );
    }
  };

  return (
    <div>
      {changeScreen()}
      <div>
        <ClearMatches />
      </div>
    </div>
  )
};

export default App;