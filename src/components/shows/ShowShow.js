import { useState, useEffect } from "react";
import '../../index.css'

import { useParams, useNavigate } from 'react-router-dom'

import { Container, Card, Button } from 'react-bootstrap'
import LoadingScreen from '../shared/LoadingScreen'
import { getOneShow } from '../../api/shows.js'
import messages from '../shared/AutoDismissAlert/messages'
import { addToFavorites, removeFromFavorites } from "../../api/favorites";

import './ShowShow.css'

//the movie's id comes from the 3rd party API

const ShowShow = (props) => {

    const backDropUrl = "https://image.tmdb.org/t/p/w500/"

    const [show, setShow] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()
    const { user, msgAlert } = props

    useEffect(() => {
        getOneShow(id)
            .then(res => { return setShow(res.data.show), console.log("this is res.data.show", res.data.show) })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting show',
                    message: messages.getContentFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [])


    //function to remove show from the favorites list
    const removeShowFromFavorites = () => {
        removeFromFavorites(user, show.id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeContentSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => { navigate('/') })
            // on failure send a failure message
            .catch(err => {
                msgAlert({
                    heading: 'Error removing show',
                    message: messages.removeContentFailure,
                    variant: 'danger'
                })
            })
    }


    //function to add show to favorites
    const addToShowToFavorites = () => {
        addToFavorites(user, show)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.addContentSuccess,
                    variant: 'success'
                })
            })

            .then(() => { navigate('/') })

            .catch(err => {
                msgAlert({
                    heading: 'Error adding movie to favorites',
                    message: messages.removeContentFailure,
                    variant: 'danger'
                })
            })
    }

    if (!show) {
        return <LoadingScreen />
    }

    return (
        <Container className="fluid">
        <Card>
            <Card.Header>{show.original_title}</Card.Header>
            <Card.Body><img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}></img></Card.Body>
            <Card.Footer>
                <Button onClick={() => { addToShowToFavorites() }}
                    className="m-2">
                    Add To Favorites
                </Button>
            </Card.Footer>
        </Card>
    </Container>
    )



}

export default ShowShow