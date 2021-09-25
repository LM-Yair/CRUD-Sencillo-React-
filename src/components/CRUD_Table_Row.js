import React from 'react';
import './CRUD_Table_Row.css';

const CRUDTableRow = ({ user, setDataToEdit, deleteData }) => {
  let { id, name, username, email } = user;
  return(
    <tr>
      <td>{ name }</td>
      <td>{ username }</td>
      <td>{ email }</td>
      <td>
	<button className='td__btn--edit' onClick={ () => setDataToEdit( user ) }>Editar</button>
	<button className='td__btn--delete'  onClick={ () => deleteData( id ) }>Eliminar</button>
      </td>
    </tr>
  );
}

export default CRUDTableRow;
