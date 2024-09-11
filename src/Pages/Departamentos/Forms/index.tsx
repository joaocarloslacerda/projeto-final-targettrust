import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Message } from 'primereact/message';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import insereDepartamento from '../../../Services/Departamentos/insereDepartamento';
import { atualizaDepartamento, getDepartamento } from '../../../Services/Departamentos/editaDepartamento';

export const FormDepartamentos = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [inputNome, setNome] = useState('');
  const [inputSigla, setSigla] = useState('');
  const [temErroNome, setTemNome] = useState(false);
  const [temErroSigla, setTemSigla] = useState(false);
  const [erroAPI, setErroAPI] = useState('');
  const titulo = id ? 'Edição' : 'Cadastro';

  useEffect(() => {
    const buscaDados = async () => {
      if(id){
        const result = await getDepartamento(id);
        setNome(result.data[0].nome);
        setSigla(result.data[0].sigla);
      }
    }
    buscaDados();
  }, [])


  const validaFormulario = () => {
    setTemNome(false);
    setTemSigla(false);

    if(!inputNome){
      setTemNome(true);
      return false;
    }
    if(!inputSigla){
      setTemSigla(true);
      return false;
    }
    return true;
  }

  return (
    <>
      <div className='col-span-12'>
        <div className='flex justify-between items-center my-6'>
          <h1 className='text-2xl font-bold'>{titulo} de Departamentos</h1>
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
          <div className='h-6'>
            <small className='text-red-600' hidden={!temErroNome}>
              Nome inválido
            </small>
          </div>

        </div>
        <div className='col-span-2'>
          <FloatLabel>
            <InputText className='w-full' id='acronym' value={inputSigla} onChange={(e) => setSigla(e.target.value)}/>
            <label htmlFor="acronym">Sigla</label>
          </FloatLabel>
          <div className='h-6'>
            <small className='text-red-600' hidden={!temErroSigla}>
              Sigla inválida
            </small>
          </div>
        </div>
        <Button className='row-start-2 col-span-4' 
                icon='pi pi-save' 
                severity='success' 
                label='Salvar' 
                onClick={ async () => {
                  if (validaFormulario()) {
                    try{
                      if(id){
                        await atualizaDepartamento({
                          id,
                          nome: inputNome,
                          sigla: inputSigla
                        })
                      }else{
                        await insereDepartamento(
                          {
                            nome: inputNome,
                            sigla: inputSigla
                          }
                        )
                      }


                      navigate('/departamentos');
                    }catch(e: any){
                      if(e.responde?.data?.message){
                        setErroAPI(e.responde?.data?.message);
                      }
                    }
                  }
                }}/>
        <Button className='row-start-2 col-span-4' icon='pi pi-times' severity='danger' label='Cancelar'/>
      </div>
      <div className='col-span-12'>
        <Message text={erroAPI} className='w-full' severity='error' hidden={erroAPI !== ''}/>
      </div>
    </>
  )
}