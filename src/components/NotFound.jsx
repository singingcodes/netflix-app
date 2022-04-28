import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPxjVKBT5SH52uC29M3Ag4-YC1kn1twRgcb78xo1-qOcR-30gQw0APkLo0kSbwKFuPU8&usqp=CAU"
              alt="page not found"
            />
            <Button
              className="d-block mt-3 text-white"
              variant="outline-dark"
              onClick={() => {
                navigate("/")
              }}
            >
              Go back to Movies
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default NotFound
