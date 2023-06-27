import { FC, useReducer, useEffect } from 'react';
import { PermissionContext } from './PermissionContext';
import { permissionReducer } from './permissionReducer';
import { sleep } from '../../helpers';

export interface InitialStatePermission {
    permission: 'accepted' |'checking' |'denied';
    errorMessage?: string;
}

const initialState: InitialStatePermission = {
    permission: 'checking',
    errorMessage: undefined
}

interface Props {
    children:  JSX.Element | JSX.Element[];
}
export const PermissionProvider:FC<Props> = ({ children }) => {

    const [state, dispatch ] = useReducer( permissionReducer, initialState );

    const onAccepted = async ( yearBirth: number, isSaveDevice: boolean ) => {
        dispatch({ type: 'oncheking' });
        await sleep( 1 );
        const age: number = new Date().getFullYear() - yearBirth;
        if( age <= 18 ) {
            dispatch({ type: 'ondenied', payload: 'Lo sentimos, es menor de edad, no podemos darle la bienvenida en nuestro sitio.' })
            return;
        }
        dispatch({ type: 'onaccepted' });
        ( isSaveDevice )
        ? localStorage.setItem('permission', 'accepted' )
        : sessionStorage.setItem('permission', 'accepted' );

    }

    const onChekingPermission = async () => {
        await sleep(0.3);
        const permissionLocal = localStorage.getItem('permission');
        if( permissionLocal ) {
            if( permissionLocal === 'accepted' ) {
                dispatch({ type: 'onaccepted'});
                localStorage.setItem('permission', 'accepted' );
            }else {
                dispatch({ type:'ondenied' });
                localStorage.clear();
            }
        }else {
            const permissionSession = sessionStorage.getItem('permission');
            if( permissionSession === 'accepted' ) {
                dispatch({ type: 'onaccepted'});
                sessionStorage.setItem('permission', 'accepted' );
            }else {
                dispatch({ type:'ondenied' });
                sessionStorage.clear();
            }
        }
    }

    useEffect(() => {
      onChekingPermission();
    }, []);
    
    

  return (
        <PermissionContext.Provider
            value={{
                ...state,

                onAccepted,
                onChekingPermission,
            }}
        >
            { children }
        </PermissionContext.Provider>
  )
}
