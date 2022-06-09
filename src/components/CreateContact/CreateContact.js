import React from 'react';
import PropTypes from 'prop-types';

const CreateContact = ({
  name,
  nameId,
  number,
  numberId,
  handleOnChangeInput,
  handleSubmit,
}) => {
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
          onChange={handleOnChangeInput}
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
          onChange={handleOnChangeInput}
        />
        <button type="submit" onClick={handleSubmit}>
          Add contact
        </button>
      </form>
    </>
  );
};

CreateContact.propTypes = {
  name: PropTypes.string,
  nameId: PropTypes.string,
  number: PropTypes.number,
  numberId: PropTypes.string,
  handleOnChangeInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateContact;
