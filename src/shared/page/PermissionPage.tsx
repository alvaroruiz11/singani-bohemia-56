import { type FormEvent, useState, useContext, useEffect, ChangeEvent } from 'react';
import Swal from 'sweetalert2';

import { PermissionContext } from '../../context';
import { getYears } from '../../helpers';

const years = getYears( 1956 );


export const PermissionPage = () => {

    const { onAccepted, errorMessage } = useContext( PermissionContext );

    const [ selectYearBirth, setselectYearBirth] = useState<string>('1956');

    const [isSaveDevice, setisSaveDevice] = useState<boolean>(false);

    const onChangeSelect = ( { target }: ChangeEvent<HTMLSelectElement >) => {
      setselectYearBirth( target.value );
    }

    useEffect(() => {
        if( !errorMessage ) return;
        Swal.fire({
          title: errorMessage,
          icon: 'error',
          color: 'white',
          background: '#0d120e'

        })
    }, [ errorMessage ]);
    

    const onCheckChange = () => {
        setisSaveDevice( !isSaveDevice );
    }

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        onAccepted( +selectYearBirth, isSaveDevice );
    }

    

  return (
      <div className="bg-permission w-screen h-screen flex justify-center items-center">
          {/* Container permission */}
          <div className="px-8 py-6 rounded-sm shadow bg-white">
              <div className="py-8">
                {/* logo */}
                <img src="/assets/logo-black.png" alt="Singani Bohemia 56" className="h-12 w-auto block mx-auto"/>
              </div>
              <div className="text-center uppercase mb-10">
                <h2 className="font-bwmitga-bold">Indique su fecha de nacimiento</h2>
                <small className="uppercase text-xs text-gray-400">Debemos de comprobar si eres mayor de 18 años</small>
              </div>
              <div>
                  <form
                    onSubmit={ onSubmit }
                  >
                      <select 
                        name="yearBirth" 
                        className='w-full text-center border border-gray-300 py-3 rounded-sm focus:outline-none mb-4'
                        onChange={ onChangeSelect }
                      >
                        {
                          years.map( year => (
                            <option value={ year } key={ year }>{ year }</option>
                          ))
                        }
                      </select>
                      <div className="flex py-3 items-center">
                        <input 
                          type="checkbox" 
                          id="check" 
                          className="w-4 h-4 rounde"
                          onChange={ onCheckChange }
                          checked={ isSaveDevice }
                        />
                        <label htmlFor="check" className="uppercase ml-2 font-medium text-xs text-gray-400 select-none">
                          Recordarme en este dispositivo
                        </label>
                      </div>
                      
                      <button className="font-bwmitga-bold uppercase mt-5 text-xs bg-slate-950 text-white w-full py-4 rounded ease-in duration-300 hover:tracking-widest">
                        Ingresar
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}
