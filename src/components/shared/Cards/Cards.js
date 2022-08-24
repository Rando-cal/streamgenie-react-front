import React, { Fragment, useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import { v4 as uuid } from 'uuid'
import Card from 'react-bootstrap/Card';

const Cards = ({topTitlesList}) => {

    console.log('topTitlesList from PROPS:',topTitlesList);
    // console.log('~~~~~~~~~~~~~~~~~~~~~~:',topTitlesList[0].poster_path);

    const id = uuid()

    const addFavorite = () => {
        console.log('in addFavorite:cards.js');
    }

    const [userName, setUserName] = useState('')
    const [region, setRegion] = useState('')
    const [topTitles,setTopTitles] = useState([])

    // console.log('topTitlesList[0] ******',topTitlesList[0].poster_path)


    // WEIRDNESS with the topTitles setting and showing what we want. Save file to refresh
    // useEffect(() => {		
    //     console.log('in USE-EFFEFCT: Cards.js');	
    //     setTopTitles(topTitlesList)
	// },[])

    console.log('topTitles after useEffect:',topTitles)

    // let aPoster = 'https://image.tmdb.org/t/p/w500' + topTitles[0]
    // console.log('aPoster:^:',aPoster)

    // console.log('topTitlesList==>',topTitlesList[0].poster_path)

    const backDropUrl = "https://image.tmdb.org/t/p/w500/"

    const titleCards = topTitlesList.map((aTitle) => (
 
        <Link to={`/movie/${aTitle.id}`}>
        <div className= "width16" key={aTitle.id}>
                <a>
                 <img className= "width16 p-20px" src={backDropUrl + aTitle.poster_path} />
                </a> 
        </div>   
        </Link>
    ))

    console.log('titleCards',titleCards);

    return (
        <>
        <div className= "BG-black">
           <div className= "card-container">{titleCards}</div>
        </div>
        </>
    )
}

export default Cards

