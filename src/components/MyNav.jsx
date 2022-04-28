import { Navbar, Nav, Dropdown } from "react-bootstrap"

const MyNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>
          <img
            src="/assets/Netflix_Logo_RGB.png"
            id="logo"
            height="48"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Recently Added</Nav.Link>
            <Nav.Link href="#pricing">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#memes">KIDS</Nav.Link>
            <Nav.Link href="#deets">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              <i className="bi bi-person-circle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default MyNav
