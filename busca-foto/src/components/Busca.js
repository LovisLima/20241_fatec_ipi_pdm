import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
  state ={
    termoDeBusca:''
  }
  
  onFormSubmit = (event) => {
    // Evita que o formulário seja submetido
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  onTermoAlterado = (event) => {
    console.log(event.target.value)
    this.setState({termoDeBusca: event.target.value});
  }  
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='grid'>
          <div
            className={`${this.props.classNameInputText}`}>
            <IconField 
              iconPosition='left'>
              <InputIcon 
                className="pi pi-search"/>
              <InputText
                className='w-full h-100' 
                onChange={this.onTermoAlterado}
                placeholder={this.props.dica}
              />
            </IconField>
          </div>
          <div className="col-12 md:col-6">
            <Button 
              label="Buscar"
              className={`${this.props.classNameButton}`}
            />
          </div>
        </div>
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: 'O que deseja buscar?'
}
