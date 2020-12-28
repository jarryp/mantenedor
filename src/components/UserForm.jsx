import React, { Component } from 'react'

const validate = values => {

    const errors = {}
    if(!values.name){
        errors.name = 'Name is a fill required'
    }
    if(!values.email){
        errors.email = 'Email is a fill required'
    }

    return errors
}

export default class UserForm extends Component {

    state={
        errors:{}
    }

    constructor(props){
        super(props)
        this.setState({
            ...this.state, 
            ...this.valoresIniciales 
        })
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]:target.value
        })
    }

    handleSubmit = e => {

        e.preventDefault()
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)

        if(!Object.keys(result).length){

            const { handleSubmit , handleUpdate, valoresIniciales } = this.props            
            if(valoresIniciales.id){
                handleUpdate(valoresIniciales.id,sinErrors)
            }else{
                handleSubmit(sinErrors)
            }
            
        }else{
            this.setState({ errors:result })
        }
    }

    render () {

        const {errors} = this.state
        const {valoresIniciales} = this.props

        return(
            <form onSubmit={this.handleSubmit}>
                <input defaultValue={valoresIniciales.name} name="name"    onChange={this.handleChange} placeholder="Name" />
                {errors.name && <p>{errors.name}</p>}

                <input defaultValue={valoresIniciales.email} name="email"   onChange={this.handleChange} placeholder="Email" />
                {errors.email && <p>{errors.email}</p>}

                <input defaultValue={valoresIniciales.website} name="website" onChange={this.handleChange} placeholder="WebSite" />
                <input type="submit" value="Guadar" />
            </form>
        )
    }
}