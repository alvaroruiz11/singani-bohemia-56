import { FC, useReducer, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
// import { isOlderAge, sleep } from '../../helpers';
import { AgeEnum } from '../../auth/pages/AuthPage';

export interface AuthInitialState {
    errorMessage:   string | null;
    isLoading:      boolean;
    status:         'accepted' | 'checking' | 'not-accepted';
}

const initialState: AuthInitialState = {
    errorMessage: null,
    isLoading: true,
    status: 'checking',
}


interface Props {
    children: JSX.Element[] | JSX.Element;
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( authReducer, initialState );

    const onToAccess = async ( isOfAge: AgeEnum, isRememberDevice: boolean ) => {
        
        if( isOfAge === AgeEnum.si ){
            dispatch({ type: 'accepted' });
            isRememberDevice
            ? localStorage.setItem('status', 'accepted' )
            : sessionStorage.setItem('status', 'accepted' );
            return;
        }
        dispatch({ type: 'denied', payload: 'Lo sentimos, debes ser mayor de edad para poder acceder' });
        setTimeout(() => {
            dispatch({ type: 'clearerror' });
            
        }, 50);
    }

    const onCheckToAcess = async () => {
        const status = localStorage.getItem('status');
        if( !status ) {
            const statusSession = sessionStorage.getItem('status');
            if( !statusSession ) return dispatch({ type: 'denied' });
            if( statusSession === 'accepted'){
                dispatch({ type: 'accepted'});
                sessionStorage.setItem('status', 'accepted' );
            }else {
                dispatch({ type: 'denied' });
                sessionStorage.removeItem('status');
            }
        }else {
            if( status === 'accepted' ){
                dispatch({ type: 'accepted' });
                localStorage.setItem('status', 'accepted' );
                
            }else {
                dispatch({ type: 'denied' });
                localStorage.removeItem('status');
            }
        }
    }

    useEffect(() => {
      onCheckToAcess();
    }, []);
    

  return (
        <AuthContext.Provider
            value={{
                ...state,

                onToAccess
            }}
        >
            { children }
        </AuthContext.Provider>
  )
}
