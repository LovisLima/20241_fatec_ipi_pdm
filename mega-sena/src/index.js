import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeros: []
    };
  }

  gerarNumeros = () => {
    let n = [];
    while (n.length < 6) {
      let numero = Math.floor(Math.random() * 60) + 1;
      if (!n.includes(numero)) {
        n.push(numero);
      }
    }
    this.setState({ numeros: n });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-sm-3 col-md-8">
            <div className="card p-3">
              <div className="card-header">
                <p>Mega sena</p>
              </div>
              <div className="card-body">
                {this.state.numeros.length > 0 ? (
                  <div className="d-flex justify-content-center">
                    {this.state.numeros.map((numero, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex justify-content-center align"
                          style={{ width: 40, height: 40, margin: 5 }}
                        >
                          {numero}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <button
                    className="btn btn-outline-primary w-100 mt-2"
                    onClick={() => this.gerarNumeros()}
                  >
                    Vamos fazer jogo?
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));