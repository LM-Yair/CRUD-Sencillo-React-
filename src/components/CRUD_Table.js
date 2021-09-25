import React from 'react';
import CRUDTableRow from './CRUD_Table_Row';
import './CRUD_APP.css';
import './CRUD_Table.css';

const CRUDtable = ({ data, setDataToEdit, deleteData }) => {
  return(
    <>
    <h3 className='title'>Tabla de datos</h3>
    <section className='container__table'>

    <table>
      <thead>
        <tr>
	  <th>Nombre</th>
	  <th>Nombre de usuario</th>
	  <th>Correo</th>
	  <th>Acciones</th>
	</tr>
      </thead>
      <tbody>
	{ 
	data.length === 0 
	  ?<tr><td className='noData' colSpan='4'>Sin datos...</td></tr>
	  : data.map( el => <CRUDTableRow user={ el } key={ el.id } setDataToEdit={ setDataToEdit } deleteData={ deleteData } /> )
	}
      </tbody>
    </table>

    </section>
    </>
  );
}

export default CRUDtable;
