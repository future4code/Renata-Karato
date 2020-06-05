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
    createPlaylistPage: true
  };

onClickChangePage = () => {
  this.setState({createPlaylistPage: !this.state.createPlaylistPage});
};
  
render() {
  if(this.state.createPlaylistPage) {
    return (
        <Container>
          <CreatePlaylist changePage={this.onClickChangePage}/>
        </Container>
    );
  } else {
      return (
        <Container>
          <AllPlaylistPage changePage={this.onClickChangePage}/>
        </Container>
      );
    }
  }
}

export default App