import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";

import Logo from "./assets/Logo.png"

import InitialScreen from "./components/InitialScreen";
import MatchScreen from "./components/MatchScreen";
import ClearMatches from "./components/ClearMatches";

const MainContainer = styled.div`
  width: 35vw;
  height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: white;
`;

const LogoImg = styled.img`
  width: 200px;
  position: fixed;
  top: 40px;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
    <MainContainer>
      <LogoImg src={Logo} />
      {changeScreen()}
      <div>
        <ClearMatches />
      </div>
    </MainContainer>
  );
};

export default App;