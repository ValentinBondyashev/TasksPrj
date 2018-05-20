import React, { Component } from 'react';

import ProjectForm from '../ProjectFrom'

export default class ProjectEdit extends Component{
	render(){
		let { project, employees, roles, onSave } = this.props;


		return(
			<main className="page" id="project_edit">
				<ProjectForm
					project={project}
					employees={employees}
					roles={roles}
					onSubmit={onSave}
				/>
			</main>
		);
	}
}