import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	<Router>
		<div className="container">
			<header>
				<Route path={"/"} component={Root} />
			</header>
			<main>
				<Route exact path={"/"} component={Home} />
				<Route path={"/about"} component={About} />
				<Route path={"/todo"} component={App} />
			</main>
		</div>
	</Router>, 

	document.getElementById('root'));
	registerServiceWorker();
