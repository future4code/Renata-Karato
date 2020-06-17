import React from 'react';
import './App.css';

import InitialScreen from './components/InitialScreen';
import MatchesScreen from './components/MatchesScreen'

export default function App() {
   return (
     <div>
      <InitialScreen />
      <MatchesScreen />
     </div>
  )
}