import apiUrl from '../apiConfig'
import axios from 'axios'

let region = "/US" 

// for getting netflix top 30 for homepage
export const getTopTitles = () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/movies' + region,		
	})
}