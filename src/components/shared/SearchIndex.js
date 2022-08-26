import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { searchIt } from '../../api/search.js'
import React, { useState, Fragment, useEffect } from 'react';
import RadioToggle from './RadioToggle'
import { getMoviesByTitle } from '../../api/movies.js'
import { getShowsByTitle } from '../../api/shows.js'
import Cards from '../shared/Cards/Cards'



const SearchIndex = ({user, 
                    msgAlert,
                    radioValue,
                    setRadioValue,
                    searchValue,
                    setSearchValue,
                    searchIndexMovieList
                    }) => {
    	// console.log('SearchIndex.js:searchIndexMovieList:',searchIndexMovieList);
    
    // useEffect here of Whatever,then put searchIndexMovieList in the dependency
    // array to update searchIndexMovieList
    

    return(
        <>
            <div>
                <Cards topTitlesList={searchIndexMovieList}/>

            </div>
        </>
    )
}



export default SearchIndex