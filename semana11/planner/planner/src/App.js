import React from 'react';
import './App.css';
import styled from "styled-components";

import PlannerPage from "./components/PlannerPage"

const MainContainer = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <MainContainer>
      <PlannerPage />
    </MainContainer>
  );
}

export default App;
