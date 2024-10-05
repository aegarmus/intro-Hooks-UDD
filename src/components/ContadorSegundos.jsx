import { useState, useEffect, useRef } from "react"

export const ContadorSegundos = () => {
    const [segundos, setSegundos] = useState(0)
    const [pausado, setPausado] = useState(false)

    const refTiempo = useRef(null)
    const refTiempoPausado = useRef(0)
    const refInicio = useRef(new Date()) //Hora en la que se monta el componente


    useEffect(() => {
        if(!pausado) {
            const contarTiempo = () => {
                const tiempoActual = new Date()
                const diferencia = Math.floor((tiempoActual - refInicio.current) / 1000)
                setSegundos(diferencia)
            }
            
            refTiempo.current = setTimeout(contarTiempo, 1000);

            if (refTiempoPausado.current > 0) {
                refInicio.current = new Date() - refTiempoPausado.current * 1000;
                refTiempoPausado.current = 0;
            }
    
            contarTiempo()
        }

    }, [segundos, pausado])

    const pausarTiempo = (segundosPausa) => {
        pausar()
        setTimeout(() => {
            refInicio.current = new Date() - segundos * 1000
            reanudar()
        }, segundosPausa * 1000)
    }

    const pausar = () => {
        setPausado(true)
        clearTimeout(refTiempo.current)
        refTiempoPausado.current = segundos

    }

    const reanudar = () => {
        setPausado(false)
    }

    return (
        <>
            <h2>Contando Segundos: {segundos}</h2>
            <button onClick={() => pausarTiempo(5)}>Detener 5 segundos</button>
            {
                pausado ? (
                    <button onClick={() => reanudar()}>Reanudar</button>
                ) : (
                    <button onClick={() => pausar()}>Detener</button>
                )
            }
        </>
    )
} 