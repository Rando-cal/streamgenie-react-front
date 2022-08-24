import React, { Fragment, useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import { v4 as uuid } from 'uuid'
import Card from 'react-bootstrap/Card';




const Cards = ({topTitlesList}) => {

    console.log('topTitlesList from PROPS:',topTitlesList);

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

    let aPoster = 'https://image.tmdb.org/t/p/w500' + topTitles[0]
    console.log('aPoster:^:',aPoster)

    // console.log('topTitlesList==>',topTitlesList[0].poster_path)

    const titleCards = topTitlesList.map((aTitle) => {

        <Card style={{ width: '18rem' }} key={aTitle.id}>
            <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
                <Card.Title>{aTitle.backdrop_path}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    
    })

    console.log('titleCards');

    return (
        <div className= "card-container BG-black">
            {titleCards}
        </div>

    )
}

export default Cards

