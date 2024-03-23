import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  const [numeros, setNumeros] = useState([]);

  function gerarJogo() {
    const novosNumeros = [];
    while (novosNumeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!novosNumeros.includes(numero)) {
        novosNumeros.push(numero);
      }
    }
    setNumeros(novosNumeros);
  }

  return (
    <Container>
      <h1>Mega Sena</h1>
      <Button variant="primary" onClick={gerarJogo}>
        <FontAwesomeIcon icon={faDice} /> Gerar Jogo
      </Button>
      <Row>
        {numeros.map((numero) => (
          <Col key={numero} md={2}>
            <div className="numero bg-primary text-white">
              {numero}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;