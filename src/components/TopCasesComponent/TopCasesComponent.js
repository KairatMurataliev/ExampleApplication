import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const TopCasesComponent = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag='h2'>Top Recovered Cases</CardTitle>
                    <CardTitle tag="h4">The amount of top recovered cases is <span style={{color: "#1362cc", fontSize: '25px'}}>{props.topRecovered}</span></CardTitle>
                    <CardText>Date {props.date}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default TopCasesComponent;
