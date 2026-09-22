 export async function getTrendingMovies(page) {
      const response  =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=15436dee7e4f2be41fce33f186ec9518&page=${page}`); 
      const data = await response.json(); 
      return data;
}

export async function searchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=15436dee7e4f2be41fce33f186ec9518&query=${query}`
  );

  const data = await response.json();

  return data;
}

export async function moviedetails(id) {
    const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=15436dee7e4f2be41fce33f186ec9518`
  );
  const data = await response.json();
  return data;
}
export const getMovieRecommendations = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=15436dee7e4f2be41fce33f186ec9518&query`);
  const data = await response.json();
  return data.results;
};