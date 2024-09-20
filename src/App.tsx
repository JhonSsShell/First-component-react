import React, { useState } from 'react'; // Importar react para renderizar y exportarlos al App principal
import Card from './components/card/Card'; // Importar el componente card que se realizo
import ButtonCard from './components/card/btnCard/ui/ButtonCard';
import Peticion from './components/peticiones/ui/Peticion';
import { AuthProvider, UserProfile } from './components/useContext/ui/Auth';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Crear una funcion que retorna el componente de la card
const App: React.FC = () => {

  const [userId, setUserId] = useState<number>(1);

  return (
    <div className='flex justify-center items-center w-screen h-screen'> 
      {/* Renderizacion de la card */}
      {/* <Card /> */}
      <div className='p-4 flex flex-col gap-4 rounded-xl bg-sky-950'>

        {/* // Peticiones al fecth */}
        {/* <h1 className='text-xl font-bold text-white'>
          Peticiones a Json placeholder con react and typescript
        </h1>
        <ButtonCard text='Siguiente usuario' evento={() => setUserId(userId + 1)} icon={faArrowRight} />
        <ButtonCard text='Anterior Usuario' evento={() => setUserId(userId - 1)} icon={faArrowLeft} />
        <Peticion id={userId} name='' email='' /> */}

          <AuthProvider>
            <UserProfile />
          </AuthProvider>
      </div>
    </div>
  )
};

// Exportar por defecto el componente
export default App;
