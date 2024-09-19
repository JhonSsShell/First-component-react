import React from 'react'; // Importar react para renderizar y exportarlos al App principal
import Card from './components/card/Card'; // Importar el componente card que se realizo

// Crear una funcion que retorna el componente de la card
const App: React.FC = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'> 
      <Card />
    </div>
  )
};

// Exportar por defecto el componente
export default App;
