import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BoxWrraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  border: 1px solid black;
  background-color: white;
  width: 40%;
  height: 60%;
  display: flex;
  justify-content: center;
  padding: 6px;
`;

const PhotoBox = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;  
`;

const PhotoProfile = styled.img`
  max-width: 80%;
  max-height: 80%;
  display: flex;
  justify-content: center;  
`;

export default function InitialScreen() {
  const [photo, setPhoto] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [bio, setBio] = useState("")
  const [profile, setProfile] = useState({})
  const [match, setMatch] = useState(true)
  
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata/person`)
    .then (response => {
      setPhoto(response.data.profile.photo)
      setName(response.data.profile.name)
      setAge(response.data.profile.age)
      setBio(response.data.profile.bio)
      
      
    })
    .catch (error => {
      console.log(error)
    })
  }

  const choosePerson = (match) => {
    if (match === false) {
        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata/choose-person`)
            .then (resp => {
                setMatch(resp.data.isMatch)
                console.log(resp.data.isMatch)
            })
            getProfile()
        } else if (match === true) {
        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata/choose-person`)
            .then (resp => {
                setMatch(resp.data.isMatch)
                console.log(resp.data.isMatch)
            })
            getProfile()
    }
}
  
  return (profile &&
    <BoxWrraper>
      <CardContainer>
        <div>
          <PhotoBox>
            <PhotoProfile src={photo} alt="Profile"/>
          </PhotoBox>
          <p><strong>{name}</strong>, {age}</p>
          <p>{bio}</p>
        </div>
      </CardContainer>
      <button onClick={() => choosePerson(false)} >Não</button>
      <button onClick={() => choosePerson(true)} value={true}>Sim</button>
    </BoxWrraper>
  )
}