import './App.css'
import Dog from './camponents/Dog'
import { Canvas } from '@react-three/fiber'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'


function App() {

  return (
    < >
    <main className=' relative overflow-hidden'>
      <div className="image">
        <img id='tomorowland' src="/tommorowland.png" alt="" />
        <img id='navy-pier' src="/navy-pier.png" alt="" />
        <img id='msi-chicago' src="/msi-chicago.png" alt="" />
        <img id='phone' src="/phone.png" alt="" />
        <img id='kikk' src="/kikk.png" alt="" />
        <img id='kennedy' src="/kennedy.png" alt="" />
        <img id='opera' src="/opera.png" alt="" />
      </div>
      <Canvas id='canvas-elm' style={{
        height:'100vh',
        width:'100vw',
        position:'fixed',
        top:0,
        left:0
      }}>
        <Dog />
      </Canvas>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </main>
    </>
  )
}

export default App
