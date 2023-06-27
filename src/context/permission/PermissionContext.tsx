import { createContext } from 'react';

type PermissionContextProp = {
    permission: 'accepted' | 'checking' | 'denied';
    errorMessage?: string;

    onAccepted: (yearBirth: number, isSaveDevice: boolean) => Promise<void>;
    onChekingPermission: () => Promise<void>;
}

export const PermissionContext = createContext( {} as PermissionContextProp );