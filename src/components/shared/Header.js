import React, { useState,Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown } from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink'
import { NavItem } from 'react-bootstrap/'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Searchbox from './Searchbox'
import { NavDropdown } from 'react-bootstrap'
import IndexMoviesByPlatform from '../movies/IndexMoviesByPlatform'

// import "../../../styles/generalStyle.css"
const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}


const navBarColor = {
	color: 'red'
	// color: '#191308' 
}


// PAY ATTENTION TO CALLBACK FUNCTION and whether it is a () or {} -----> implicit vs explicit return
const Header = 
	({ 
	user,
	radioValue,
	setRadioValue,
	setSearchValue,
	searchValue,
	searchIndexMovieList,
	setSearchIndexMovieList
	
	}) => {

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
				<Searchbox 
					radioValue={radioValue}
					setRadioValue={setRadioValue}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					searchIndexMovieList={searchIndexMovieList}
					setSearchIndexMovieList={setSearchIndexMovieList}
				/>
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
			<NavDropdown.Item>
				<Link to={{ pathname: '/movies/platform/8' }} >
					Netflix
				</Link>
			</NavDropdown.Item>
			<NavDropdown.Item >
				<Link to={{ pathname: '/movies/platform/384' }} >
					Hbo Max
				</Link>
			</NavDropdown.Item>
			<NavDropdown.Item >
				<Link to={{ pathname: '/movies/platform/119' }} >
					Amazon Prime
				</Link>
			</NavDropdown.Item>
			<NavDropdown.Item >
				<Link to={{ pathname: '/movies/platform/15' }} >
					Hulu
				</Link>
			</NavDropdown.Item>
			<NavDropdown.Item >
				<Link to={{ pathname: '/movies/platform/337' }} >
					Disney+
				</Link>
			</NavDropdown.Item>
		</NavDropdown>
	</>
)

	return(
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

}

export default Header
