import { createContext } from 'react';

interface UiContextProps  {
    isOpenSidebar: boolean;
    onToggleSidebar: () => void;
}

export const UiContext = createContext( {} as UiContextProps );