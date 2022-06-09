import React, { Component } from 'react';
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
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  //Download phonebook from user localstorage
  componentDidMount() {
    try {
      const phonebookParse = localStorage.getItem('phonebook');
      if (phonebookParse) {
        const contacts = JSON.parse(phonebookParse);
        this.setState({ contacts });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  componentDidUpdate() {
    localStorage.setItem('phonebook', JSON.stringify(this.state.contacts));
  }

  inputIds = {
    nameId: nanoid(),
    numberId: nanoid(),
  };

  handleOnChangeInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
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

  render() {
    const { nameId, numberId } = this.inputIds;
    const { contacts, filter } = this.state;
    const filtedContacts = FilterContactsByName(contacts, filter);

    return (
      <>
        <h1>Phonebook</h1>
        <CreateContact
          handleOnChangeInput={this.handleOnChangeInput}
          handleSubmit={this.handleSubmit}
          nameId={nameId}
          numberId={numberId}
        />
        <h2>Contacts</h2>

        <Filter
          filter={filter}
          handleOnChangeInput={this.handleOnChangeInput}
        />
        <ContactList
          contacts={filtedContacts}
          deleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
