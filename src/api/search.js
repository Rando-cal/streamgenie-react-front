import apiUrl from '../apiConfig'
import axios from 'axios'


// what kind of http request ???
export const searchIt = (user,searchValue) => {
    console.log('%$%$%$%%$%',user,searchValue);
	return axios({
		method: 'GET',
		url: apiUrl + '/movies/(:user)/:searchValue'
			
		
	})
}