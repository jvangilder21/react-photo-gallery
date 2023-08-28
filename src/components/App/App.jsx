import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import './App.css';

// Components
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  useEffect(() => {
    fetchImage()
  }, []);

  const [imageList, setImageList] = useState('');

  const fetchImage = () => {
    axios.get('/gallery')
    .then((response) => {
        console.log(response.data);
        setImageList(response.data)
    })
    .catch((error) => {
    console.log(error);
    })
};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
