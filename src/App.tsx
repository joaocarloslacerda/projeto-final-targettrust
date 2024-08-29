import './App.css'
import { Button } from 'primereact/button'
import { AppRoutes } from './Routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Menu</h1>
        <div >
          <AppRoutes />
        </div>
      </BrowserRouter>    
    </>
  )
}

export default App
