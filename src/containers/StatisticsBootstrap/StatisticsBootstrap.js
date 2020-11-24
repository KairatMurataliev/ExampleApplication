import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {InputGroup, Input, Row, Col, Container} from 'reactstrap';

import {getCountiesList, getOneCountryData} from "../../store/actions/statisticsActions";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import TopCasesComponent from "../../components/TopCasesComponent/TopCasesComponent";
import moment from "moment";
import StatisticsComponent from "../../components/StatisticComponent/StatisticsComponent";


const StatisticsBootstrap = () => {

    const [country, setCountry] = useState('');
    const dispatch = useDispatch();
    const countryData = useSelector(state => state.countryData);
    const list = useSelector(state => state.list);
    const topRecovered = useSelector(state => state.topRecovered);

    useEffect(() => {
        dispatch(getCountiesList());

        const data = JSON.parse(localStorage.getItem('data'));
        if (!data || data.countryData === null) {
            dispatch(getOneCountryData(country));
        } else {
            console.log(data.countryData[0].Country.toLowerCase());
            setCountry(data.countryData[0].Country.toLowerCase())
        }
    }, [dispatch]);


    const changeCountryHandler = (event) => {
        const name = event.target.value;
        setCountry(name);
        dispatch(getOneCountryData(name))
    };

    return (
        <>
            {list ?
                <Container>
                    <Row>
                        <Col xs="6" sm="4">
                            <InputGroup>
                                <Input
                                    id='selectCountry'
                                    type={'select'}
                                    value={country}
                                    onChange={(event) => changeCountryHandler(event)}>>
                                    {list.map((country, index) => {
                                        return <option key={index} value={country.slug}>{country.country}</option>
                                    })}
                                </Input>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row>

                        {countryData ?
                            <Col>
                                <StatisticsComponent countryData={countryData}/>
                            </Col>
                            : null}

                        {topRecovered &&
                        <Col>
                            <TopCasesComponent
                                topRecovered={topRecovered.Recovered}
                                date={moment(topRecovered.Date).format('D MMMM')}
                            />
                        </Col>}
                    </Row>

                </Container> :
                <Backdrop/>}
        </>
    );
};

export default StatisticsBootstrap;
