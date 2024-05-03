import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import { createClient } from 'pexels'
export default class App extends React.Component {

pexelsClient = null

componentDidMount() {
  this.pexelsClient = createClient(env.PEXELS_KEY)
}

state = {pics:[]}

state = {pics: []}
onBuscaRealizada = (termo) => {
this.pexelsClient.photos.search({
query: termo
})
.then(pics => this.setState({pics: pics.photos}))
}

  render() {
    return (
      <div
        className='grid justify-content-center border-round border-1 border-400'>
          <div className="col-12">
          <div className="col-12">
<PexelsLogo/>
</div>
            <h1>Exibir uma lista de...</h1>
          </div>

          <div className="col-12">
              <Busca onBuscaRealizada={this.onBuscaRealizada}
                classNameInputText="col-12 md:col-6"
                classNameButton="col-12 md:col-6"/>
          </div>

          <div className="col-8">
          
          <div className="col-8">
          <ListaImagens pics={this.state.pics}/>
          </div>
))

</div>
      </div>
    )
  }
}


