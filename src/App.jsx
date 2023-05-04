
import './App.css'
import Phrase from './components/Phrase'
import phrases from './data/phrases.json'
import { useState } from 'react'
import fondo1 from './assets/fortuna-2/fondo1.png'
import fondo2 from './assets/fortuna-2/fondo2.png'
import fondo3 from './assets/fortuna-2/fondo3.png'
import fondo4 from './assets/fortuna-2/fondo4.png'
function App() {
  const fondos = [fondo1, fondo2, fondo3, fondo4]

  const [ index, setIndex] = useState (0)

    const random = (limit) => {
     return Math.floor( Math.random() * limit)
      
    }
  const changePhrase = () => {
      setIndex(random(phrases.length -1 ))
      document.body.style.backgroundImage = `url(${fondos[random(fondos.length -1)]})`
  //   if (index <phrases.length - 1 ) {
  //     setIndex ( index + 1 )
  //   } else{ setIndex(0);}
   }
   document.body.style.backgroundImage = `url(${fondos[random(fondos.length -1)]})`
  return (
    <>
    <h2 className= "user-cook"> GALLETAS DE LA FORTUNA</h2>

     <Phrase
     data = { phrases [index]}
     />
     <div className='botonn'><button onClick={ () => changePhrase() } >CHANGE</button></div>
    </>
  )
}

export default App
