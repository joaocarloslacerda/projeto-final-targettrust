import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ListagemDepartamentos } from '../Pages/Departamentos/Listagem'
import { NotFound } from '../Pages/NotFound'
import { FormDepartamentos } from '../Pages/Departamentos/Forms'

export const AppRoutes = () => {
  return (  
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/departamentos" element={<ListagemDepartamentos/>}/>
            <Route path="/departamentos/new" element={<FormDepartamentos/>}/>
            <Route path="/departamentos/edit/:id" element={<h1>Editar Departamento</h1>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
  )
}
