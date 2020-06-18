import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const List = styled.ul`
  padding: 0 10px;
`;

const ListItem = styled.li`
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  list-style: none;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    background: #eee;
  }
  
  :last-child {
    border: unset;
  }
  
  :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.1);
    		content: "";
			}
   }
`;

const Avatar = styled.div`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const ListText = styled.p`
  user-select: none;
`;

const MatchScreen = props => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches();
      }, []); 

    const getMatches = () => {
        axios
        .get(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/matches`
        )
        .then (response => {
            setMatches(response.data.matches)
            console.log(response.data.matches)
        })
        .catch (error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div>
                <button onClick={props.changePage}>Quero Dar Mais Matches</button>
            </div>
            <List>
                {matches && matches.map(match => {
                    return (
                        <ListItem key={match.name}>
                            <Avatar src={match.photo} />
                            <ListText>{match.name}</ListText>
                        </ListItem>
                    )
                })}
            </List>
        </div>
        
    )
}
  
export default MatchScreen;