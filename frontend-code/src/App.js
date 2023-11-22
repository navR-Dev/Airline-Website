import React from "react";
import { Nav, Navbar, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Webcheckin from "./Components/web-checkin";
import BookingForm from "./Components/BookingForm";
import Signup from "./Components/signup";
import Food from "./Components/on-board-menu";
import Login from "./Components/login";
import PaymentForm from "./Components/PaymentsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/login"} className="nav-link">
                  Airline Ticket Reservation
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/BookingForm"} className="nav-link">
                    Flight Bookings
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/web-checkin"} className="nav-link">
                    Web-Check In
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/on-board-menu"} className="nav-link">
                    On-Board Menu
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/signup"} className="nav-link">
                    Sign-up
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container id="imagecontainer">
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  {/* <Route path="/"
					element={<CreateStudent/>} />  */}

                  <Route path="/signup" element={<Signup />} />

                  <Route path="/on-board-menu" element={<Food />} />

                  <Route path="/BookingForm" element={<BookingForm />} />

                  <Route path="/login" element={<Login />} />

                  <Route path="/web-checkin" element={<Webcheckin />} />

                  <Route path="/PaymentsPage" element={<PaymentForm />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
