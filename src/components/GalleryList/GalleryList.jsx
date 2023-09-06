import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({image}) {

   console.log(image);

    return(
        <ul>
            {
                image.map(imageOne => (
                    <GalleryItem key={imageOne.id} image = {imageOne} />

                ))
            }
        </ul>
    );
}

export default GalleryList;