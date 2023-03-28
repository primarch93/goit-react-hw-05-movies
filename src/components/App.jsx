import { Routes, Route, NavLink } from "react-router-dom";
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
   <div>
    <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
    </header>
   </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} >
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} />
      </Route>
<Route path = '*' element={<h1>404</h1>} />
    </Routes>
    </>
  );
};
