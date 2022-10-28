import React from 'react'
import { useState } from 'react'
import {useFetch} from '../hooks/useFetch.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './LeaderBoard.css';
import { Facebook, Folder, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

export default function LeaderBoard() {
    const [url, setUrl] = useState('https://randomuser.me/api?results=12');
    const {data: results}=useFetch(url);    
    const resultList = results;
    console.log(resultList);
    return (
        <div>
            <h2 className='pb-3 pt-1 mb-3'>Our Leadership</h2>
                <Container 
                    className='leaderboard' 
                    fluid 
                    style={{margin: '2rem'}}
                >
                    <Row>
                        {resultList && resultList.map((result) => (
                            <Col 
                                sm={3} 
                                style={{marginBottom: '2rem'}}
                            >
                                <Card style={{width: '18rem'}}>
                                    <div className='img-effect'>
                                        <Card.Img
                                            className='img-effect'
                                            src={`${result.picture.large}`}
                                            style={{borderRadius: '0.5rem'}}
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>
                                        {result.name.title}. {result.name.first} {result.name.last}
                                        </Card.Title>
                                        <Card.Text>
                                        {result.location.state}, {result.location.country}
                                        </Card.Text>
                                    </Card.Body>
                                </Card> 
                            </Col>
                        ))}
                    </Row>
                </Container>
           
        </div>
    )
}
