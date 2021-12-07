import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form.jsx';
import Gif from './Gif.jsx';

function App() {
const [gifData, setGifData] = useState ('');
const [gifSearch, setGifSearch] = useState ('')

const handleSubmit = search => {
  setGifSearch(search)
};

useEffect(() => {
  let gifUrl = `http://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=BSuS1MwWdqU3HsuybpnffX5nsNqOXOwt&limit=1`;

  const makeApiCall = () => {
    fetch(gifUrl)
    .then(res => res.json())
    .then(data => {
      console.log('gifData', data)
      setGifData(data)
    })
  }
  makeApiCall()
}, [gifSearch])

  return (
    <>
    <div className="App">
      <h1>Giphy-Fetch-Lab</h1>
      <Form  handleSubmit={handleSubmit}/>
      {gifData.data ? <Gif gif={gifData}  /> : null }
    </div>
    </>
  );
}

export default App;