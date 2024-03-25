import React from 'react'
export class EstacaoClimatica extends React.Component {
render ( ){
return (
<div className="card">
{/* o corpo do cartão */}
<div className="card-body">
{/* centraliza verticalmente, margem abaixo */}
<div className="d-flex align-items-center border rounded mb-2" style={{ height: '6rem' }}>
{/* ícone obtido do estado do componente */}
<i className={`fas fa-5x ${this.state.icone}`}></i>
{/* largura 75%, margem no à esquerda (start), fs aumenta a fonte */}
<p className=" w-75 ms-3 text-center fs-1">{this.state.estacao}</p>
</div>
<div>
<p className="text-center">
{/* renderização condicional */}
{
this.state.latitude ?
`Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
:
this.state.mensagemDeErro ?
`${this.state.mensagemDeErro}`
:
'Clique no botão para saber a sua estação climática'
}
</p>
</div>
{/* botão azul (outline, 100% de largura e margem acima) */}
<button onClick={this.obterLocalizacao} className="btn btn-outline-primary w-100 mt-
2">Qual a minha estação?</button>
</div>
</div>
)
}
}