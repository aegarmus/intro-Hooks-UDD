import { useState } from 'react'

export const Contador = () => {

    const [ contador, setContador ] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    const resetContador = () => {
         setContador(0)
    }


    return(
        <>
            <h2>Contador: {contador}</h2>
            <button onClick={() => incrementar()}>Incrementar</button>
            <button onClick={() => resetContador()}>Resetear</button>
            <button onClick={() => decrementar()}>Decrementar</button>
        </>
    )
}