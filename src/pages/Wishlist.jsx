import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext"; 
import MovieCard from './../component/MovieCard';
import EmptyWishlist from "../component/EmptyWishlist";

export default function Wishlist() {
  const { Wishlist } = useContext(MoviesContext);

  return (
    <div className="container mt-4 mb-5">
      <h2 className="fw-bold mb-5">Watch list</h2>
      {Wishlist.length === 0 ? (
        <EmptyWishlist /> 
      ) : (
<div className="row mt-4">
          {Wishlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}