import { useState, useEffect } from "react";
import '../../index.css'

import { useParams, useNavigate, Link } from 'react-router-dom'

import { Container, Card, Button } from 'react-bootstrap'
import LoadingScreen from '../shared/LoadingScreen'
import { getPopularMoviesByPlatform } from '../../api/movies.js'
import messages from '../shared/AutoDismissAlert/messages'

//card container style
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const IndexMoviesByPlatform = (props) => {
    const { msgAlert, user, platformId } = props
    const [movies, setMovies] = useState(null)
    const [error, setError] = useState(false)



    useEffect(() => {
        getPopularMoviesByPlatform(user.region, platformId)
            .then(res => setMovies(res.data.movies))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Movies',
                    message: messages.getContentFailure,
                    variant: 'danger',
                })
                console.log(err)
                setError(true)
            })
    }, [])

    if (!movies) {
        return <LoadingScreen />
    }

    const movieCards = movies.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} key={index}>
            <Card>
                <Card.Body>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                </Card.Body>
            </Card>
        </Link>
    ))

    return (
        <div style={cardContainerStyle}>
            {movieCards}
        </div>
    )
}

export default IndexMoviesByPlatform