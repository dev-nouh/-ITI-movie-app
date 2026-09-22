import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
      <i className="fa-solid fa-heart-crack mb-4" style={{ fontSize: '10rem', color: '#d1d1d1' }}></i>
      <h4 className="mb-4">No Movies in watch list</h4>
      <Link to="/" className="btn btn-warning px-5 py-2 fw-bold rounded-1" style={{ backgroundColor: '#fcd34d', border: 'none' }}>
        Back to home
      </Link>
      
    </div>
  );
}