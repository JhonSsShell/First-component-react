// Importar las propiedades para utilizarlos en el componente
import { CardHeaderProps } from "../interface/CardHeaderProps";

// Constante donde se creara el componente
const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
    return (
        <div>
            <h3 className='text-xl font-bold'>
                {title}
            </h3>
            <h4 className='italic'>
                {subTitle}
            </h4>
        </div>
    )
}

// Exportar por defecto elencabezado de la card
export default CardHeader;