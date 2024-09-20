import { createContext, useContext, useState } from 'react';
import { AuthContextProps } from '../interface/AuthContextProps';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import AuthProviderProps from '../interface/AuthProviderProps';
import ButtonCard from '../../card/btnCard/ui/ButtonCard';

// Definimos el contexto
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Proveedor del contexto
const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para acceder al contexto
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Componente que consume el contexto
const UserProfile = () => {
    const { isAuthenticated, login, logout } = useAuth();
    return (
        <div>
            {isAuthenticated ? (
                <div className='text-center w-full flex flex-col gap-2'>
                    <p className='text-white font-bold'>Estás autenticado.</p>
                    <ButtonCard evento={logout} text='Cerrar sesion' icon={faLockOpen}/>
                </div>
            ) : (
                <div className='text-center w-full flex flex-col gap-2'>
                    <p className='text-white font-bold'>No estás autenticado.</p>
                    <ButtonCard evento={login} text='Iniciar sesion' icon={faLock} />
                </div>
            )}
        </div>
    );
};

// Exportamos el proveedor
export { AuthProvider, UserProfile };
