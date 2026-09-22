import { useParams } from "react-router"
import { moviedetails } from "../services/api"
import { useEffect, useState } from "react";
import { formatDate } from "../component/formatedDetails";
import FavoriteButton from './../component/FavoriteButton';
import MovieRecommendations from './../component/MovieRecommendations';
export default function MovieDetails() {

  const [movie , setmovie] = useState(null);

    const {id} = useParams();
    useEffect(()=>{
      moviedetails(id).then((data)=>{
        setmovie(data)
        console.log(data)
      })
    },[id])

      if (!movie) {
    return <div className="container mt-5 text-center"><h3>Loading...</h3></div>;
  }
  const starsCount = Math.round((movie.vote_average || 0) / 2);

  return (
    <div className="container movieContainer my-4 "> 
      <div className="row">
          <div className="col-md-4  rounded-4 custom-shadow">
            <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
            className="img-fluid rounded-4 custom-shadow w-100"/>
          </div>
            <div className="col-md-8 px-md-4">
            
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h1 className="fw-bold mb-0">{movie.title}</h1>
              <FavoriteButton movie={movie} />
            </div>
            <p className="text-muted small mb-3">
              {movie.release_date ? formatDate(movie.release_date) : "Unknown Date"}
            </p>
            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="stars-container text-dark">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i 
                    key={star} 
                    className={star <= starsCount ? "fa-solid fa-star" : "fa-regular fa-star"}
                  ></i>
                ))}
              </div>
              <span className="text-muted fw-bold small">{movie.vote_count}</span>
            </div>
            <p className="movie-overview mb-4 text-dark">
              {movie.overview}
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((genre) => (
                <span key={genre.id} className="badge custom-genre-badge text-dark py-2 px-3">
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="d-flex gap-5 mb-4 align-items-center">
              <div>
                <span className="fw-bold fs-6 me-2">Duration:</span>
                <span className="text-muted fs-6">{movie.runtime} Min.</span>
              </div>
              <div>
                <span className="fw-bold fs-6 me-2">Languages:</span>
                <span className="text-muted fs-6">{movie.spoken_languages?.[0]?.english_name || "N/A"}</span>
              </div>
            </div>
            <div className="d-flex flex-column gap-3 align-items-start mt-2">
              {movie.production_companies?.[0]?.logo_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w200${movie.production_companies[0].logo_path}`} 
                  alt="Production Company" 
                  className="production-logo"
                />
              )}
              
              {movie.homepage && (
                <a href={movie.homepage} target="_blank" rel="noreferrer" className="btn btn-outline-secondary custom-website-btn mt-2">
                  Website <i className="fa-solid fa-link ms-1"></i>
                </a>
              )}
            </div>

          </div>
      </div>
      <br />
      <MovieRecommendations movieId={id} />
      </div>
  )
}
