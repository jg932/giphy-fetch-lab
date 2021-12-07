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
  const refreshPage = ()=>{
    window.location.reload();
  }
    return (
      <>
        <form onSubmit={handleSubmit}>
  
          <input
            type="text"
            value={gifSearch}
            placeholder= 'Type of giphy'
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
          <br></br>
          < button onClick={refreshPage}> Make API Call Again</button>
        <h1>Pull random gifs from Giphy</h1>
        </form>
      </>
    );
}

export default Form;