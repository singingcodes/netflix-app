import React, { useState, useEffect } from "react"
import { Carousel, Row, Col, Alert, Spinner, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const StarWars = () => {
  const [movies, setMovies] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=b9ab1ae9&s=Star+Wars"
      )
      if (response.ok) {
        let data = await response.json()
        let dataArray = data.Search
        console.log(dataArray)
        setMovies(dataArray)
        setIsLoading(false)
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)

      console.log(error)
    }
  }

  return (
    <div>
      <h5>Star Wars</h5>
      {isError && <Alert variant="danger">Error please try again</Alert>}
      {isLoading && <Spinner animation="border" variant="info" />}
      <Carousel className="carousel slide mb-4 d-none d-md-block">
        <Carousel.Item>
          <Row className="mx-n1">
            {movies.map((movie) => (
              <Col className="sm-6 md-4 xl-2 px-1" key={movie.imdbID}>
                <img
                  className="d-block w-100"
                  src={movie.Poster}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <Link to={"/details/" + movie.imdbID}>
                    <Button variant="dark">View</Button>
                  </Link>
                </Carousel.Caption>
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
                <Carousel.Caption>
                  <Link to={"/details/" + movie.imdbID}>
                    <Button variant="dark">View</Button>
                  </Link>
                </Carousel.Caption>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default StarWars
