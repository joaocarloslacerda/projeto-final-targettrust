import { Routes, Route } from 'react-router-dom'
import { Home } from '../Page/Home'
import { Departamentos } from '../Page/Departamentos'
import { NotFound } from '../Page/NotFound'

export const AppRoutes = () => {
  return (  
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/departamentos" element={<Departamentos/>}/>
            <Route path="/departamentos/new" element={<Departamentos/>}/>
            <Route path="/departamentos/edit/:id" element={<Departamentos/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
  )
}
