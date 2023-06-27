import { InitialStatePermission } from './PermissionProvider';


type ActionPermission = 
| { type: 'oncheking' }
| { type: 'onaccepted' }
| { type: 'ondenied', payload?: string }
| { type: 'clearMessage' }

export const permissionReducer = ( state: InitialStatePermission, action: ActionPermission ): InitialStatePermission => {
        
    switch (action.type) {
        case 'oncheking':
            return {
                ...state,
                permission: 'checking',
                errorMessage: undefined
            }
        case 'onaccepted': 
            return {
                ...state,
                permission: 'accepted',
                errorMessage: undefined,
            }
        case 'ondenied': 
            return {
                ...state,
                permission: 'denied',
                errorMessage: action.payload
            }
        case 'clearMessage': 
            return {
                ...state,
                errorMessage: undefined
            }
        default:
            return state;
    }


}


