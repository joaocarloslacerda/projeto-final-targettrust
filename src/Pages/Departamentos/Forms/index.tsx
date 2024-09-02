import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';

export const FormDepartamentos = () => {
  return (
    <>
      <div className='col-span-12 pb-4'>
        <h1>Departamentos</h1>
      </div>

      <div className='col-span-12 grid-rows-2 grid grid-cols-12 gap-2' >
        <div className='col-span-6'>
          <FloatLabel>
            <InputText className='w-full' id='name'/>
            <label htmlFor="name">Nome</label>
          </FloatLabel>
        </div>
        <div className='col-span-2'>
          <FloatLabel>
            <InputText className='w-full' id='acronym'/>
            <label htmlFor="acronym">Sigla</label>
          </FloatLabel>
        </div>
        <Button className='row-start-2 col-span-4' icon='pi pi-save' severity='success' label='Salvar'/>
        <Button className='row-start-2 col-span-4' icon='pi pi-times' severity='danger' label='Cancelar'/>
      </div>
    </>
  )
}