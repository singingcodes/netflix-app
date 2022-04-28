import { Card, Button, Row, Col } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"

const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=b9ab1ae9&i=" + params.movieId
      )
      if (response.ok) {
        let data = await response.json()
        setMovie(data)
        console.log(data)
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="text-dark">
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Plot}.</Card.Text>
              <Button variant="primary" onClick={() => navigate("/movies")}>
                Movies
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default MovieDetails
