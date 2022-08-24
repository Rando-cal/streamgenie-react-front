import { useEffect } from 'react'
import Searchbox from './shared/Searchbox.js'
import { getTopTitles } from '../api/getTopTitles'
import React, { useState } from 'react'

const Home = ({ user }) => {
	// const { msgAlert, user } = props
	console.log('props in home', user)

	const [topTitlesList, setTopTitlesList] = useState([])

	// Do the cards under searchbox, not embedded
	// style for whole HOME HERE

	// get top movies from netlix or whatever
	useEffect(() => {
		getTopTitles()
			.then(res => {
				console.log("this is res", res)
			})
			.catch((error) => { console.log(error) })
	})


	return (

		<>

			<Searchbox user={user} />

		</>


	)
}

export default Home
