import React, { Fragment, useState } from 'react'

import { signUp, signIn } from '../../../api/auth'
import messages from '../../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Cards = () => {

    const [userName, setUserName] = useState('')
    const [region, setRegion] = useState('')
    
    const songsToDisplay = returnedSongList.map(aSong => (

        <Card className="col-md-3" style={{ width: '18rem', margin: 5, backgroundColor: "#d9dcd6"}} key={aSong.url}>
            {/* <Card.Header style={lb}><strong>{ aSong.name }</strong></Card.Header> */}
                <h2 style={{ textAlign: 'center'}} >{ aSong.name }</h2>
                <Card.Body style={{ backgroundColor: "#d9dcd6"}} >
                    <Card.Text>
                        <div>{ aSong.artist }</div> 
                        <img style={{width: '15rem'}} src={ aSong.image[3]['#text'] } />
                        {/* <div>{ aSong.mbid }</div> */}
                        <Form onSubmit={(e) => {addToCartHandler(e,aSong,user)}} className="d-flex">
                            <Button className="blue" variant="primary" type = "submit" style={{marginTop: '6px'}} >
                                Add to Cart        
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
        </Card>

    ))








    return (

        <Fragment>
        
        </Fragment>

    )
}

