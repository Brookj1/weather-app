import React, { Component } from 'react';
import moment from 'moment';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import data from './data/sample.json';

class App extends Component {
  state = {
    // days: [],
    days: data.data,
    selectedDay: null
  }

  componentDidMount() {
    console.log(this.state.days[0]);
  }

  selectDay = day => {
    this.setState({ selectedDay: day });
  }

  render() {
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
        <Row>
          {this.state.days.map(day => (
            <DayCard
              key={day.ts}
              current={day.temp}
              high={day.max_temp}
              low={day.min_temp}
              precip={day.pop}
              icon={day.weather.icon}
              description={day.weather.description}
              day={moment(day.datetime, "YYYY-MM-DD").format("dddd")}
              selectDay={() => this.selectDay(day)}
              isActive={this.state.selectedDay === day}
            />
          ))}
        </Row>
        <Row>
          <Col>
            {this.state.selectedDay ? (
              <DayDetail
                current={this.state.selectedDay.temp}
                high={this.state.selectedDay.max_temp}
                low={this.state.selectedDay.min_temp}
                precip={this.state.selectedDay.pop}
                icon={this.state.selectedDay.weather.icon}
                description={this.state.selectedDay.weather.description}
                day={moment(this.state.selectedDay.datetime, "YYYY-MM-DD").format("dddd, MMMM Do, YYYY")}
              />
            ) : (
                <h2>Choose a day above to get more details!</h2>
              )}
          </Col>
        </Row>
      </Container>
    );

  }
}


export default App;
