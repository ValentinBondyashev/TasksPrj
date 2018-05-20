import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Button from '../../shared/button';
import ProjectMemberList from '../ProjectMemberList';

const PROJECT_STATUSES = [
	{
		value: 'planned',
		title: 'Planned'
	},
	{
		value: 'active',
		title: 'Active'
	},
	{
		value: 'completed',
		title: 'Completed'
	},
];

export default class ProjectFrom extends Component{
	state = {
		id: this.props.project ? this.props.project.id : '',
		title: this.props.project ? this.props.project.title : '',
		description: this.props.project ? this.props.project.description : '' ,
		status: this.props.project ? this.props.project.status : '' ,
		members:this.props.project ? this.props.project.members : [],
	};

	handleChange = ({ target }) => this.setState({ [target.id]: target.value })

	handleRoleCheckboxChange = ({ target: { value, checked } }) => {
		this.setState( state => ({
			...state, 
			members: checked ?
				[...state.members, { roleId: value }] :
				state.members.filter(member => member.roleId !== value)
		}));
	}
	
	handleSubmit = event =>{
		event.preventDefault();

		let project = {
			title: this.state.title,
			description: this.state.description,
			status: this.state.status,
			members: this.state.members
		};

		this.props.onSubmit(this.state.id, project);
	};

	render(){
		let { roles, employees, onSubmit } = this.props;
		let { title, description, status, members } = this.state;

		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input 
						id="title"
						onChange={ this.handleChange } 
						type="text" 
						className="form-control" 
						placeholder="Name project" 
						value={title}/>
				</div>
				<div className="form-group">
				<textarea 
					id="description"
					className="form-control border-input" 
					placeholder="Description project" 
					rows="3"  
					value={description}
					onChange={this.handleChange}
				/>
				</div>
				<div className="form-group">
				<select id="status" className="form-control" onChange={this.handleChange}>
					{PROJECT_STATUSES.map(status => 
						<option key={status.value} value={status.value}>
							{status.title}
						</option>
					)}
				</select>
				</div>

				<ProjectMemberList
					members={members}
					employees={employees}
					roles={roles}
					onCheckboxChange={this.handleRoleCheckboxChange}
				/>
				
				<Button type="submite" text={this.props.project ? 'Save' : 'Create'}/>
				<Button text="Abolish" element={Link} to={this.props.project ? `/projects/${this.props.project.id}`: '/project' }/>
				
			</form>
		)
	}
}
	


		