import { createContext } from 'react';
import { AgeEnum } from '../../auth/pages/AuthPage';

interface AuthContextProps {
    errorMessage:   string | null;
    isLoading:      boolean;
    status:         'accepted' | 'checking' | 'not-accepted';

    onToAccess: ( isOfAge: AgeEnum, isRememberDevice: boolean ) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);