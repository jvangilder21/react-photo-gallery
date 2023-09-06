import { useState, useEffect } from 'react';
import axios from 'axios';

// Material UI
import Button from '@mui/material/Button';

function GalleryItem ({image}) {
console.log(image);

const { id, path, description} = image;
const [showDescription, setShowDescription] = useState(false);
const [likes, setLikes] = useState(image.likes);

const toggleDescription = () => {
    setShowDescription(!showDescription);
};

const handleLike = () => {
    axios.put(`/gallery/like/${id}`)
    .then(() => {
        setLikes(likes + 1);
    })
    .catch((error) => {
        console.log('Error in liking image', error);
    });
}
 
     return(
         <>
            {showDescription ? ( <p onClick={toggleDescription}>
                {description}</p> ) : ( <img src={path} 
                alt={description} onClick={toggleDescription} /> ) }
            
            
            <br/>
            <Button variant="contained" type="submit" color="secondary" onClick={handleLike}>Like</Button>
            <p>Likes: {likes}</p>

         </>
     );
 }
 
 export default GalleryItem;