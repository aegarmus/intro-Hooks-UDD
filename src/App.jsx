import { Contador } from "./components/Contador"
import { ContadorSegundos } from "./components/ContadorSegundos"


export const App = () => {
  return (
    <>
        <header>
          <h1>Hooks En React!</h1>
        </header>

        <section>
          <Contador />
        </section>

        <section>
          <ContadorSegundos />
        </section>
    </>
  )
}