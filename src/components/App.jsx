import React, { Component, useState, useEffect } from 'react';
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
  const [contacts, setContacts] = useState([]);
  const [filterContatsByQuery, setfilterContatsByQuery] = useState('');

  useEffect(() => {
    try {
      const phonebookParse = localStorage.getItem('phonebook');
      if (phonebookParse) {
        const contacts = JSON.parse(phonebookParse);
        setContacts({ contacts });
      }
    } catch (error) {
      throw new Error(error);
    }

    localStorage.setItem('phonebook', JSON.stringify(contacts));
  });

  inputIds = {
    nameId: nanoid(),
    numberId: nanoid(),
  };

  handleOnChangeInput = evt => {
    const { name, value } = evt.target;
    setContacts({ [name]: value });
  };
  handleSubmit = evt => {
    const { name, number, contacts } = this.state;
    evt.preventDefault();
    const createContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.info('This name already exists');
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, createContact],
      }));
    }
  };

  handleDeleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <CreateContact
        handleOnChangeInput={handleOnChangeInput}
        handleSubmit={handleSubmit}
        nameId={nameId}
        numberId={numberId}
      />
      <h2>Contacts</h2>

      <Filter filter={filter} handleOnChangeInput={this.handleOnChangeInput} />
      <ContactList
        contacts={filtedContacts}
        deleteContact={this.handleDeleteContact}
      />
    </>
  );
};
// class App2 extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   //Download phonebook from user localstorage
//   componentDidMount()

//   componentDidUpdate() {

//   }

//   render() {
//     const { nameId, numberId } = this.inputIds;
//     const { contacts, filter } = this.state;
//     const filtedContacts = FilterContactsByName(contacts, filter);

//   }
// }

export default App;
