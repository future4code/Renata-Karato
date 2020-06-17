import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function MatchesScreen() {
    const [matches, setMatches] = useState([])

    /* useEffect(() => {
        getMatches();
      }, []); */

    const getMatches = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata/matches`)
        .then (response => {
            setMatches(response.data.matches)
        })
        .catch (error => {
            console.log(error)
        })
      }

  return (
      matches.map((match) => {
          return (
            <div>
                <button onClick={getMatches()}>Ver Matches</button>
                <img src={match.photo} alt="Match"/> <span>{match.name}</span>
            </div>
          )
      })
  )
}