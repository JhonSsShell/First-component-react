// Crear la interfaz o por decir asi, las propiedades que va a tenre ese componente
export interface ButtonProps {
    text: string;
    evento: () => void;
    icon?: any;
}