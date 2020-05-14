import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeFavoritoBranco from '../../img/bookmark_white.svg'
import iconeFavoritoPreto from '../../img/bookmark.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    iconeCurtida: iconeCoracaoBranco,
    comentario: "",
    favoritado:false,
    iconeFavorito: iconeFavoritoBranco
  }

  //quando clica em curtir
   onClickCurtida = () => {
    if (this.state.curtido) {
        this.setState({
        curtido: false,
        iconeCurtida: iconeCoracaoBranco,
        numeroCurtidas: this.state.numeroCurtidas - 1})
    } else {
        this.setState({
        iconeCurtida: iconeCoracaoPreto,
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1})
      }
    }
  
    //quando clica em favoritar
    onClickFavorito = () => {
      if(this.state.favoritado) {
        this.setState({
          favoritado:false,
          iconeFavorito: iconeFavoritoBranco})
      } else {
        this.setState ({
          favoritado: true,
          iconeFavorito: iconeFavoritoPreto})
      }
    }

   //quando alguém está escrevendo um comentário
    onClickComentario = () => {
      this.setState({
        comentando: true,
      })
    }
    
    onChangeComentario = event => {
      const novoComentario = event.target.value;
      this.setState ({comentario: novoComentario});
    };

    //quando alguém posta um comentário e o número muda
    aoEnviarComentario = () => {
      console.log(this.state.comentario)  
      this.setState({
        comentando: false,
        numeroComentarios: this.state.numeroComentarios + 1,
        comentario: ""
      })
    }

  render() {

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = (<div className={'comment-container'}>
			<input
				className='input-comentario'
				placeholder='Comentário'
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.aoEnviarComentario}>Enviar</button>
		  </div>)
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={this.state.iconeCurtida}
          onClickIcone={this.onClickCurtida} //ao clicar no coração, ele fica preto (a pessoa curtiu)
          valorContador={this.state.numeroCurtidas} //e o contador de curtidas muda para +1
        />

        <IconeSemContador
          icone={this.state.iconeFavorito}
          onClickFavorito={this.onClickFavorito}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario} //ao clicar no icone comentário
          valorContador={this.state.numeroComentarios} //contador de comentários muda para =1
        />
      </div>
			{componenteComentario}      
    </div>
  }
}

export default Post