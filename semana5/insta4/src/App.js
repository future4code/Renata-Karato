import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import fotoUsuario2 from './img/lucas.jpg';
import fotoPost2 from './img/betta.jpg'
import fotoUsuario3 from './img/renata.jpg'
import fotoPost3 from './img/criancas.jpg';

class App extends React.Component {
  render() {
    return (
      <div>
       
        <div className={'app-container'}>
          <Post
            nomeUsuario={'bettalovers'}
            fotoUsuario={fotoUsuario2}
            fotoPost={fotoPost2}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'re.mitsue'}
            fotoUsuario={fotoUsuario3}
            fotoPost={fotoPost3}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>

      </div>
    );
  }
}

export default App;
