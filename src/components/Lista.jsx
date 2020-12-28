import React, { Component } from 'react'

export default class Lista extends Component {

    handleClick = id => e=> {
        const {handleClick} = this.props
        handleClick(id)
    }
    render () {

        const {data} = this.props

        return(
           <ul>
               {data.map(element =>
                <li key={element.id}> {element.name}({element.username}) 
                    <button onClick={this.handleClick(element.id)}>Editar</button> 
                </li> 
                )}
           </ul>
        )
    }
}