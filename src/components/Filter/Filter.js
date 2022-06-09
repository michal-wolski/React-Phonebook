import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleOnChangeInput }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleOnChangeInput}
      ></input>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleOnChangeInput: PropTypes.func.isRequired,
};
