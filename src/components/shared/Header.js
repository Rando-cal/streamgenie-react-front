import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown } from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink'
import { NavItem } from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import Searchbox from './Searchbox'
import { NavDropdown } from 'react-bootstrap'

// import "../../../styles/generalStyle.css"
const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}

const navBarColor = {
	color: 'red'
	// color: '#191308' 
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Item>
		<Nav.Item>
			<Searchbox />
		</Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Item>
		<NavDropdown title="Platforms">
			<NavDropdown.Item href="/movies/US/8">Netflix</NavDropdown.Item>
			<NavDropdown.Item href="/movies/US/9">Amazon Prime</NavDropdown.Item>
			<NavDropdown.Item href="/movies/US/15">Hulu</NavDropdown.Item>
			<NavDropdown.Item href="/movies/US/384">HBO Maax</NavDropdown.Item>
			<NavDropdown.Item href="/movies/US/390">Disney+</NavDropdown.Item>
		</NavDropdown>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md' style={navBarColor} >
		<Navbar.Brand>
			<Link to='/' style={linkStyle}>
				StreamGenie
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
