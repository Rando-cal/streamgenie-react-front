import React, { Fragment, useState, Card, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import { v4 as uuid } from 'uuid'




const Cards = ({topTitlesList}) => {

    console.log('topTitlesList in PROPS:',topTitlesList);

    const id = uuid()

    const addFavorite = () => {
        console.log('in addFavorite:cards.js');
    }

    const [userName, setUserName] = useState('')
    const [region, setRegion] = useState('')
    const [topTitles,setTopTitles] = useState([])

    // console.log('topTitlesList[0] ******',topTitlesList[0].poster_path)


    // WEIRDNESS with the topTitles setting and showing what we want. Save file to refresh
    useEffect(() => {		
        console.log('in USE-EFFEFCT: Cards.js');	
        setTopTitles(topTitlesList)
	},[])

    console.log('@#@#@#@#@@:',topTitles)

    let aPoster = 'https://image.tmdb.org/t/p/w500' + topTitles[0]
    console.log('aPoster:^:',aPoster)


    // const titlesToDisplay = topTitlesList.map(aTitle => (

    //     <Card  key={id}>
    //         {/* <Card.Header style={lb}><strong>{ aSong.name }</strong></Card.Header> */}
    //             {/* <Card.Body style={{ backgroundColor: "#d9dcd6"}} > */}
    //                 {/* <Card.Text> */}
    //                     <div className="whiteColor">CARD HERE</div> 
    //                     <img style={{width: '15rem'}}  />
    //                     {/* <div>{ aSong.mbid }</div> */}
    //                     <Form onSubmit={(e) => {addFavorite(e,aTitle,userName)}} className="d-flex">
    //                         <Button variant="primary" type = "submit" style={{marginTop: '6px'}} >
    //                             Add to Cart        
    //                         </Button>
    //                     </Form>
    //                 {/* </Card.Text> */}
    //             {/* </Card.Body> */}
    //     </Card>

    // ))


    return (
        <div className= "card-container BG-black">

            {/* {titlesToDisplay}           */}

        </div>

    )
}

export default Cards

