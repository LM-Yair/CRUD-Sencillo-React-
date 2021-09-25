import React,{ useEffect, useState } from 'react';
import './CRUD_Form.css';

const initialForm = {
  name: '',
  username: '',
  email: '',
  id: null,
};

const CRUDform = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [ form, setForm ] = useState( initialForm );
  
  useEffect(() => {
    if( dataToEdit ) setForm( dataToEdit );
    else setForm( initialForm );
  }, [ dataToEdit ]);


  const handleChange = e => setForm(
    { 
      ...form, 
      [ e.target.name ]:e.target.value 
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    
    if( !form.name || !form.username || !form.email ) {
      alert( 'completa los campos correctamente.' );
      return
    }

    form.id === null 
      ? createData( form )
      : updateData( form );

    handleReset();
  };
  
  const handleReset = () => {
    setForm( initialForm );
    setDataToEdit( null );
  };

  return(
    <section className='form'>
      <h3 className='form__title'>{ dataToEdit ? 'Editando' : 'Agregar' }</h3>
      <form className='form__container' onSubmit={ handleSubmit }>
	<input type="text" name='name' placeholder='Nombre:' onChange={ handleChange } value={ form.name }/>
	<input type="text" name='username' placeholder='Nombre de usuario: ' onChange={ handleChange } value={ form.username }/>
	<input type="text" name='email' placeholder='Correo: ' onChange={ handleChange } value={ form.email }/>
	<div className='form__container__btns'>
	  <input className='form__btn form__btn--send' type="submit" value={ dataToEdit ? 'Editar' : 'Agregar' }/>
	  <input className='form__btn form__btn--clean' type="reset" value='Limpiar' onClick={ handleReset }/>
	</div>
      </form>
    </section>
  );
}

export default CRUDform;
