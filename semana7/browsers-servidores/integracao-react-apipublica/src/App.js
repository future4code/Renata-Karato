import React from "react";
import "./index.css";
import styled from "styled-components";
import axios from "axios";

const BoxDiv = styled.div`
  font-family: "Roboto"
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: #FFFFFC;
  width: 35vw;
  border-radius: 25px;
`;

const BoxDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlagImg = styled.img`
  width: 270px;
  height: 189px;
  margin: 20px;
  border: 1px solid black;
  background-color: white;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Select = styled.select`
  margin: 10px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: 1px solid grey;
`;

export class App extends React.Component {
  state = {
    countries: [],
    countryFlag: [],
    informations: [],
  };

  componentDidMount = () => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;region;subregion;area;population;language;currencies"
      )
      .then(resp => {
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
        this.setState({ informations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <BoxDiv>
        <BoxDiv2>
          <h1>Countries Of The World</h1>
          <label>Choose a country:</label>
          <Select onChange={this.chooseCountry}>
            <option value="" />
            {this.state.countries.map(country => {
              return <option value={country.name}>{country.name}</option>;
            })}
          </Select>
         </BoxDiv2> 
        <InfoDiv>
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
                  <strong>Country Name:</strong>
                  <p>{info.name}</p>
                </p>
                <p>
                  <strong>Capital:</strong>
                  <p>{info.capital}</p>
                </p>
                <p>
                  <strong>Region:</strong>
                  <p>{info.region}</p>
                </p>
                <p>
                  <strong>SubRegion:</strong>
                  <p>{info.subregion}</p>
                </p>
                <p>
                  <strong>Population:</strong>
                  <p>{info.population} hab</p>
                </p>
                <strong>Languages:</strong>
                  {info.languages.map(language => {
                    return (
                      <p>{language.name}</p>
                    )
                  })}
                <strong>Currencies:</strong>
                {info.currencies.map(currency => {
                  return (
                    <p>{currency.name} - ({currency.symbol})</p>
                  )
                })}
                <p>
                  <strong>Area:</strong>
                  <p>{info.area} km²</p>
                </p>
              </div>
            );
          })}
        </InfoDiv>
      </BoxDiv>
    );
  }
}

export default App;