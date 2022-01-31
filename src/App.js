import './App.css';
import FilterSection from './components/filterSection/FilterSection';
import SearchBar from './components/searchBar/SearchBar';
import React, { Component } from 'react';
import CardList from '../../countries-info/src/components/cardList/CardList';
import Error from './components/errorComponent/Error';



class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      searchfield: '',
      filterfield: '',
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(name => this.setState({ countries: name }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value.toLowerCase() })

  }

  onFilterChange = (event) => {
    this.setState({ filterfield: event.target.value.toLowerCase() })

  }


  render() {
    let filteredCountries = this.state.countries.filter(countries => {
      return countries.name.common.toLowerCase().includes(this.state.searchfield)
        || countries.cca2.toLowerCase().includes(this.state.searchfield)
        || countries.cca3.toLowerCase().includes(this.state.searchfield)
        || String(countries.ccn3).toLowerCase().includes(this.state.searchfield)
        || String(countries.capital).toLowerCase().includes(this.state.searchfield)
        || String(countries.cioc).toLowerCase().includes(this.state.searchfield);
    })

    switch (this.state.filterfield) {
      case 'region':
        filteredCountries = this.state.countries.filter(countries => {
          return String(countries.region).toLowerCase().includes(this.state.searchfield);
        });
        break;
      case 'population':
        filteredCountries = this.state.countries.filter(countries => {
          return String(countries.population).toLowerCase().includes(this.state.searchfield);
        });
        break;

      case 'languages': ;
        filteredCountries = this.state.countries.filter(countries => {
          if (countries.languages)
            return Object.values(countries.languages).some(item => {
              return typeof item === "string" && item.toLowerCase().includes(this.state.searchfield);
            });
        });
        break;

      case 'timezone':
        filteredCountries = this.state.countries.filter(countries => {
          return String(countries.timezones).toLowerCase().includes(this.state.searchfield);
        });
        break;

      case 'currencies': ;
        filteredCountries = this.state.countries.filter(countries => {

          if (countries.currencies)
            return Object.values(countries.currencies).some(item => {
              return Object.values(item).some(currency => {
                return typeof currency === "string" && currency.toLowerCase().includes(this.state.searchfield);
              });
            });
        });
        break;
    }
    filteredCountries.sort(function (a, b) {
      var nameA = a.name.common.toUpperCase();
      var nameB = b.name.common.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    if (filteredCountries.length > 0)
      return (
        <div>
          <FilterSection filterChange={this.onFilterChange} />
          <SearchBar searchChange={this.onSearchChange} searchByCapital={this.onSearchChange} />
          <CardList countries={filteredCountries} />
        </div>
      )
    else
      return (
        <div>
          <FilterSection />
          <SearchBar searchChange={this.onSearchChange} searchByCapital={this.onSearchChange} />
          <Error />
        </div>
      )

  }
}
export default App;