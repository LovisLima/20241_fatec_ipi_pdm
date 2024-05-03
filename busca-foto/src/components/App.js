import React from 'react'
import Busca from './Busca'

export default class App extends React.Component {

  onBuscaRealizada = (termo) => {
    console.log(`Busca realizada: ${termo}`)
  }

  render() {
    return (
      <div
        className='grid justify-content-center border-round border-1 border-400'>
          <div className="col-12">
            <h1>Exibir uma lista de...</h1>
          </div>

          <div className="col-12">
              <Busca onBuscaRealizada={this.onBuscaRealizada}
                classNameInputText="col-12 md:col-6"
                classNameButton="col-12 md:col-6"/>
          </div>
      </div>
    )
  }
}


