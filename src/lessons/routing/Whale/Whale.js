import { Switch, Route, useRouteMatch } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

import Beluga from './Beluga'
import Blue from './Blue'

const Whale = () => {
	const { path } = useRouteMatch()
	// const { type } = useParams()
	
	// const { search } = useLocation()
	// const match = search.match(/type=(.*)/)
	// const type = match?.[1]

	return (
		<>
			<h3>Whale</h3>
			<Switch>
				<Route path={`${path}/beluga`}>
					<Beluga />
				</Route>
				<Route path={`${path}/blue`}>
					<Blue />
				</Route>
			</Switch>
		</>
	)
}

export default Whale
