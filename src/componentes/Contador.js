import React from 'react';
import '../hojas-de-estilo/Contador.css'

class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        { this.props.numeroClics }
      </div>
    );
  };
}

export default Contador;