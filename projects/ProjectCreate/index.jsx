import React, { Component } from 'react';

import ProjectForm from '../ProjectFrom'

export default class ProjectCreate extends Component{
	render(){
		let { employees, roles, onSave } = this.props;


		return(
			<main className="page" id="project_create">
				<ProjectForm
					employees={employees}
					roles={roles}
					onSubmit={onSave}
				/>
			</main>
		);
	}
}