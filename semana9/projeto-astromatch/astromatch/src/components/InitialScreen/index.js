import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UserCardWrapper = styled.div`
	box-shadow: 0 2px 10px 0 rgba(117,117,117,0.77);
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	transition: 0.5s;
	height: 430px;
	animation: ${props => props.animation} 0.5s forwards;
	display: flex;
	align-items: center;
`;

const BlurredBackground = styled.div`
	${({photo}) => {
		if(photo)
		return `
					background-image: url(${photo});
					filter: blur(30px);
					height: 100%;
					width: 100%;
					position: absolute;
				`
	}}
`;

const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`;

const InfoWrapper = styled.div`
	height: 30%;
	position: absolute;
  bottom: 0;
	width: 100%;
	background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 15px;
	z-index: 2;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const UserName = styled.div`
	font-weight: bold;
	font-size: 24px;
`;

const UserAge = styled.div`
  margin-left: 10px;
	font-size: 20px;
`;

const UserDescription = styled.p`
  margin-top: 5px;
`;

const InitialScreen = props => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/person`
      )
      .then(response => {
        setPhoto(response.data.profile.photo);
        setName(response.data.profile.name);
        setAge(response.data.profile.age);
        setBio(response.data.profile.bio);
        setProfile(response.data.profile);
        console.log(response.data.profile);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const choosePerson = (match) => {
    if (match === true) {
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/choose-person`, {
            id: profile.id,
            choice: true
          }
        )
        .then(resp => {
          console.log(resp.data.isMatch);
        });
      getProfileToChoose();
    } else {
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/choose-person`, {
            id: profile.id,
            choice: false
          }
        )
        .then(res => {
          console.log(res.data.isMatch);
        });
      getProfileToChoose();
    }
  };

  return (
    profile && (
      <div>
        <div>
          <button onClick={props.changePage}>Quem Deu Match?</button>
        </div>
        <UserCardWrapper>
          <BlurredBackground photo={photo}/>
          <ProfilePicture src={photo} alt="Profile" />
          <InfoWrapper>
            <TitleWrapper>
              <UserName>{name},</UserName>
              <UserAge>{age}</UserAge>
            </TitleWrapper>
              <UserDescription>{bio}</UserDescription>
          </InfoWrapper>
        </UserCardWrapper>
        <div>
          <button onClick={() => choosePerson(false)}>
            Não
          </button>
          <button onClick={() => choosePerson(true)}>
            Sim
          </button>
        </div>
      </div>
    )
  );
};

export default InitialScreen;
