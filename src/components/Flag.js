import React from "react";
import { useState, useEffect } from "react";
import api from "../services/api";
import styled from "styled-components";

const Flag = (props) => {
    const {index, flag, name, population, region, capital} = props
    return (
        <div className="countryCard" title={index}>
            <div className="imageContainer">
                <img src={flag} alt={name + "flag"} className="image" />
            </div>
            <div className="details">
                <div className="cardTitle">
                    <h2>{name}</h2>
                </div>
                <p>{`Population: ${population}`}</p>
                <p>{`Region: ${region}`}</p>
                <p>{`Capital: ${capital}`}</p>
            </div>
        </div>
    )
}

export default Flag