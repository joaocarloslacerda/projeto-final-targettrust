import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import listaDepartamentos from '../../../Services/Departamentos/listaDepartamentos';
import excluiDepartamento from '../../../Services/Departamentos/excluiDepartamento';
import { Message } from 'primereact/message';

export const ListagemDepartamentos = () => {

  const [departamentos, setDepartamentos] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    if(!departamentos){
      listaDepartamentos({ setDepartamentos, setLoading });
    }
  }, [departamentos]);

  const bodyAcao = (departamento) => {
    return (
      <>
        <Button className='mr-2' icon='pi pi-pencil'/>
        <Button icon='pi pi-trash' 
                severity='danger'
                rounded
                loading={loadingDelete}
                onClick={async () => {
                  setLoadingDelete(true);
                  try{
                    await excluiDepartamento(departamento.id_departamento);
                    navigate(0);
                  }catch(e: any){
                    if(e.responde?.data?.message){
                      const mensagem = `[ ${departamento.nome} ] ${e.response?.data?.message}`
                      setErro(mensagem)                    
                    }
                    setLoadingDelete(false);
                  }
                }}
        />
      </>
    );
  }

  const navigate = useNavigate();

  const handleCkick = () => {
    navigate("/departamentos/new");
  }


  return (
    <>
      <div className='flex col-span-12 justify-between'>
      <h1 className='text-2xl font-bold'>Listagem de Departamentos</h1>

        <Button icon='pi pi-plus' severity='success' label='Incluir' onClick={handleCkick}/>
      </div>

      <div className="col-span-12">
        <DataTable value={departamentos} loading={loading}>
          <Column field='sigla' header='Sigla'/>
          <Column field='nome' header='Nome'/>
          <Column header='Ação' body={bodyAcao}/>
        </DataTable>
      </div>
    </>
  )
};