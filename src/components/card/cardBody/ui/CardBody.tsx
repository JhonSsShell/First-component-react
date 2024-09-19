// Importar las propiedades de la card body
import { CardBodyProps } from "../interface/CardBodyProps";
// Importar la imagen con ruta relativa
import ExampleImage from "../../../../assets/ImageExample.jpg";
// Importar el componente de la imagen
import ImageCard from "./ImageCard";

// Constante para realizar el componente
const CardBody =  ({ description }: CardBodyProps) => {
    return ( 
        <div className="flex flex-col gap-2">
            {description}
            <div className="w-full">
                <ImageCard src={ExampleImage} alt="#"/>
            </div>
        </div>
    )
}

// Exportar por defecto el cuerpo de la card
export default CardBody;