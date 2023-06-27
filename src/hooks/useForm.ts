import { useState, type ChangeEvent } from 'react';


export const useForm = <T extends object>( initialState: T ) => {
  
    const [ formValue, setformValue ] = useState( initialState );

    const onInputChange = ({ target } :ChangeEvent<HTMLInputElement>)  => {
        setformValue({
            ...formValue,
            [ target.name ] : target.value
        })
    }


    return {
        ...formValue,

        onInputChange,
    }

}
