import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const FormDepartamentos = () => {
  return (
    <>
      <div className="col-span-12">
        <h1>Departamentos</h1>
        </div>
          <InputText placeholder='Nome'/>
          <InputText placeholder='Sigla'/>
          <Button icon='pi pi-save' severity='success' label='Salvar'/>
        <div>

      </div>
    </>
  )
}