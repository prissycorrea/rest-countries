import React from "react"
import Flag from "./Flag"

const Countries = (props) => {
    const {countries, isFetch} = props
    const renderCountries = (countries) => {
        return countries.map((_, index) => {
        return (
            isFetch && <Flag key={`card_${index}`} 
            index={index} 
            borders = {countries[index].borders} 
            flag={countries[index].flags.png} 
            name={countries[index].name.common} 
            capital={countries[index].capital} 
            region={countries[index].region} 
            population={countries[index].population} />
        )})
    }
        if(isFetch) {
            if(countries.length > 0){
                return (
                    <div className="containerForCard">
                        <div className="gridForCard">
                            {renderCountries(countries)}
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="containerForCard">
                        <h2>Country not found.</h2>
                    </div>
                )
            }
        } else {
            <div className="containerForCard">
                <h2>Loading countries...</h2>
            </div>
        }
}

export default Countries