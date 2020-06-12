import React from "react";
import styled from "styled-components";
import axios from "axios";

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

const CursorA = styled.a`
  cursor: pointer;

  :hover {
    color: blue;
    border-bottom: 1px solid blue;
  }

  :link {
    text-decoration: none;
    color: black;
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

class PlaylistDetails extends React.Component {
  state = {
    musicName: "",
    musicArtist: "", 
    musicUrl: "",
    quantityMusics: "",
    musicTracks: [],
  };

  componentDidMount() {
      this.getTrackDetail();
  }

  getTrackDetail = () => {
      axios
      .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
          axiosConfig
      )
      .then(response => {
          this.setState({ musicTracks: response.data.result.tracks})
          this.setState({ quantityMusics: response.data.result.quantity})
      })
      .catch(error => {
          console.log(error)
      })
  }

  handleMusicNameChange = event => {
      const newMusicName = event.target.value;

      this.setState({ musicName: newMusicName})
  }

  handleMusicArtistChange = event => {
      const newArtistName = event.target.value;

      this.setState({ musicArtist: newArtistName})
  }

  handleMusicUrlChange = event => {
      const newUrlName = event.target.value;

      this.setState({ musicUrl: newUrlName})
  }

  addTrackToPlaylist = () => {
      const body = {
          name: this.state.musicName,
          artist: this.state.musicArtist, 
          url: this.state.musicUrl
      }

      axios
        .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
            body,
            axiosConfig
        )
        .then(() => {
            this.setState({ musicName: "", musicArtist: "", musicUrl: ""})
            this.getTrackDetail();
            alert(`Música ${this.state.musicName} adicionada com sucesso`)
        })
        .catch(error => {
            alert("Erro ao adicionar música");
            console.log(error)
        })
  }

  removeTrackFromPlaylist = trackId => {
    if (window.confirm("Tem certeza que deseja excluir esta música?")) {
        axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`,
            axiosConfig
            )
            .then(() => {
                this.getTrackDetail();
                alert("Música apagada com sucesso!");
            })
            .catch(err => {
            alert("Esta música não foi apagada!");
            console.log(err);
            });
        }
    };

  render() {
    return (
      <Container>
        <div>
            <p>Você tem {this.state.quantityMusics} músicas nesta playlist.</p>
            <UlOrganize>
                {this.state.musicTracks.map(data => {
                    return (
                        <LiOrganize>
                            {data.name} - {data.artist} - <CursorA href={data.url} target="_blank">Ouvir Música</CursorA>
                            <DeleteButton onClick={() => this.removeTrackFromPlaylist(data.id)}><strong> X </strong></DeleteButton>
                        </LiOrganize>
                    )
                })}
            </UlOrganize>
            <button onClick={this.props.changePage}>Voltar Para Playlists</button>
        </div>
        <hr />
        <div>
            <h3>Adicionar Música </h3>
            <input
                placeholder="Nome da música"
                type="text"
                value={this.state.musicName}
                onChange={this.handleMusicNameChange}
            />
            <input
                placeholder="Artista"
                type="text"
                value={this.state.musicArtist}
                onChange={this.handleMusicArtistChange}
            />
            <input
                placeholder="Url da música"
                type="url"
                value={this.state.musicUrl}
                onChange={this.handleMusicUrlChange}
            />
            <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
        </div>

      </Container>
    )
  }
}

export default PlaylistDetails;