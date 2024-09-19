// Importar las propiedades de la imagen
import { ImagenProps } from "../interface/ImageProps";

// Constante del componente que tendra el src y el alt
const ImageCard = ({ src, alt }: ImagenProps) => {
    return (
        <img src={src} alt={alt} className="w-full max-h-36 object-cover"/>
    )
}

// Exportar por defecto el componente de la imagenm
export default ImageCard;