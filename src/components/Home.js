import { useEffect } from 'react'
import Searchbox from './shared/Searchbox.js'
import { getTopTitles } from '../api/getTopTitles'
import React, { useState } from 'react'
import Cards from './shared/Cards/Cards'


const Home = ({ user }) => {
	// const { msgAlert, user } = props
	console.log('props in home', user)

	const [topTitlesList, setTopTitlesList] = useState([])

	// Do the cards under searchbox, not embedded
	// style for whole HOME HERE

	// get top movies from netlix or whatever
	useEffect(() => {
		getTopTitles()

			.then((res) => { setTopTitlesList(res.data.results) })
			.catch((error) => { console.log(error) })
	}, [])

	return (

		<>

			{/* <Searchbox user={user}/> */}

			<div> card between this </div>
			<Cards topTitlesList={topTitlesList} />
			<div> and this </div>

		</>



	)
}

export default Home
