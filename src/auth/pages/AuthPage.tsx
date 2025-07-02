import { useState, useContext } from 'react';
import Swal from 'sweetalert2';

import { AuthContext } from '../../context';

export enum AgeEnum {
  si = 'si',
  no = 'no',
}

export const AuthPage = () => {

  const { onToAccess } = useContext( AuthContext );
  const [isRememberDevice, setIsRememberDevice] = useState<boolean>(false);
  
  const handleIsOfAge = ( ofAge: AgeEnum | undefined ) => {
    
    if( !ofAge ) return;
    if( ofAge === AgeEnum.no ){
      Swal.fire('Lo sentimos, debes ser mayor de edad para poder acceder', '', 'error');
    }
    onToAccess( ofAge, isRememberDevice );
  };
  
  return (
    <>
    <div className="gap-10 flex justify-center mt-8">
        <button 
          className="border-2 text-xl py-2 px-10 text-white rounded-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:text-black"
          onClick={ () => handleIsOfAge(AgeEnum.si)}
        >
          SÍ
        </button>
        <button 
          className="border-2 text-xl py-2 px-10 text-white rounded-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:text-black"
          onClick={ () => handleIsOfAge(AgeEnum.no)}
        >
          NO
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <label>
          <input 
            type="checkbox" 
            checked={ isRememberDevice }
            onChange={ () => setIsRememberDevice(!isRememberDevice) }
          />
          <span  className="ml-2 text-gray-100 font-medium text-lg">Recordar mis datos</span>
        </label>
      </div>
    </>
  )
}
