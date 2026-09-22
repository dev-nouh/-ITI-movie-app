import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getMovieRecommendations } from "../services/api"; 

export default function MovieRecommendations({ movieId }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const data = await getMovieRecommendations(movieId);
        setRecommendations(data.slice(0, 6)); 
      } catch (error) {
        console.log("Error fetching recommendations", error);
      }
    }
    
    if (movieId) {
      fetchRecommendations();
    }
  }, [movieId]);
  if (recommendations.length === 0) return null;

  return (
    <div className="container mt-5 mb-5 border-top pt-5">
      <h2 className="fw-bold mb-4">Recommendations</h2>
 <div className="row mt-4">
        {recommendations.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}