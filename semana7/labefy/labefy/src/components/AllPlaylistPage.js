import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  font-family: sans-serif;
  display: grid;
  grid-template-columns: ${props => (props.viewTracks ? "2.5fr 1.5fr" : "4fr")};
`;

const ListOrganize = styled.ul`
  list-style-type: none;
`;

const LiOrganize = styled.li`
  padding: 4px;
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
    playlistTracks: []
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

  deletePlaylist = playlistId => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        axiosConfig
      )
      .then(() => {
        this.getAllPlaylists();
        this.confirmDelete();
      })
      .catch(err => {
        alert("Ocorreu um erro ao apagar playlist");
        console.log(err);
      });
  };

  confirmDelete = () => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      alert("Playlist apagada com sucesso!");
    } else {
      alert("Playlist não foi excluída!");
    }
  };

  getPlaylistTracks = playId => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playId}/tracks`,
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
        <Container viewTracks={this.state.viewTracks}>
            <div>
            <button onClick={this.props.changePage}>Criar Playlist</button>
            <p>Você tem {this.state.quantityPlaylists} playlists criadas:</p>
            <ListOrganize>
                {this.state.namesPlaylists.length === 0 && (
                <div>Carregando playlists...</div>
                )}
                {this.state.namesPlaylists.map(name => {
                    return (
                        <LiOrganize>
                            {name.name}
                        <DeleteButton onClick={() => this.deletePlaylist(name.id)}>
                            <strong> X </strong>
                        </DeleteButton>
                        <button onClick={this.showTracks}>
                            Ver Músicas
                        </button>
                        </LiOrganize>
                    );
                })}
            </ListOrganize>
            </div>
            
            <ListOrganize>
                {this.state.viewTracks && this.state.playlistTracks.length === 0 && (
                <div>Carregando músicas...</div>
                )}
                {this.state.playlistTracks.map(music => {
                    return (
                        <LiOrganize>
                            <h3>Músicas</h3>
                            {music.artist} - {music.name}
                        </LiOrganize>
                    );
                 })}
            </ListOrganize>
        </Container>       
    );
  }
}

export default AllPlaylistPage;