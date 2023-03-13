import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import {Nav,Navbar,Container} from 'react-bootstrap';

import SplashScreen from './pages/SplashScreen';

function App() {
  return (
    <Router>
      <Navbar expand='lg' className='navbar navbar-dark bg-dark py-2' sticky='top'>
        <Container>
          <Navbar.Brand className='neon-color position-absolute top-0 mt-2'>hiiii</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarResponsive' style={{outline:'none',boxShadow:'none',border:'none',backgroundColor:'#000'}}/>
          <Navbar.Collapse id='navbarResponsive'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/wix'>Web</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route exact path="/wix-temp" element={<SplashScreen/>} />
      </Routes>
      </Router>
  );
}

export default App;