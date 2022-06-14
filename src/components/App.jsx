import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import CreateContact from './CreateContact/CreateContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { FilterContactsByName } from './Utils/FilterContactsByName';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
});

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const phonebook = JSON.parse(localStorage.getItem('phonebook'));
    return phonebook || [];
  });
  const [filterContatsByQuery, setfilterContatsByQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const inputIds = {
    nameId: nanoid(),
    numberId: nanoid(),
  };

  const handleOnChangeSearchContact = evt => {
    const { value } = evt.target;
    setfilterContatsByQuery(value);
  };

  const onSubmitCreateContact = ({ name, number }) => {
    const createContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.info('This name already exists');
    } else {
      setContacts([createContact, ...contacts]);
    }
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(index => index.id !== id));
  };

  const filtredContacts = FilterContactsByName(contacts, filterContatsByQuery);

  return (
    <>
      <h1>Phonebook</h1>
      <CreateContact
        onSubmitCreateContact={onSubmitCreateContact}
        nameId={inputIds.nameId}
        numberId={inputIds.numberId}
      />
      <h2>Contacts</h2>

      <Filter
        filter={filterContatsByQuery}
        handleOnChangeSearchContact={handleOnChangeSearchContact}
      />
      <ContactList
        contacts={filtredContacts}
        deleteContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
