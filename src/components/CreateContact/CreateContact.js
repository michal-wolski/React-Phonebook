import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateContact = ({ nameId, numberId, onSubmitCreateContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeNameInput = eve => {
    setName(eve.currentTarget.value);
    console.log(name);
  };
  const handleChangeNumberInput = eve => {
    setNumber(eve.currentTarget.value);
    console.log(number);
  };
  const onSubmitForm = eve => {
    eve.preventDefault();
    onSubmitCreateContact({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <form>
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeNameInput}
        />
        <label htmlFor={numberId}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          id={numberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumberInput}
        />
        <button type="submit" onClick={onSubmitForm}>
          Add contact
        </button>
      </form>
    </>
  );
};

CreateContact.propTypes = {
  nameId: PropTypes.string,
  numberId: PropTypes.string,
  onSubmitCreateContact: PropTypes.func.isRequired,
};

export default CreateContact;
