import Searchbox from './shared/Searchbox.js'

const Home = ({user}) => {
	// const { msgAlert, user } = props
	console.log('props in home', user)

	// DO cards under searchbox, not embedded
	// style for whole HOME HERE

	return (
		
			<>
			
			<Searchbox user={user}/>

			</>
			
		
	)
}

export default Home
