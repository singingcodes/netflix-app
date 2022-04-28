import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNav from "./components/MyNav"
import TVShows from "./components/TVShows"
import LordRings from "./components/LordRings"
import HarryPorter from "./components/HarryPorter"
import StarWars from "./components/StarWars"
import MyFooter from "./components/MyFooter"

function App() {
  return (
    <div className="netflix-container container-fluid px-5">
      <MyNav />
      <TVShows />
      <LordRings />
      <HarryPorter />
      <StarWars />
      <MyFooter />
    </div>
  )
}

export default App
