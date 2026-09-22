import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);

export default router;