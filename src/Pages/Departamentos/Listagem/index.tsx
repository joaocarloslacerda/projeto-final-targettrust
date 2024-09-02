import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const ListagemDepartamentos = () => {

  const departamentos = [
    {
      id_departamento: 1,
      nome: 'Recursos Humanos',
      sigla: 'RH'
    },
    {
      id_departamento: 2,
      nome: 'Tecnologia da Informação',
      sigla: 'TI'
    },
  ]

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
        <h1 className='pt-2'>Listagem de Departamentos</h1>

        <Button icon='pi pi-plus' severity='success' label='Incluir' onClick={handleCkick}/>
      </div>

      <div className="col-span-12">
        <DataTable value={departamentos}>
          <Column field='sigla' header='Sigla'/>
          <Column field='nome' header='Nome'/>
          <Column header='Ação' body={bodyAcao}/>
        </DataTable>
      </div>
    </>
  )
};