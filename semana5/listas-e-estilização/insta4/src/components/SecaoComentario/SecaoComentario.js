/* import React from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends React.Component {
	state = {
		comentario: ""
	}

	onChangeComentario = event => {
		const novoComentario = event.target.value;
		this.setState ({comentario: novoComentario});
	};


	render() {
		return <div className={'comment-container'}>
			<input
				className='input-comentario'
				placeholder='Comentário'
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
} */