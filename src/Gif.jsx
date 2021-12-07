import React from 'react';

function Gif (props){
  let url = ''
  props.gif.data.forEach((element) => {
    url = element.images.original.url
  })

  return (
  <>
  <img 
  src={url}  
  alt="gif"
  />
  </>
  )
}

export default Gif