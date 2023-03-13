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
          <Navbar.Brand id='devtyped' className='neon-color position-absolute top-0 mt-2'></Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarResponsive' style={{outline:'none',boxShadow:'none',border:'none',backgroundColor:'#000'}}/>
          <Navbar.Collapse id='navbarResponsive'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/web'>Web</Nav.Link>
              <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
              <Nav.Link as={Link} to='/hirethedevloper'>Hire Me</Nav.Link>
              <Nav.Link as={Link} to='/wix-template'>Wix-Template</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route exact path='/devop' element={<SplashScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;