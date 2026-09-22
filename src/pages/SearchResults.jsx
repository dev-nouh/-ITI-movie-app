import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieCard from "../component/MovieCard";
import SearchBar from './../component/SearchBar';

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getSearchResults() {
      const data = await searchMovies(query);

      console.log(data);

      setMovies(data.results);
    }

    if (query) {
      getSearchResults();
    }
  }, [query]);

  return (
    <div className="container">
     <SearchBar />
      <h2 className="my-4">Search Results for: {query}</h2>

      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}