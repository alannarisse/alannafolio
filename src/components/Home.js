import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div>
	<h1>Home</h1>
	<Link to="about">
		<p>Go to about page</p>
	</Link>
	</div>
);

export default Home