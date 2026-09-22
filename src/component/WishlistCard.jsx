import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { formatDate } from "./formatedDetails"; 

export default function WishlistCard({ movie }) {
  const navigate = useNavigate();

  const movieAbout = () => {
    navigate(`/movie/${movie.id}`);
  };

  const renderStars = (rating) => {
    const starCount = Math.round(rating / 2);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<i key={i} className="fa-solid fa-star text-warning me-1"></i>); 
      } else {
        stars.push(<i key={i} className="fa-regular fa-star text-muted me-1"></i>);
      }
    }
    return stars;
  };

  return (
    <div 
      className="card h-100 border-0" 
      onClick={movieAbout} 
      style={{ 
        cursor: 'pointer', 
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)', 
        border: '1px solid #f0f0f0', 
        transition: 'transform 0.2s ease-in-out' 
      }}
    >
      <div className="row g-2 h-100">
        <div className="col-2 h-100">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            className="img-fluid h-100" 
            alt={movie.title}
            style={{ 
              objectFit: 'cover', 
              borderTopLeftRadius: '20px', 
              borderBottomLeftRadius: '20px' 
            }}
          />
        </div>
        <div className="col-4">
          <div className="card-body d-flex flex-column h-100 p-4 justify-content-center">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h4 className="card-title fw-bold mb-0 text-truncate pe-3">{movie.title}</h4>
              <FavoriteButton movie={movie} />
            </div>
            <p className="card-text text-muted small mb-3">{formatDate(movie.release_date)}</p>
            <div className="d-flex align-items-center mb-3">
              {renderStars(movie.vote_average)}
              <span className="ms-2 text-muted small fw-bold">{movie.vote_count}</span>
            </div>
            <p className="card-text text-muted m-0" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}