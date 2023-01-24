import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from "react";

function App() {  
  
  const [numeroClics, setNumeroClics] = useState(0);
  
  const manejarClic = () => { 
    setNumeroClics(numeroClics + 1);
    console.log('Clic');
  };

  const reiniciarContador = () => {
    setNumeroClics(0)
    console.log('Reiniciar'); 
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClics= {numeroClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />        
      </div> 
    </div>
  );
}

export default App;