import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Message } from 'primereact/message';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const FormDepartamentos = () => {

  const navigate = useNavigate();

  const [inputNome, setNome] = useState('');
  const [inputSigla, setSigla] = useState('');
  const [temErroNome, setTemNome] = useState(false);
  const [temErroSigla, setTemSigla] = useState(false);


  const handleCkick = () => {
    if(!inputNome){
      setTemNome(true);
    }
    if(!inputSigla){
      setTemSigla(true);
    }
  }

  return (
    <>
      <div className='col-span-12'>
        <div className='flex justify-between items-center my-6'>
          <h1 className='text-2xl font-bold'>Cadastro de Departamentos</h1>
            <Button
              icon='pi pi-chevron-left'
              label='Voltar'
              severity='info'
              rounded
              onClick={() => {
                navigate('/departamentos');
              }}
            />
        </div>
          
      </div>

      <div className='col-span-12 grid-rows-2 grid grid-cols-12 gap-2' >
        <div className='col-span-6'>
          <FloatLabel>
            <InputText className='w-full' id='name' value={inputNome} onChange={(e) => setNome(e.target.value)}/>
            <label htmlFor="name">Nome</label>
          </FloatLabel>
          <small className='text-red-600' hidden={!temErroNome}>
            Nome inválido
          </small>
        </div>
        <div className='col-span-2'>
          <FloatLabel>
            <InputText className='w-full' id='acronym' value={inputSigla} onChange={(e) => setSigla(e.target.value)}/>
            <label htmlFor="acronym">Sigla</label>
          </FloatLabel>
          <small className='text-red-600' hidden={!temErroSigla}>
            Sigla inválida
          </small>
        </div>
        <Button className='row-start-2 col-span-4' icon='pi pi-save' severity='success' label='Salvar' onClick={handleCkick}/>
        <Button className='row-start-2 col-span-4' icon='pi pi-times' severity='danger' label='Cancelar'/>
      </div>
    </>
  )
}