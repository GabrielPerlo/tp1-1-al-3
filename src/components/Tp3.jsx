import { useState } from 'react';
import React from 'react';
 
const Tp3 = () => {

    let [cambio, setCambio] = useState('Hola mi amigo');

    const cambiarNombre = ()=>{
      setCambio(cambio + '(formulario cambió de estado)!')
    }

    return (
        <div>
            <h1>{cambio}</h1>
            <button onClick={cambiarNombre}>click</button>
        </div>
    );
};

export default Tp3;