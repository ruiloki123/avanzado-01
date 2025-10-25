
import './App.css'
import  Carta from './components/Carta';

function App() {
  
  const mostrarCarta = (numero:number, pinta:string) => {
  alert (`Carta ${numero} y de pinta${pinta}`)
  };
  return (
    <>
     <h1>Hola mundo</h1>
     <p>hola xd</p>
     <Carta numero ={2} pinta={'corazones'} mostrarCarta={mostrarCarta}/>
      <Carta numero ={4} pinta={'diamantes'} mostrarCarta={mostrarCarta}/>
     <Carta numero ={7} pinta={'picas'} mostrarCarta={mostrarCarta}/>
     <Carta numero ={9} pinta={'treboles'} mostrarCarta={mostrarCarta}/>
     <Carta numero ={12} pinta={'diamantes'} mostrarCarta={mostrarCarta}/>
    </>
  )
}
export default App