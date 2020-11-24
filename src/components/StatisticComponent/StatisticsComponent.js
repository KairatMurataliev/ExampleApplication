import React from 'react';
import moment from 'moment';
import {Jumbotron} from 'reactstrap';

const StatisticsComponent = (props) => {
    return (
        props.countryData.map((country, index) => {
            return (
                <Jumbotron key={index}>
                    <h3>{moment(country.Date).format('D MMMM')}</h3>
                    <p>Active: <span>{country.Active}</span></p>
                    <p>Confirmed <span>{country.Confirmed}</span></p>
                    <p>Deaths <span>{country.Deaths}</span></p>
                    <p>Recovered <span>{country.Recovered}</span></p>
                </Jumbotron>
            )
        })
    );
};

export default StatisticsComponent;
