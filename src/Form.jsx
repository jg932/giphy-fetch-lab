import React, {useState} from 'react';

function Form(props) {
  const [gifSearch, setGifSearch] = useState('')

  const handleSubmit = e => {
    console.log('handleSubmit clicked');
    e.preventDefault();
    props.handleSubmit(gifSearch)
    setGifSearch('')
  };

  const handleChange = e => {
    console.log('handleChange clicked');
    const search =  e.target.value
    setGifSearch(search)
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="gifSearch"></label>
          <input
            placeholder="type of gif"
            id="gifSearch"
            type="text"
            value={gifSearch}
            onChange={handleChange}
          />
          <input type="submit" value="Go Fetch" />
        </form>
      </>
    );
}

export default Form;