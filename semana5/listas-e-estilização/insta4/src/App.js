import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components";

import fotoUsuario2 from './img/lucas.jpg';
import fotoPost2 from './img/betta.jpg'
import fotoUsuario3 from './img/renata.jpg'
import fotoPost3 from './img/criancas.jpg';

const InputStyle = styled.input`
width: 250px;
height: 25px;
margin-left: 5px;
`

const PostForm = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border: 1px solid black;
padding: 10px;
margin: 20px;
`

const EntreInputs = styled.div`
padding: 2px;
`

const BotaoPostar = styled.button`
width:70px;
height:35px;
`

class App extends React.Component {
  state = {
    posts : [
      {
        nomeUsuario: "bettalovers",
        fotoUsuario: fotoUsuario2,
        fotoPost: fotoPost2
      },
      {
        nomeUsuario: "re.mitsue",
        fotoUsuario: fotoUsuario3,
        fotoPost: fotoPost3
      },
      {
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

   adicionaPost = () => {
    const novoPost = {
      nomeDeUsuario: this.state.valorInputUsuario,
      fotoDeUsuario: this.state.valorInputFotoUsuario,
      fotoDePost: this.state.valorInputFotoPost
    };

    const novosPosts = [...this.state.posts, novoPost]

    this.setState({
      posts: novosPosts,
      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  };

  onChangeInputUsuario = event => {
    this.setState({valorInputUsuario: event.target.value});
  };

  onChangeInputFotoUsuario = event => {
    this.setState({valorInputFotoUsuario: event.target.value});
  };

  onChangeInputFotoPost = event => {
    this.setState({valorInputFotoPost: event.target.value})
  }
  
  render() {

    const listaDePosts = this.state.posts.map (post => {
      return (
        <Post
        nomeUsuario = {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}
        />
      );
    });

    return (
      <div>
        <PostForm>
          <h3>Crie seu Post Aqui!</h3>
          <EntreInputs>
            <label>Nome de Usuário:</label>
            <InputStyle value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Insira o nome aqui"}
            />
          </EntreInputs>
          <EntreInputs>
           <label>Foto do usuário:</label>
            <InputStyle value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da foto"}
            />
          </EntreInputs>
          <EntreInputs>
            <label>Foto para postar:</label>
            <InputStyle value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"URL da imagem"}
            />
          </EntreInputs>
            <BotaoPostar onClick={this.adicionaPost}>Postar!</BotaoPostar>
        </PostForm>

        <div className={'app-container'}>
        {listaDePosts}
        </div>
      </div>
    );
  }
}

export default App;
