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

    // Contador para agregar interactividad
    let numero = 0;

    // Funcion para un evento para el boton
    const handleButton = () => {
        numero++;
        console.log(`Cantidad ${numero}`);
    }

    return ( 
        <div className="max-w-96 w-full rounded-xl bg-gray-100 p-4 flex flex-col text-center gap-2 ">
            <CardHeader title="Nuevo titulo de la card" subTitle="Este es otro subtitulo" />
            <CardBody description="Esta es una nueva descripcion de la card que se hizo como componente" />
            <ButtonCard evento={handleButton} text="Has click aqui" icon={faCoffee} />
        </div>
    )
}

export default Card;