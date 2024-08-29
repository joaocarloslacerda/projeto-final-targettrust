import './App.css'
import { Button } from 'primereact/button'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <div >
          <AppRoutes />
        </div>
      </BrowserRouter>    
    </>
  )
}

export default App
