import { AuthInitialState } from './AuthProvider';

type AuthAction =
| { type: 'accepted' }
| { type: 'denied', payload?: string }
| { type: 'clearerror'  }
| { type: 'loading'  }
| { type: 'checking' };

export const authReducer = ( state: AuthInitialState, action:AuthAction ): AuthInitialState => {

    switch (action.type) {
        case 'accepted':
            return {
                ...state,
                status: 'accepted',
                isLoading: false,
                errorMessage: null,
            };
        case 'denied': 
            return {
                ...state,
                status: 'not-accepted',
                isLoading: false,
                errorMessage: action.payload || '',
            }
        case 'clearerror':
            return {
                ...state,
                errorMessage: null,
            }
        case 'checking': 
            return {
                ...state,
                status: 'checking',
                isLoading: false,
                errorMessage: null,
            }
        case 'loading': 
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }

    return state;
}
