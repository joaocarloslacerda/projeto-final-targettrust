import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Message } from 'primereact/message';
import { useState } from 'react';

export const FormDepartamentos = () => {

  const [inputNome, setNome] = useState('');
  const [inputSigla, setSigla] = useState('');

  const handleCkick = () => {
    if(!inputNome){
      alert("nome não preenchido");
      // <Message severity='error' text='nome não preenchido'/>
    }
    if(!inputSigla){
      alert("sigla não preenchida");
      // <Message severity='error' text='sigla não preenchida'/>
    }
  }

  return (
    <>
      <div className='col-span-12 pb-4'>
        <h1>Departamentos</h1>
      </div>

      <div className='col-span-12 grid-rows-2 grid grid-cols-12 gap-2' >
        <div className='col-span-6'>
          <FloatLabel>
            <InputText className='w-full' id='name' value={inputNome} onChange={(e) => setNome(e.target.value)}/>
            <label htmlFor="name">Nome</label>
          </FloatLabel>
        </div>
        <div className='col-span-2'>
          <FloatLabel>
            <InputText className='w-full' id='acronym' value={inputSigla} onChange={(e) => setSigla(e.target.value)}/>
            <label htmlFor="acronym">Sigla</label>
          </FloatLabel>
        </div>
        <Button className='row-start-2 col-span-4' icon='pi pi-save' severity='success' label='Salvar' onClick={handleCkick}/>
        <Button className='row-start-2 col-span-4' icon='pi pi-times' severity='danger' label='Cancelar'/>
      </div>
    </>
  )
}