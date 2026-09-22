import { useEffect, useState } from "react";
import { getTrendingMovies } from '../services/api'
import { MoviesContext } from "./MoviesContext";
 export function MovieProvider({children}){
    const [movies, setmovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [Wishlist, setWishlist] = useState( ()=>
        {
    const saveData = localStorage.getItem('myfavmovies');
    return saveData ? JSON.parse(saveData) : [];
} );

useEffect(()=>{
    localStorage.setItem( 'myfavmovies' , JSON.stringify(Wishlist));
},[Wishlist])

const toggleWishlist = (movie) => {
  setWishlist((oldWishlist) => {
    const isExist = oldWishlist.find((item) => item.id === movie.id);
    if (isExist) {
        return oldWishlist.filter((item) => item.id !== movie.id);
    } else {
        return [...oldWishlist, movie];
    }
    
  });
};


    useEffect(()=>{
        async function getMovies(){
            try{
                const data = await getTrendingMovies(currentPage) ;
                setmovies(data.results);
            }catch (error){
                console.log(error);
                setError("Failed to load movies");
            }finally{
                setLoading(false);
            }
        }
        getMovies();
    } , [currentPage])
        return (
            <MoviesContext.Provider  value={{ movies, loading, error , currentPage, setCurrentPage , Wishlist, toggleWishlist }}>
            {children}
            </MoviesContext.Provider>
        )
 }