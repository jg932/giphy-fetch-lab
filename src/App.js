import React, { useEffect, useState} from 'react';
import './App.css';
import Form from './Form'
import Gif from './Gif'


function App() {
  const [gifData, setGifData]= useState('')
  const [gifSearch, setGifSearch]= useState('')

  const handleSubmit = search => {
		console.log('App - makeApiCall - search', search[0]);
		setGifSearch(search);
};
  useEffect(() => {
		let gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=4zoqThWFvQvK2bNdAQio95MMhMzEhtMJ&tag=${gifSearch}`
		const makeApiCall = () => {
			fetch(gifUrl)
				.then((res) => res.json())
				.then((data) => {
					// console.log('gifData', data);
					setGifData(data);
				});
		};
		makeApiCall();
	}, [gifSearch]);
  return (
		<div className='App'>
			<h1>Giphy-Fetch-Lab</h1>
			<Form handleSubmit={handleSubmit} />
			{/* <Gif {giphyData.data ? <Giph giphy={giphyData} /> : null} /> */}
			{gifData.data ? <Gif gif={gifData} /> : null}
		</div>
	);
}

export default App;