import React, { useState, useEffect } from "react"
import {
  Carousel,
  Row,
  Col,
  FormControl,
  Spinner,
  Alert,
} from "react-bootstrap"

const LordRings = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isError, setIsError] = useState(false)

  useEffect(() => fetchData(), [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=b9ab1ae9&s=Lord+of+the+Rings"
      )
      if (response.ok) {
        let data = await response.json()
        let dataArray = data.Search
        console.log(dataArray)
        setMovies(dataArray)
        setIsLoading(false)
      } else {
        setIsError(true)
        console.log("an error ocurred")
      }
    } catch (error) {
      setIsError(true)

      console.log(error)
    }
  }

  return (
    <div>
      <Row className="justify-content-between">
        <h5 className="m-3">Lord Of The Rings</h5>
        {isError && <Alert variant="danger">Error please try again</Alert>}
        {isLoading && <Spinner animation="border" variant="info" />}
        <Col md={3} className="mb-3">
          <FormControl
            type="text"
            placeholder="Search Lord of the rings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
      </Row>
      <Carousel className="carousel slide mb-4 d-none d-md-block">
        <Carousel.Item>
          <Row className="mx-n1">
            {movies
              .filter((movie) =>
                movie.Title.toLowerCase().includes(searchQuery)
              )
              .map((movie) => (
                <Col className="sm-6 md-4 xl-2 px-1" key={movie.imdbID}>
                  <img
                    className="d-block w-100"
                    src={movie.Poster}
                    alt="slide"
                  />
                </Col>
              ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="mx-n1">
            {movies.map((movie) => (
              <Col className="sm-6 md-4 xl-2 px-1" key={movie.imdbID}>
                <img
                  className="d-block w-100"
                  src={movie.Poster}
                  alt="Third slide"
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default LordRings
