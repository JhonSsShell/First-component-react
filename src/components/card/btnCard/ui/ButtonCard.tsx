// Importar font awesome, para poder utilizar los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importar la interfaz del boton para poder agregarle las propiedades
import { ButtonProps } from '../interface/ButtonProps';

// Constante para exportar el boton con los props
const ButtonCard = ({ text, evento, icon }: ButtonProps) => {
    return(
        <div className='w-full flex justify-center items-center'>
            <button onClick={evento} className="p-4 w-36 bg-blue-100 rounded-xl font-bold text-blue-950 flex items-center justify-evenly gap-2 hover:bg-blue-200">
                <span className='text-xs'>
                    {icon && <FontAwesomeIcon icon={icon} />}
                </span>
                <span className='text-xs'>{text}</span>
            </button>
        </div>
    )
}

// Exportar por defecto el boton de la card
export default ButtonCard;