import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '../../shared/button';

export default class Project extends Component{
	render(){
		const { project, employees, roles } = this.props;

		
		const members = project.members.map(({ roleId, employeeId })=>({
			role: roles.find(role => role.id == roleId),
			employee: employees.find(employee => employee.id == employeeId)
		}))


		return(
			<main className="page" id="project">
				<header>
					<h1>{ project.title }</h1>
					<p>{ project.description }</p>
				</header>

				<ul className="list">
					{members.map(( {role, employee} ) =>
						<li className="list_item" key={role.id}>
							<div className="list_item__text">
								<span className="list_item__primary-text">{role.title}</span>
								{employee ? <span className="list_item__secondary-text">{employee.name}</span>: ': Place free'}
							</div>
						</li>
					)}
				</ul>
				<footer>
					<Button element={Link} to={`/projects/${project.id}/edit`}>
						Edit Project
					</Button>
				</footer>
			</main>
		);
	}
}