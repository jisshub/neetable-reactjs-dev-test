import React from 'react'
import { useState } from 'react'
import {useFetch} from '../hooks/useFetch.js'

export default function LeaderBoard() {
    const [url, setUrl] = useState('https://randomuser.me/api?results=10');
    const {data: results}=useFetch(url);    
    const resultList = results;
    console.log(resultList);
    return (
        <div>
            <h1>LeaderBoard</h1>
            {resultList && resultList.map((result) => (
                <div className='leaderboard'>
                    <p>
                        <img src={`${result.picture.large}`}></img>
                    </p>
                    <p>
                        <strong>Name:</strong>&nbsp;
                        {result.name.title}. {result.name.first} {result.name.last}
                    </p>
                    <p>
                        <strong>Place: </strong>&nbsp;
                        {result.location.state}, {result.location.country}
                    </p>
                    <br></br>
                    <br></br>
                </div>
            ))}
        </div>
    )
}
