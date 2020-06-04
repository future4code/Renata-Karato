import React from "react";
import "./index.css";
import styled from "styled-components";
import axios from "axios";

const BoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const FlagImg = styled.img`
    width: 180px;
    height: 126px;
    margin: 20px;
    border: 1px solid black;
`;

const Select = styled.select`
    margin: 10px;
    height: 30px;
`;

export class App extends React.Component {
  state = {
    countries: [],
    countryFlag: [],
    informations: [],
  };

  componentDidMount = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;capital;region;area")
      .then(resp => {
        console.log(resp.data)
        this.setState({ countries: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  chooseCountry = event => {
    const countryName = event.target.value;
    axios
      .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(response => {
        this.setState({ countryFlag: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };


  render() {
    return (
      <BoxDiv>
        <label>Choose a country:</label>
        <Select onChange={this.chooseCountry}>
          <option value="" />
          {this.state.countries.map(country => {
            return <option value={country.name}>{country.name}</option>
          })}
        </Select>
        
        {this.state.countryFlag.map(flag => {
          return (
            <div>
              <FlagImg src={flag.flag} alt="Country Flag" />
            </div>
          );
        })}

        {this.state.informations.map(info => {
            return (
                <div>
                    <p>
                        <strong>Name:</strong>
                        {info.name}
                    </p>
                    <p>
                        <strong>Capital:</strong>
                        {info.capital}
                    </p>
                </div>
            )
        })}
      </BoxDiv>
    );
  }
}

export default App;