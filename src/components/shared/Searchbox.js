// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { searchIt } from '../../api/search.js'
import React, { useState, Fragment, useEffect } from 'react';
import './searchbox.scss'
import RadioToggle from './RadioToggle'
import { getMoviesByTitle } from '../../api/movies.js'
import { getShowsByTitle } from '../../api/shows.js'



const Searchbox = ({radioValue, setRadioValue}) => {
	
	const [searchValue, setSearchValue] = useState('')
	const [user, setUser] = useState('')
	const [toggleRadioValue, setToggleRadioValue]= useState('')
	const [apiResList, setApiResList] = useState([])

	let region = "US"

	useEffect(() => {
		setToggleRadioValue(setToggleRadioValue)
	},[])

	// useEffect(() => {
	// 	setUser(user)
	// },[])

	// // Prior version to search for titles
	// const onSearch = (event) => {
	// 	event.preventDefault()		
		
	// 	searchIt(user,searchValue)
	// 	.then((res) => (console.log('res',res)))
	// 	.catch((error) => {console.log(error)})	
	// }

	const onSearch = (event) => {
	event.preventDefault()
	
		// 1 movie, 2 tv
		if(radioValue === "1"){
			getMoviesByTitle(region,searchValue,user)
			.then((res) => { console.log('movieRES####',res);})
			.catch((error) => {console.log(error)})
		} else if(radioValue === "2"){
			getShowsByTitle(region,searchValue,user)
			.then((res) => { console.log('TvRES####',res);})
			.catch((error) => {console.log(error)})
		}
	}	
	
	return (		
		<div className="searchBarContainer" >
			<Form onSubmit={onSearch}> 
				<Form.Group className="mb-3 searchBarWidth" 
							controlId="searchBox">
					{/* <Form.Label>Email address</Form.Label> */}
					<Form.Control
								type="text" 
								placeholder="search for title"
								onChange={e => setSearchValue(e.target.value)} />
					<Form.Text className="text-muted"> </Form.Text>
				</Form.Group>				
			</Form>
			<RadioToggle			
				user={user}
				onSearch={onSearch}
				radioValue={radioValue}
				setRadioValue={setRadioValue}
			/>
		</div>		
	)
}


export default Searchbox