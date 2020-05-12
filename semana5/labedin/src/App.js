import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardHabilidades from './components/CardHabilidades/CardHabilidades'
import ImagemProfile from './imgs/profile-renata.jpg'
import ImagemExperiencia1 from './imgs/missemota.jpg'
import ImagemExperiencia2 from './imgs/GAE.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem = {ImagemProfile}
          nome="Renata Mitsue Karato" 
          descricao="Oi, eu sou a Renata. Muito prazer! Sou uma arquiteta se redescobrindo na área de TI. Por ser oriental, tenho um lado racional bastante acentuado. Ao mesmo tempo, tenho a empatia como minha característica principal. Meu objetivo é mesclar a razão e a emoção dentro da tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {ImagemExperiencia1}
          nome="Missemota Arq'Design" 
          descricao="Desenvolvimento e detalhamento de projetos arquitetônicos, acompanhamento de obras, compatibilização e coordenação de projetos complementares, integração de arquitetura com comunicação visual, design gráfico e visual merchandising, padronização de atividades internas da empresa." 
        />
        
        <CardGrande 
          imagem= {ImagemExperiencia2}
          nome="Gushiken Architectural Engeneering (Okinawa, Japão)" 
          descricao="Oportunidade de vivência em um escritório de arquitetura do Japão, adquirindo conhecimentos e aprendendo sobre técnicas e métodos construtivos locais. Oportunidade de troca de experiências comn alunos universitários da Ryukyus University" 
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png"
          nome="Labenu_" 
          descricao="2020 | Curso desenvolvimento web full stack (cursando)." 
        />

        <CardGrande 
          imagem="https://i2.wp.com/macofren.com/wp-content/uploads/2019/01/FGV-Funda%C3%A7%C3%A3o-Get%C3%BAlio-Vargas1.jpg?fit=302%2C301&ssl=1"
          nome="Fundação Getúlio Vargas" 
          descricao="2014-2015 | Pós-graduação em Administração de Empresas." 
        />

        <CardGrande 
          imagem="data:image/png;base64,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"
          nome="Universidade Presbiteriana Mackenzie" 
          descricao="2007-2012 | Graduação em Arquitetura e Urbanismo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Skills</h2>
        <CardHabilidades />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
        imagem="https://image.flaticon.com/icons/svg/684/684828.svg" 
        nome="E-mail"
        descricao="rmkarato@gmail.com"
        />

        <CardPequeno
        imagem="https://image.flaticon.com/icons/svg/254/254638.svg" 
        nome="Celular"
        descricao="11 9 8765-4321"
        />

        <CardPequeno
        imagem="https://image.flaticon.com/icons/svg/1295/1295181.svg" 
        nome="Endereço"
        descricao="Rua dos Bobos, 0 - São Caetano do Sul/SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
