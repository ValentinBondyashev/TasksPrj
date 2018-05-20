import React from 'react';
import { NavLink }  from 'react-router-dom';

export default function Nav(){
	return(
		<div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
                <ul id="tabs" className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link" activeClassName="active" data-toggle="tab" role="tab">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/employees" className="nav-link" data-toggle="tab" activeClassName="active" role="tab">Peoples</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/roles" className="nav-link" data-toggle="tab" activeClassName="active" role="tab">Roles</NavLink>
                    </li>
                </ul>
            </div>
        </div>
	);
}