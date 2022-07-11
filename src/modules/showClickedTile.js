// Display the image for a given tile
// Get the tile with the matching id from tilesArray. This will be an object. Get the image key

const showClickedTile = (selectedTile, tilesArray) =>{
    const backgroundImage = (tilesArray.filter(eachTile => eachTile.id === selectedTile.id))[0].image;
    selectedTile.style.backgroundImage = backgroundImage;
    selectedTile.style.backgroundSize = 'contain';
}
export default showClickedTile;