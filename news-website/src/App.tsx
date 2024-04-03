import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navigation from './Header/Navigation';
import { Container } from 'react-bootstrap';
import LogoContainer from './Header/LogoContainer';
import ImportantNewsContainer from './Header/ImportantNewsContainer';

function App() {
  return (
    <>
      <Container fluid className='header-container'>
        <LogoContainer />
        <Navigation />
        <ImportantNewsContainer />
      </Container>
      <Container>
          asdasd
      </Container> 
    </>
  );
}

export default App;
