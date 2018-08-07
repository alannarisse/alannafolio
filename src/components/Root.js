import React from 'react'
import { Link } from 'react-router-dom'


const Root = (props) => (
	<div>
		<ul className="navList">
			<li><Link to="/">Home</Link></li>
			<li><Link to="todo">Todo List</Link></li>
			<li><Link to="about">About</Link></li>
		</ul>
		{props.children}
	</div>
);

export default Root