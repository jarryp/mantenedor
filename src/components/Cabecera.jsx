import React, { Component } from 'react'

const style = {
    inline:{
        display:'inline',
    }
}

export default class Cabecera extends Component {
    render () {

        const {nuevoUsuario} = this.props

        return(
            <header>
                <h2 style={style.inline}>Usuarios</h2>
                <button  style={style.inline}
                         onClick={nuevoUsuario} >Nuevo Usuario</button>
            </header>
        )
    }
}