import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Favorite from "@material-ui/icons/Favorite";
import ThumbDownAlt from "@material-ui/icons/ThumbDownAlt";
import Check from "@material-ui/icons/Check"

import MatchIcon from "../MatchIcon.png"

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D90368"
    },
    secondary: {
      main: "#00CC66"
    }
  }
});

const MainContainer = styled.div`
  width: 35vw;
  height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MatchButton = styled.img`
  width: 80px;
  cursor: pointer;
  padding-top: 20px;
  padding-left: 20px;

  :hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 0;
  padding-top: 15px;
  padding-left: 85px;
`;

const ProfileContainer = styled.div`
  width: 30vw;
  height: 60vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MatchWrapper = styled.div`
  width: 100%;
`;

const MatchPolaroid = styled.div`
  display: inline-block;
  filter: grayscale(100%);
  content: "";
  position: absolute;
  z-index: 0;
  transform: rotate(0deg);
  height: 90%;
  width: 90%;
  bottom: 22%;
  right: 5%;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  transition: all 0.35s;

  :nth-of-type(4n + 1) {
    transform: scale(0.8, 0.8) rotate(5deg);
    transition: all 0.35s;
  }

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.35s;
  }

  :hover {
    filter: none;
    transform: scale(1, 1) rotate(0deg);
    transition: all 0.35s;
  }
`;

const PolaroidBox = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);

  :before {
    transform: rotate(-6deg);
    height: 20%;
    width: 47%;
    bottom: 30px;
    left: 12px;
    box-shadow: 0 2.1rem 2rem rgba(0, 0, 0, 0.4);
  }
`;

const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const UserName = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  font-weight: bold;
  font-size: 24px;
`;

const UserAge = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

const UserDescription = styled.p`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 16px;
`;

const BoxDislike= styled.div`
  position: absolute;
  bottom: 2vh;
  left: 10vw;
  border: 5px solid #00CC66;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }
`;  

const BoxLike= styled.div`
  position: absolute;
  bottom: 2vh;
  right: 10vw;
  border: 5px solid #D90368;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }
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
        setProfile(response.data.profile)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const choosePerson = match => {
    if (match === true) {
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/choose-person`,
          {
            id: profile.id,
            choice: true
          }
        )
        .then(resp => {
          console.log(resp.data);
        });
      getProfileToChoose();
    } else {
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/choose-person`,
          {
            id: profile.id,
            choice: false
          }
        )
        .then(res => {
          console.log(res.data);
        });
      getProfileToChoose();
    }
  };

  return (
    profile && (
      <MuiThemeProvider theme={theme}>
        <MainContainer>
          <MatchButton src={MatchIcon} onClick={props.changePage} />
          <CheckIcon>
            <Check />
          </CheckIcon>
          <ProfileContainer>
            <MatchWrapper>
              <MatchPolaroid>
                <PolaroidBox>
                  <ProfilePicture src={photo} alt="Profile" />
                  <TitleWrapper>
                    <UserName>{name},</UserName>
                    <UserAge>{age}</UserAge>
                  </TitleWrapper>
                  <UserDescription>{bio}</UserDescription>
                </PolaroidBox>
              </MatchPolaroid>
            </MatchWrapper>
          </ProfileContainer>
          <BoxDislike>
            <ThumbDownAlt
              color="secondary"
              cursor="pointer"
              onClick={() => choosePerson(false)}
              style={{ fontSize: 50 }}
            />
          </BoxDislike>
          <BoxLike>
            <Favorite
              color="primary"
              cursor="pointer"
              onClick={() => choosePerson(true)}
              style={{ fontSize: 50 }}
            />
          </BoxLike>
        </MainContainer>
      </MuiThemeProvider>
    )
  );
};

export default InitialScreen;