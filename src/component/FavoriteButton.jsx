import { useContext} from 'react';
import './FavoriteButton.css'; 
import { MoviesContext } from '../context/MoviesContext';
export default function FavoriteButton({movie}) {
  const {Wishlist,toggleWishlist} = useContext(MoviesContext) ;
const isFavorite = Wishlist.some((item) => item.id === movie.id);
  const toggleFavorite = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    toggleWishlist(movie);
  };

  return (
    <i 
      className={`fa-heart heart-btn fs-5 ${isFavorite ? 'fa-solid text-warning' : 'fa-regular text-muted'}`} 
      onClick={toggleFavorite}
    ></i>
  );
}