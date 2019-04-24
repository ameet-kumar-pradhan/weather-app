import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import './assets/fomantic/dist/semantic.css';
import { Container, Header } from 'semantic-ui-react';

const api_key = "9228bd5801440681840cfcf7959dcd24";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  render() {
    return (
      <Container>
        <div>
          <Header>
            <Titles />
          </Header>
          <Form loadWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error} />
        </div>
      </Container>
    )
  }
}
export default App;