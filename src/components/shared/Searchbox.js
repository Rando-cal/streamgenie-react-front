// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { searchIt } from '../../api/search.js'
import React, { useState, Fragment, useEffect } from 'react';
import './searchbox.scss'

const Searchbox = (props) => {
	// const { msgAlert, user } = props
	console.log('props in searchbox', props)
	
	const [searchValue, setSearchValue] = useState('')
	const [user, setUser] = useState('')

	useEffect(() => {
		setUser(props.user)

	},[])
	


	const onSearch = (event) => {
		event.preventDefault()
		
		
		searchIt(user,searchValue)
		.then((res) => (console.log('res',res)))
		.catch((error) => {console.log(error)})		

	}

	return (
		
		<div className="searchBarContainer">
			<Form onSubmit={onSearch}> 
				<Form.Group className="mb-3" 
							controlId="searchBox">
					{/* <Form.Label>Email address</Form.Label> */}
					<Form.Control type="text" 
								placeholder="search for title"
								onChange={e => setSearchValue(e.target.value)} />
					<Form.Text className="text-muted">
						
					</Form.Text>
				</Form.Group>
				<Button id="searchSubmit" variant="secondary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
		
		
	)
}

export default Searchbox