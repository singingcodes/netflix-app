import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap"
const TVShows = () => {
  return (
    <div>
      <Row>
        <Col className="mb-0 py-4">
          <h1 className="mr-5">TV Shows</h1>

          <DropdownButton
            id="dropdown-basic-button"
            title="Genres"
            className="button-tv mt-1 d-inline-block"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <div className="header-icons d-inline-block align-middle text-white mr-4">
            <span className="border border-secondary d-inline-block py-1 px-2">
              <i className="bi bi-justify-left"></i>
            </span>
            <span className="border border-secondary d-inline-block py-1 px-2">
              <i className="bi bi-grid-fill"></i>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default TVShows
