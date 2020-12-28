import React, { Component } from 'react'
import axios from 'axios'
import ViewList from './components/ViewList'
import UserForm from './components/UserForm'
import './App.css';

class App extends Component {
  state = {
    data:[],
    ruta:'lista',
    usuarioSeleccionado:''
  }

  constructor(){
    super()
    axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => this.setState({data}) )
  }

  seleccionaUsuario = id =>{
    this.setState({
      ruta:'form',
      usuarioSeleccionado:id
    })
  }

  nuevoUsuario = ()=> {
    this.setState({
      ruta:'form'
    })
  }

  agregarNuevoUsuario = usuario => {
    axios.post('https://jsonplaceholder.typicode.com/users',usuario)
    .then( ({data}) => {
      const newData = this.state.data.concat(data)
      this.setState({
        data:newData,
        ruta:'lista'
      })
    })
  }

  actualizarNuevoUsuario = (id,values) =>{
    console.log(id)
    console.log(values)
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,values)
    .then( ()=> {
      const newdata = this.state.data.map(element => element.id === id ? values : element)
      this.setState({
        data:newdata,
        ruta:'lista'
      })
    })
  }

  render () {
    const { ruta,data,usuarioSeleccionado } = this.state
    const valoresIniciales = usuarioSeleccionado && data.find(element => element.id === usuarioSeleccionado)
    return(
      <div className="App">
        { ruta==='lista' && <ViewList data={data} 
                                      handleClick={this.seleccionaUsuario}
                                      nuevoUsuario={this.nuevoUsuario}
                            />
                              }
        { ruta==='form' && <UserForm id={usuarioSeleccionado}
                                     handleSubmit={this.agregarNuevoUsuario}
                                     valoresIniciales={valoresIniciales || {}}
                                     handleUpdate={this.actualizarNuevoUsuario}
                            />}
      </div>
    );
  }
}

export default App;
