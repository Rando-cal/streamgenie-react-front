import { useState, useEffect } from "react";
import '../../public/index.css'

import { useParams, useNavigate } from 'react-router-dom'

import { Container, Card, Button } from 'react-bootstrap'
import LoadingScreen from '../shared/LoadingScreen'
import { getOneMovie } from '../../api/movies.js'
import messages from '../shared/AutoDismissAlert/messages'
import { addToFavorites, removeFromFavorites } from "../../api/favorites";

//the movie's id comes from the 3rd party API

const ShowMovie = (props) => {
    const [movie, setMovie] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()
    const { user, msgAlert } = props

    useEffect(() => {
        getOneMovie(id)
            .then(res => { return setMovie(res.data.movie), console.log("this is res.data.movie", res.data.movie) })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting movie',
                    message: messages.getContentFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [])


    //function to remove movie from the favorites list
    const removeMovieFromFavorites = () => {
        removeFromFavorites(user, movie.id)
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
                    heading: 'Error removing movie',
                    message: messages.removeContentFailure,
                    variant: 'danger'
                })
            })
    }


    //function to add movie to favorites
    const addToMovieToFavorites = () => {
        addToFavorites(user, movie)
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

    if (!movie) {
        return <LoadingScreen />
    }

}