import React, { Component } from 'react';

import ProjectList from '../ProjectList';

export default class Projects extends Component{
	render(){
		const { projects } = this.props;
		return(
			<main className="page" id="projects">
				<ProjectList projects={projects}/>
			</main>
		);
	}
}