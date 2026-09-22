import { useContext } from "react";
import SearchBar from "../component/SearchBar";
import "../componentStyle/Movies.css";
import MovieCard from './../component/MovieCard';
import { MoviesContext } from "../context/MoviesContext";
import Loading from "../component/Loading";
export default function Movies() {
const { movies, currentPage, setCurrentPage,  loading } = useContext(MoviesContext);
  const handleNext = () => setCurrentPage(prev => (prev >= 500 ? 1 : prev + 1));
  const handlePrev = () => setCurrentPage(prev => (prev <= 1 ? 500 : prev - 1));
const startPage = Math.max(1, currentPage - 2); 
  const dynamicPages = [...Array(5)].map((_, index) => startPage + index);


  return (
    <div>
      <div className="container SearchContainer">
      <div className="containerText">
        <h2 className="lead texthed">
          Welcome to our movie app
        </h2>

        <p className="lead textpra">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>

      <SearchBar />
    </div>
      <h3 className="lead texthed m-5 px-4 px-lg-5">
        Now Playing
      </h3>


  {loading? (<Loading />):(<>

<div className="container-fluid px-4 px-lg-5">
  <div className="movies-grid row">
    {movies && movies.slice(0, 12).map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
  </div>
  



<div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="d-flex align-items-center gap-3">
          
          <button 
            className="btn border-0 bg-transparent fs-5 nav-arrow-btn" 
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          {dynamicPages.map((page) => (
            <button 
              key={page}
              className={`btn border-0 fw-bold page-number-btn ${
                currentPage === page ? 'bg-warning text-dark' : 'text-dark bg-transparent'
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <span className="fw-bold fs-5 pb-2 text-dark">....</span>

          <button 
            className="btn border-0 bg-transparent fs-5 nav-arrow-btn" 
            onClick={handleNext}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

        </div>
      </div>
      </>
)}
    </div>
        
  );
}

