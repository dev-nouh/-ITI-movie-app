import './MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { formatDate } from './formatedDetails';
import FavoriteButton from './FavoriteButton';

export default function MovieCard({ movie }) {
  const rating = Math.round(movie.vote_average * 10);


  const getRatingColors = (rating) => {
    if (rating >= 70) return { ring: '#21d07a', track: '#204529' }; 
    if (rating >= 40) return { ring: '#d2d531', track: '#423d0f' }; 
    return { ring: '#db2360', track: '#571422' }; 
  };
  const { ring, track } = getRatingColors(rating);
  
  const navigate = useNavigate(); 

  const  movieAbout = ()=>{
      navigate(`/movie/${movie.id}`)
  }

  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
      <div className="card border-0 bg-transparent h-100">
        
        <div className="position-relative">
          <img 
            className="card-img-top rounded-4 custom-shadow" 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            onClick={movieAbout}
          />
          
          <div className="position-absolute top-0 end-0 p-2">
            <i className="fa fa-ellipsis-h text-white fs-5 opacity-75 more-options-icon"></i>
          </div>
          <div 
            className="position-absolute rating-wrapper custom-shadow"
            style={{
              '--rating': `${rating}%`,
              '--ring-color': ring,
              '--track-color': track
            }}
          >
            <div className="rating-inner">
              {rating}<sup className="rating-sup">%</sup>
            </div>
          </div>
        </div>

        <div className="card-body px-1 pt-4 pb-0 d-flex flex-column justify-content-between">
          <h6 className="card-title fw-bold text-truncate mb-1">{movie.title}</h6>
          
          <div className="d-flex justify-content-between align-items-center mt-1">
            <p className="mb-0 text-muted release-date">{formatDate(movie.release_date)}</p> 
          <FavoriteButton movie={movie} />
          </div>
        </div>

      </div>
    </div>
  );
}