import { Routes, Route } from 'react-router-dom'
import { Home } from '../Page/Home'
import { Departamentos } from '../Page/Departamentos'
import { NotFound } from '../Page/NotFound'

export const AppRoutes = () => {
  return (  
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/departamentos" element={<Departamentos/>}/>
            <Route path="/departamentos/new" element={<h1>Incluir Departamento</h1>}/>
            <Route path="/departamentos/edit/:id" element={<h1>Editar Departamento</h1>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
  )
}
