import  { useContext } from 'react'
import { MoviesContext } from './../context/MoviesContext';

export default function Pagination() {

   const {currentPage, setCurrentPage} = useContext(MoviesContext); 
    const pages = [1, 2, 3, 4, 5];

  return (
    <>
    <nav className="d-flex justify-content-center my-5">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${
              currentPage === page ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
}
