import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.length > 0 ? (
        <ContactItem contacts={contacts} deleteContact={deleteContact} />
      ) : (
        'No Contacts'
      )}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
