import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNav from "./components/MyNav"
import TVShows from "./components/TVShows"

import MyFooter from "./components/MyFooter"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import MovieDetails from "./components/MovieDetails"
import AllMovies from "./components/AllMovies"

function App() {
  return (
    <BrowserRouter>
      <div className="netflix-container container-fluid px-5">
        <MyNav />
        <Routes>
          <Route path="/" element={<TVShows />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
