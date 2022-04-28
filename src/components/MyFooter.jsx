import { Row } from "react-bootstrap"

const MyFooter = () => {
  return (
    <div>
      <footer>
        <Row className="justify-content-center mt-5">
          <div className="col-10 col-lg-6 text-muted text-center text-sm-left">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>

            <small>
              <Row>
                <div className="col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>Audio and subtitles</li>
                    <li>Media center</li>
                    <li>Privacy</li>
                    <li>Contact us</li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>Audio description</li>
                    <li>Investor relations</li>
                    <li>Legal Notices</li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>Help center</li>
                    <li>Jobs</li>
                    <li>cookie Preferences</li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>Gift cards</li>
                    <li>Terms of use</li>
                    <li>Corporate information</li>
                  </ul>
                </div>
              </Row>
            </small>

            <button className="btn btn-sm btn-outline-secondary rounded-0 mt-3">
              Service Code
            </button>

            <p className="mt-2">
              <small>copyright 1997-2019 netflix,Inc</small>
            </p>
          </div>
        </Row>
      </footer>
    </div>
  )
}
export default MyFooter
