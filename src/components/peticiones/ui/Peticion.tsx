// Importar useEffect y useState para el manejo de la interactividad
import { useEffect, useState } from "react";
// Importar las propiedades del usuario
import { UsuarioProps } from "../interface/UsuarioProps";

// Componente que realiza la peticion a la API y trae los datos
const Peticion = ({ id }: UsuarioProps) => {
    // Se define el usuario que sea de tipo usuario o nulo (Si no existen datos de ese usuario)
    const [usuario, setUsuario] = useState<UsuarioProps | null >(null);

    // Se define un estado para el manejo de la carga y un error
    const [cargando, setCargando] = useState<boolean>(false);

    // Se define un estado para el manejo del error
    const [error, setError] = useState<string | null>(null);

    // Se utiliza useEffect para realizar la peticion cuando el id cambia y se limpia el componente cuando se desmonta
    useEffect(() => {
        // Funcion asincrona para hacer la peticion y realiza la carga de la API
        const getPeticion = async (id: number) => {
            setCargando(true); // Se indica que los datos esta en proceso de carga
            setError(null); //  Se resetea el error, en caso de que haya uno

            // Manejo de errores
            try {
                // Peticion a la API de jsonplaceholder
                const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

                // Si la respuesta no es exitosa, retornara el error
                if (!request.ok) {
                    throw new Error(`Error al obtener los datos --- ${request.status}`);
                }

                // Si la respuesta es exitosa, se obtiene los datos del usuario y se los establece en el estado
                const response: UsuarioProps = await request.json();
                setUsuario(response);
                
            } 
            
            catch (error) {
                // En caso de que haya un error, se atrapa
                setError((error as Error).message);
            } 
            
            finally {
                // Al finalizar la accion se indica que ha terminado la peticion
                setCargando(false);
            }
        }

        // Se llama a la funcion que obtiene los datos del usuario
        getPeticion(id);

        // Se retorna la funcion que limpia el estado cuando el componente se desmonta  (Siempre se ejecuta al desmontar)
        return () => {
            console.log("Limpiando el componente...");
            setUsuario(null); // Se resetea el usuario cuando el id cambia o se desmonta
        }
    }, [id]); // Dependencias del efecto, solo se ejecuta cuando cambia el ID

    // Manejo de los diferentes estados
    if (cargando) return <p className="text-green-500 text-xs font-bold">Cargando usuario ...</p>
    if (error) return <p className="text-red-600 text-xs font-bold">Error --- {error}</p>
    if (!usuario) return <p className="text-red-600 text-xs font-bold">Usuario no encontrado</p>

    // Retorna el componente con los datos del usuario encontrado
    return ( 
        <div className="text-center bg-gray-200 p-4 rounded-xl">
            <h2 className="font-bold text-lg">Detalles del usuario</h2>
            <p className="text-xs italic"><b>Id del usuario --- {usuario.id}</b></p>
            <p className="text-xs italic"><b>Nombre del usuario --- {usuario.name}</b></p>
            <p className="text-xs italic"><b>Email del usuario --- {usuario.email}</b></p>
        </div>
    )
}

// Exportar por defecto el componente
export default Peticion;