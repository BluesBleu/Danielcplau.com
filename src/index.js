import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

//routes
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';
import Site from '../src/components/Site';
import Projects from '../src/components/Projects';
import About from '../src/components/About';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={Site}>
			<IndexRoute component={Home} />
			<Route path='contact' component={Contact} />
		</Route>
		<Route path='/projects' component={Projects} />
	</Router>
	, document.querySelector('.container'));