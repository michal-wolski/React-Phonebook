import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleOnChangeSearchContact }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleOnChangeSearchContact}
      ></input>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleOnChangeSearchContact: PropTypes.func,
};
