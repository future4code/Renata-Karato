import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MatchScreen = props => {
    const [message, setMessage] = useState("")
    const [profile, setProfile] = useState({});
    
    useEffect(() => {
        clearMatches();
      }, []); 

    const clearMatches = () => {
        axios
        .put(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/clear`, {
                id: profile.id
            }
        )
        .then (response => {
            setMessage(response.data.message)
            console.log(response.data.message)
        })
        .catch (error => {
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={clearMatches}>Limpar Matches</button>
        </div>
        
    )
}
  
export default MatchScreen;