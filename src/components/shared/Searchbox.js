import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Searchbox = (props) => {
	// const { msgAlert, user } = props
	console.log('props in searchbox', props)

	return (
		<>
		<Form>
      		<Form.Group className="mb-3" 
					    controlId="formBasicEmail">
        		<Form.Label>Email address</Form.Label>
        		<Form.Control type="email" 
				        	  placeholder="Enter email" />
        		<Form.Text className="text-muted">
          			
        		</Form.Text>
      		</Form.Group>

			<Button variant="primary" type="submit">
        		Submit
      		</Button>
		</Form>
		
		</>
	)
}

export default Searchbox