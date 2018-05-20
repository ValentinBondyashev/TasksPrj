import React, { Component } from 'react';

//import ProjectList from '../../components/ProjectList';

export default class Roles extends Component{
	render(){
		const { roles } = this.props;
		return(
			<main className="page" id="roles">
				<ul className="list roles_list">
					{roles.map(role =>
						<li className="list_item roles_list__item" key={ role.id }>
							<h3>{ role.title }</h3>

							<button className="btn btn-sm">
								<i className="material-icons">edit</i>
							</button>
						</li>
					)}
				</ul>
			</main>
		);
	}
}