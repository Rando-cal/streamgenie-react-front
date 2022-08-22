import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { searchIt } from '../../api/search.js'
import React, { useState, Fragment } from 'react';

const Searchbox = (props) => {
	// const { msgAlert, user } = props
	console.log('props in searchbox', props)
	
	const [searchValue, setSearchValue] = useState('')
	const [user, setUser] = useState('')

	setUser(props.user)


	// const onSearch = (event) => {
	// 	event.preventDefault()

	// 	searchIt(user)
	// 	// searchIt(user,searchValue)
	// 	.then((res) => (console.log('res',res)))
	// 	.catch
	// 	// .catch((error) => {
	// 	// 	// msgAlert({
	// 	// 	// 	heading: 'Incorrect search: ' + error.message,
	// 	// 	// 	message: messages.signInFailure,
	// 	// 	// 	variant: 'danger',
	// 	// 	})
	// 	// })

	// }
	//	{/* <Form onSubmit={onSearch}> */}
	return (
		<>
		<Form>
      		<Form.Group className="mb-3" 
					    controlId="searchBox">
        		{/* <Form.Label>Email address</Form.Label> */}
        		<Form.Control type="text" 
				        	  placeholder="search for title"
							  onChange={e => setSearchValue(e.target.value)} />
        		<Form.Text className="text-muted">
          			
        		</Form.Text>
      		</Form.Group>
			<Button variant="secondary" type="submit">
        		Submit
      		</Button>
		</Form>
		
		</>
	)
}

export default Searchbox