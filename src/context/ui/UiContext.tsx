import { createContext } from 'react';

interface UiContextProps  {
    isOpenSidebar: boolean;
    onToggleSidebar: () => void;
    onCloseSidebar: () => void;
    onOpenSidebar: () => void;
}

export const UiContext = createContext( {} as UiContextProps );