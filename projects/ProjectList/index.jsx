import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function ProjectList({ projects }){
	return(
		<ul className="list project_list">
			{projects.map(project =>
				<li key={project.id} className="list_item project_list__item">
					<Link to={`/projects/${project.id}`} className="list_item__text">
						<h3 className="list_item__primary-text">{project.title}</h3>
						<p className="list_item__secondary-text">{project.description}</p>
					</Link>
					<span className="label label-success">{project.status}</span>
				</li>
			)}  
        </ul>
	);
}