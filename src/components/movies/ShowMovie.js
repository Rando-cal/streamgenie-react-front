import { useState, useEffect } from "react";
import '../../index.css'

import { useParams, useNavigate } from 'react-router-dom'

import { Container, Card, Button } from 'react-bootstrap'
import LoadingScreen from '../shared/LoadingScreen'
import { getOneMovie } from '../../api/movies.js'
import messages from '../shared/AutoDismissAlert/messages'
import { getFavorites, addToFavorites, removeFromFavorites } from "../../api/favorites";

//the movie's id comes from the 3rd party API

const ShowMovie = (props) => {
    const [movie, setMovie] = useState(null)
    const [favorites, setFavorites] = useState(null)
    // const [updatedFavorites, setupdatedFavorites] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()
    const { user, msgAlert } = props
    //declare boolean to refresh page after add or remove favorites
    let updatedFavorites = false

    //we need a boolean variable to flip whenever we add or remove a show. CHECK
    // this variable will go inside the useeffect dependency array CHECK
    //Need to import favorites list in use effect CHECK
    //We need to check if the current content being shown is already in favorites list. 
    //Write function to check 
    //conditionally render button based on if content is in the list or not. Compare id?

    //getFavorites(user)

    // useEffect(() => {
    //     getOneMovie(id)
    //         .then(res => setMovie(res.data.movie))
    //         .catch(err => {
    //             msgAlert({
    //                 heading: 'Error getting movie',
    //                 message: messages.getContentFailure,
    //                 variant: 'danger'
    //             })
    //             navigate('/')
    //             //navigate back to the home page if there's an error fetching
    //         })
    // }, [updatedFavorites])

    useEffect(() => {
        getOneMovie(id)
            .then(res => {

                const theMovie = res.data.movie
                console.log("movie after getOnemovie:", theMovie)
                getFavorites(user)
                    .then(res => {
                        console.log("theMovie after getFavorites:", theMovie)
                        console.log("favorites after getFavorites:", res.data.favorites)
                        setFavorites(res.data.favorites)
                        setMovie(theMovie)
                    })
                    .catch(err => {
                        msgAlert({
                            heading: 'Error getting favorites',
                            message: messages.getContentFailure,
                            variant: 'danger'
                        })
                        navigate('/')
                        //navigate back to the home page if there's an error fetching
                    })
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting favorites',
                    message: messages.getContentFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [updatedFavorites])


    //Function to check if movie is in favorites
    //first we map favorites to create an array of IDs in favorites CHECK
    //then we compare movie.contentId to [favorites.contentID]
    //return true is there is a match, false if not
    console.log("This is favorites:", favorites)
    if (user.username !== '') {
        const favoritesIdArray = favorites.map((favorites) => {
            return favorites.contentId
        })
        console.log("This is favoritesIdArray:", favoritesIdArray)
        console.log("this is movie.contentId:", movie.contentId)
        const checkFavorites = () => {
            if (favoritesIdArray.includes(movie.contentId)) {
                return true
            } else {
                return false
            }
        }

    }





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
            .then(() => { updatedFavorites = !updatedFavorites })
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
    const addMovieToFavorites = () => {
        addToFavorites(user, movie)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.addContentSuccess,
                    variant: 'success'
                })
            })

            .then(() => { updatedFavorites = !updatedFavorites })

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

    return (
        <Container className="fluid">
            <Card>
                <Card.Header>{movie.title}</Card.Header>
                <Card.Body><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img></Card.Body>
                <Card.Footer>
                    {(checkFavorites()) ?
                        (<Button onClick={() => { removeMovieFromFavorites() }}
                            className="m-2">
                            Remove From Favorites
                        </Button>) :
                        (<Button onClick={() => { addMovieToFavorites() }}
                            className="m-2">
                            Add To Favorites
                        </Button>)
                    }



                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ShowMovie