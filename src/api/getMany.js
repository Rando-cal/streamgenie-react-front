import apiUrl from '../apiConfig'
import axios from 'axios'

// for getting netflix top 30 for homepage
export const signUp = (credentials) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/sign-up',
		data: {
			credentials: {
				email: credentials.email,
				password: credentials.password,
				password_confirmation: credentials.passwordConfirmation,
                userName: credentials.userName,
                region: credentials.region
			},
		},
	})
}