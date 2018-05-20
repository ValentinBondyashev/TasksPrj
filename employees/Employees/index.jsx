import React, { Component } from 'react';

import Button from '../../shared/button'
//import ProjectList from '../../components/ProjectList';

export default class Employees extends Component{
	render(){
		const { employees } = this.props;
		return(
			<main className="page" id="employees">
				<ul className="list employees_list">
					{employees.map(employee =>
						<li className="list_item employee_list__item" key={employee.id}>
							<h3>{ employee.name }</h3>
							<Button small primary>
								<i className="material-icons">edit</i>
							</Button>
						</li>
					)}
				</ul>
			</main>
		);
	}
}