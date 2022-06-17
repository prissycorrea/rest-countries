import React from "react";
import { Component } from "react";
import styled from "styled-components";
import debounce from 'lodash.debounce'

const SearchBar = styled.input `
    background-color: hsl(0, 0%, 100%);
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.07);
    margin: 50px 0;
    outline: 0;
    padding: 10px;
    width: 20vw;
`
;

class Searcher extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.emitChangeDebounced = debounce(this.emitChange, 10)
        this.searchRef = React.createRef()
    }
    componentWillUnmount() {
        this.emitChangeDebounced.cancel()
    }
    render() {
        return (
            <SearchBar placeholder="Search for a country..." className='searchCountry' ref={this.searchRef} 
            defaultValue={this.props.value}
            onChange={this.handleChange}
            type="text"/>
        )
    }
    handleChange = (e) => {
        e.preventDefault();
        this.emitChangeDebounced(e.target.value)
        console.log(e.target.value)
        //pegar valor do input
        var end = this.searchRef.current.value
        //enviar ao componente principal
        this.props.dataSearch(end)
    }
    emitChange = (value) => {
        this.props.dataSearch(value)
    }
}

export default SearchBar