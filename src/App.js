import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

class App extends React.Component { 
  constructor() {
    super();
    this.state = {
      numeroClics: 0
    };   
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }  

  manejarClic() { 
    //this.setState({ numeroClics: this.state.numeroClics + 1 });
    this.setState(({ numeroClics }) => ({ numeroClics: numeroClics + 1 }));
    console.log('Clic');
  }

  reiniciarContador() {
    this.setState({ numeroClics: 0 });
    console.log('Reiniciar'); 
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
        </div>
        <div className='contenedor-principal'>
          <Contador numeroClics={this.state.numeroClics} />
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />         
        </div>  
      </div>
    );
  }
};

export default App;