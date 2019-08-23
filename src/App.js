import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import data from './data/sample.json';

function App() {
  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather for LOCATION HERE</h1>
        </Col>
        <Col md={5}>
          <SearchBar />
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <DayDetail />
      </Row>
    </Container>
  )
};

export default App;
