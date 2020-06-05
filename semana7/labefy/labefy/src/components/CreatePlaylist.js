import React from "react";
import styled from "styled-components";
import axios from "axios"

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const axiosConfig = {
  headers: {
    Authorization: "renata-karato-mello"
  }
};

class CreatePlaylist extends React.Component {
 state = {
   playlistName: "",
 };

 createOnePlaylist = () => {
  
   const body = {
     name: this.state.playlistName
   };

   axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      axiosConfig
    )
    .then((answ) => {
      alert(`Playlist ${this.state.playlistName} criada com sucesso!`);
      this.setState({name: ""}); 
    })
    .catch(error => {
      alert("Ocorreu um erro ao criar a playlist.");
      console.log(error)
    })
 }

 handlePlaylistChange = event => {
   const newPlaylistValue = event.target.value;

   this.setState({playlistName:newPlaylistValue});
 };

 onClickShowTracks = () => {
   
 }
 
  render() {
    return (
      <Container>
        <div>
          <button onClick={this.props.changePage}>Ver Todas as Playlists</button>
        </div>
        <div>
            <h3>Criar Playlist:</h3>
            <label>Nome da Playlist:</label>
            <input
                value={this.state.playlistName}
                onChange={this.handlePlaylistChange}
            />
            <button onClick={this.createOnePlaylist}>Criar Playlist</button>
        </div>
      </Container>
    )
  }
}

export default CreatePlaylist