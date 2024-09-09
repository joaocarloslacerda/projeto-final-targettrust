import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import listaDepartamentos from '../../../Services/Departamentos/listaDepartamentos';

export const ListagemDepartamentos = () => {

  const [departamentos, setDepartamentos] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!departamentos){
      listaDepartamentos({ setDepartamentos, setLoading });
    }
  }, [departamentos]);

  const bodyAcao = () => {
    return (
      <>
        <Button className='mr-2' icon='pi pi-pencil'/>
        <Button icon='pi pi-trash' severity='danger'/>
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