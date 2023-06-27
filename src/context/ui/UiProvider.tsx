import { FC, useState } from 'react';
import { UiContext } from './UiContext';


interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UiProvider: FC<Props> = ({ children }) => {

  const [ isOpenSidebar, setIsOpenSidebar ] = useState<boolean>(false);

  const onToggleSidebar = () => setIsOpenSidebar( !isOpenSidebar );


  return (
    <UiContext.Provider
        value={{
          
          isOpenSidebar,

          // Methods
          onToggleSidebar,

        }}
    >
        { children }
    </UiContext.Provider>
  )
}
