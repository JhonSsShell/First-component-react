// Utilizar useState para la interactividad con react
import { useState } from "react";
// Importar el encabezado de la card
import CardHeader from "./cardHeader/ui/CardHeader";
// Importar el boton de la card
import ButtonCard from "./btnCard/ui/ButtonCard";
// Importar el cuerpo de la card
import CardBody from "./cardBody/ui/CardBody";
// Importar el icono del boton
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 

// Crea la card con todos los componentes que s realizaron
const Card = () => {

    // Contador para agregar interactividad a un parrafo con el contador
    const [contador, setContador] = useState<number>(0)

    // Funcion para el evento del boton
    const handleButton = () => {
        setContador(contador + 1);
    }

    // La funcion Card retorna el componente
    return ( 
        <div className="max-w-96 w-full rounded-xl bg-gray-100 p-4 flex flex-col text-center gap-2 ">
            <p>
                haz hecho clic {contador} veces
            </p>
            <CardHeader title="Nuevo titulo de la card" subTitle="Este es otro subtitulo" />
            <CardBody description="Esta es una nueva descripcion de la card que se hizo como componente" />
            <ButtonCard evento={handleButton} text="Has click aqui" icon={faCoffee} />
        </div>
    )
}

// Exporta por defecto el componente como modulo
export default Card;