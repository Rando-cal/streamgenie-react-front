import React, { useState, Fragment } from 'react'
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
	textDecoration: 'none'}


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
					<Link  to='change-password' style={linkStyle}>
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
												{/* this changes it a bit from ms-auto to ml-auto */}
												{/* my-2 my-sm-0 in Bootstrap ?? */}
					<Nav.Item className="nav-item ms-auto">
						<li clasName="nav-item">
						<Link className="margin-10px nav-link " to='sign-up' style={linkStyle}>Sign Up</Link>
						</li>
					</Nav.Item>
					<Nav.Item class="nav-item m-auto">
						<Nav.Link className="margin-10px nav-link" to='sign-in' style={linkStyle}>Sign In</Nav.Link>
					</Nav.Item>

			</>
		)

		const alwaysOptions = (
			<>

				<Nav.Item>
					<Link className="margin-10px nav-link" to='/favorites' style={linkStyle}>
						Favorites
					</Link>
				</Nav.Item>
				<NavDropdown  className="nav-link"title="Platforms">
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

		return (
			<Navbar bg='primary' variant='dark' expand='md' style={navBarColor} >
				<Nav className="container-fluid">
					<Navbar.Brand>
						<Link className="margin-10px" to='/' style={linkStyle}>
							StreamGenie
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='container-fluid ml-auto'>
							{user && (
								<span className='navbar-text mr-2'>Welcome, {user.userName}</span>
							)}
							{alwaysOptions}
							{user ? authenticatedOptions : unauthenticatedOptions}
						</Nav>
					</Navbar.Collapse>
				</Nav>
			</Navbar>
		)

	}

export default Header
