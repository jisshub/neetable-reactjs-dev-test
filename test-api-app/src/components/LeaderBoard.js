import React from 'react'
import { useState } from 'react'
import {useFetch} from '../hooks/useFetch.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LeaderBoard() {
    const [url, setUrl] = useState('https://randomuser.me/api?results=10');
    const {data: results}=useFetch(url);    
    const resultList = results;
    console.log(resultList);
    return (
        <div>
            <h1>Our Leadership</h1>
                <Container className='leaderboard' fluid>
                    <Row>
                        {resultList && resultList.map((result) => (
                            <Col sm={3}>
                                <p>
                                    <img src={`${result.picture.large}`}></img>
                                </p>
                                <p>
                                    {result.name.title}. {result.name.first} {result.name.last}
                                </p>
                                <p>
                                    {result.location.state}, {result.location.country}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
           
        </div>
    )
}
