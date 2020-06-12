import React from "react";
import styled from "styled-components";
import axios from "axios";

import PlaylistsDetail from "./PlaylistsDetail"

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const UlOrganize = styled.ul`
  list-style-type: none;
`;

const LiOrganize = styled.li`
  padding: 4px;
`;

const CursorSpan = styled.span`
  cursor: pointer;

  :hover {
    color: blue;
    border-bottom: 1px solid blue;
  }
`;

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "renata-karato-mello"
  }
};

class AllPlaylistPage extends React.Component {
  state = {
    namesPlaylists: [],
    quantityPlaylists: "",
    viewTracks: false,
    playlistTracks: [],
    currentPage: "listPlaylists",
    playlistId: "",
    playlistName: ""
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then(response => {
        this.setState({ namesPlaylists: response.data.result.list });
        this.setState({ quantityPlaylists: response.data.result.quantity });
      });
  };

  handlePlaylistNameChange = event => {
    const newNamePlaylistValue = event.target.value;

    this.setState({ playlistName: newNamePlaylistValue})
  }

  handleSearchPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.playlistName}`,
        axiosConfig
      )
      .then(rere => {
        this.setState({ namesPlaylists: rere.data.result.playlist})
      })
      .catch(errr => {
        alert("Erro ao criar playlist")
        console.log(errr)
      })    
  }

  changePage = playlistId => {
    if(this.state.currentPage === "listPlaylists") {
      this.setState({ currentPage: "playlistDetail", playlistId: playlistId })
    } else {
      this.setState({ currentPage: "listPlaylists", playlistId: ""})
    }
  }

  deletePlaylist = () => {
    if (window.confirm("Tem certeza que deseja excluir esta playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}`,
          axiosConfig
        )
        .then(() => {
          this.getAllPlaylists();
          alert("Playlist apagada com sucesso!");
        })
        .catch(err => {
          alert("Playlist não foi excluída!");
          console.log(err);
        });
      }
    };

  getPlaylistTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`,
        axiosConfig
      )
      .then(resp => {
        this.setState({ playlistTracks: resp.data.result.tracks});
      });
  };

  showTracks = () => {
    this.setState({
      viewTracks: !this.state.viewTracks
    });
  };

  render() {
    return (
      <Container>
        {this.state.currentPage === "listPlaylists" ? (
          <div>
              <h3>Procurar Playlist</h3>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.playlistName}
              onChange={this.handlePlaylistNameChange}
              />
              <button onClick={this.handleSearchPlaylist}>Procurar</button>
              <p></p>
              <hr />
            <UlOrganize>
              <p>Você tem {this.state.quantityPlaylists} playlists criadas:</p>
              {this.state.namesPlaylists.length === 0 && <div>Carregando...</div>}
              {this.state.namesPlaylists.map(name => {
                return (
                  <LiOrganize>
                    <CursorSpan onClick={() => this.changePage(name.id)}>{name.name}</CursorSpan>
                    <DeleteButton onClick={() => this.deletePlaylist(name.id)}><strong> X </strong></DeleteButton>
                    <button onClick={() => this.changePage(name.id)}>Adicionar Música</button>
                  </LiOrganize>
                )
              })}
            </UlOrganize>
          </div>
        ) : (
          <PlaylistsDetail playlistId={this.state.playlistId} changePage={this.changePage} />
        )}
      </Container>
    )
  }
}

export default AllPlaylistPage;