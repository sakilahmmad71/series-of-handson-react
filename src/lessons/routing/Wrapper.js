import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Manatee from './Manatee/Manatee'
import Narwhal from './Narwhal/Narwhal'
import Whale from './Whale/Whale'

const Wrapper = () => {
	return (
		<>
			<h1>Animal World!</h1>

			<BrowserRouter>
				<ul>
					<li><Link to="/manatee">Manatee</Link></li>
					<li><Link to="/narwhal">Narwhal</Link></li>
					<li><Link to="/whale">Whale</Link></li>
					<li><Link to="/whale/beluga">Beluga Whale</Link></li>
					<li><Link to="/whale/blue">Blue Whale</Link></li>
				</ul>

				<Switch>
					<Route path='/manatee'>
						<Manatee />
					</Route>
					<Route path='/narwhal'>
						<Narwhal />
					</Route>
					<Route path='/whale'>
						<Whale />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default Wrapper
