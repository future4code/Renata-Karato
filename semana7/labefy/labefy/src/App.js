import React from "react";
import "./index.css";
import styled from "styled-components";

import CreatePlaylist from "./components/CreatePlaylist"
import AllPlaylistPage from "./components/AllPlaylistPage"


const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  state = {
    currentPage: "createPlaylist"
  };

changePage = () => {
  if (this.state.currentPage === "createPlaylist") {
    this.setState({ currentPage: "listPlaylists"})
  } else {
    this.setState({ currentPage: "createPlaylist"})
  }
}
  
render() {
  return (
    <Container>
      {this.state.currentPage === "createPlaylist" ? <button onClick={this.changePage}> Ver Todas as Playlists</button> : <button onClick={this.changePage}> Criar Playlist </button>}
      {this.state.currentPage === "createPlaylist" ? <CreatePlaylist /> : <AllPlaylistPage />}
    </Container>
    );
  }
}

export default App