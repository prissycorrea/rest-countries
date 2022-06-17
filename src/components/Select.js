import React, {useRef} from "react"

const SelectBox = (props) => {
    const {width, regions} = props;
    const regionRef = useRef(null)
    const unique = regions.filter((countryRegion, index) => regions.indexOf(countryRegion) === index)
    const handleChange = (e) => {
        //pega o valor do input
        var continent = regionRef.current.value
        console.log(continent)
        //envia ao componente principal
        props.dataFilter(continent)
    }

    const populateSelect = () => {
        return unique.map((countryRegion, index) => {
            let notNull = (countryRegion !== "" && countryRegion !== null )
            return (
                notNull && <option key={`continent_${index}`} className="option" value={countryRegion}> {countryRegion} </option>
            )
        })
    }
    return (
        <select onChange={handleChange} ref={regionRef} name="Filter by region" className="regionFilter" id="region">
            <option className="option" value="">Filter by region</option>
            {populateSelect()}
        </select>
    );
    
}

export default SelectBox