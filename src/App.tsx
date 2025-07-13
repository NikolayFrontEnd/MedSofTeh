import { useRef } from 'react';
import Description from './compontets/Description/Description'
import Footer from './compontets/Footer/Footer'
import Header from './compontets/Header/Header'
import Main from './compontets/Main/Main'
function App() {

  const descriptionRef = useRef<HTMLDivElement>(null);

  return (
    <>
   <Header />
    <Main descriptionRef={descriptionRef} />
    <Description ref={descriptionRef}/>
    <Footer/>
    </>
  )
}

export default App
