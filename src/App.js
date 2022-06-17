import './App.css';
import Header from './components/Header';
import { Component, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Flag from './components/Flag';
import {darkTheme, lightTheme} from './components/ChangeTheme'
import { ThemeProvider } from 'styled-components';
import {GlobalStyle} from './components/GlobalStyle'
import SelectBox from './components/Select';
import Countries from './components/Countries';

class App extends Component {
  state = {
    region: ['Africa', 'Americas', 'Antartic', 'Asia', 'Europe', 'Oceania'],
    countries: [],
    filtered: [],
    search: "",
    countryRegion: "",
    theme: "light",
    darkTheme: false,
    isFetch: false
  }

  //chamando a api
  consultApi = () => {
    const URL = "https://restcountries.com/v3.1/all/"
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      var countries = Array.from(data)
      this.setState({
        country: countries,
        filtered: countries,
        isFetch: true
      })
      console.log(countries)
    })
  .catch(error => {
    console.log(error)
  })
}

  //montando o componente
  componentDidMount() {
    this.consultApi()
    console.log("Component did mount")
  }

  //filtro por regiao
  dataSearch = (end) => {
    this.setState({search: end}, () => {
      this.filterCountries(this.state.countries)
    })
  }
  
  dataFilter = (continent) => {
    this.setState({countryRegion: continent}, 
      () => this.filterCountries(this.state.countries))
  }


  filterCountries = (countries) => {
    const asArray = Object.entries(countries)
    const filtered = asArray.filter(([key, value]) => {
    let matchName = (
      value.name.common.toLowerCase().startsWith(this.state.search)
      )
      let condition = (matchName && (value.countryRegion === this.state.countryRegion)) ||
      (matchName && this.state.countryRegion === "")
      return condition
    })

  var filteredCountries = filtered.map(([_, value]) => value)
    this.setState({
      filtered: filteredCountries
    })
    return filteredCountries
  }
  render() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <div className='pageContainer'>
          <form className='pageSearch'>
            <span className="lnr lnr-magnifier"></span>
            <SearchBar placeholder="Search for a country..." className='searchCountry' dataSearch={this.dataSearch}/>
            <div>
              <SelectBox width={120} className='regionFilter' dataFilter={this.dataFilter} regions={this.state.region} />
            </div>
          </form>
          <Countries countries={this.state.filtered} isFetch={this.state.isFetch} />
        </div>
      </div>
    </ThemeProvider>
  );
  }
}

export default App;
