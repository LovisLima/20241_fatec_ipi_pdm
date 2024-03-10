import React from 'react';

const Rodape = ({ minhaEmpresa }) => {
  return (
    <footer className="col-12 mt-5 text-center">
      <p>{minhaEmpresa}</p>
      <div>
        {/* nomes Icones*/}
        <i className="fab fa-facebook mx-2"></i>
        <i className="fab fa-instagram mx-2"></i>
        <i className="fas fa-envelope mx-2"></i>
      </div>
    </footer>
  );
};

export default Rodape;