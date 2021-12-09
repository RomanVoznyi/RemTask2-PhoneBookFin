const Filter = ({ filter, handleInputField }) => {
  return (
    <label className="labelFilterField">
      <span className="titleFilterField">Find contacts by Name:</span>
      <input
        type="text"
        className="filterField"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов."
        value={filter}
        onChange={handleInputField}
      />
    </label>
  );
};

export default Filter;
