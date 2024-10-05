import { useState } from 'react'

export const Contador = () => {

    const [ contador, setContador ] = useState(0)
    const [ color, setColor ] = useState('#af45af')

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    const resetContador = () => {
         setContador(0)
    }

    const cambiarColor = (event) => {
        setColor(event.target.value)
    }


    return(
        <>
            {/* <div className={`bg-${color} contendor-contador`}> */}
            <div style={{backgroundColor: color}} className='contenedor-contador'>
                {/* <select name="color" id="color" value={color} onChange={cambiarColor}>
                    <option value="white">Blanco</option>
                    <option value="red">Rojo</option>
                    <option value="green">Verde</option>
                    <option value="blue">Azul</option>
                </select> */}

                <input 
                    type="color" 
                    name="input-color" 
                    id="input-color" 
                    value={color}
                    onChange={cambiarColor}    
                />
                <h2>Contador: {contador}</h2>
                <button onClick={() => incrementar()}>Incrementar</button>
                <button onClick={() => resetContador()}>Resetear</button>
                <button onClick={() => decrementar()}>Decrementar</button>
            </div>
        </>
    )
}