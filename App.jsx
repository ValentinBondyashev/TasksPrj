import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch , Redirect, withRouter}  from 'react-router-dom';
import './App.css';


import Nav from './shared/Nav';
import Header from './shared/Header';
import Projects from './projects/Projects';
import Project from './projects/Project';
import ProjectCreate from './projects/ProjectCreate';
import ProjectEdit from './projects/ProjectEdit';
import Employees from './employees/Employees';
import Roles from './roles/Roles';



class App extends Component {
  state = {
    projects: this.props.state.projects,
    employees: this.props.state.employees,
    roles: this.props.state.roles
  };

  updataProject = (id, data) => {
    const projects = this.state.projects.map(project  => {
      if(project.id == id){
        return {
          ...project, 
          ...data
        };
      }else {
        return project;
      }
    });

    this.setState( {projects} );
  };

  createProject = (_, data) => {
    console.log(data);
    let id = Date.now();
    data.id = id;
    this.setState( state => ({projects : [...state.projects, data]}) );
  };

  render() {
    const { projects, employees, roles } = this.state;

    return (
      <Router>
        <div className="app container">
          <Header title="ReactTeam"/>
          <div className="card">
            <Nav/>
            <Switch>
              <Route exact path="/" component={ props =>  <Redirect to='/projects'/> }/>
              <Route exact path="/projects" component={ props => <Projects projects={projects}/> }/>
              <Route exact path="/projects/create" component={ props => 
                <ProjectCreate 
                  employees={employees} 
                  roles={roles}
                  onSave={this.createProject}
                />} 
              />
              <Route exact path="/projects/:id" component={ props => 
                <Project 
                  project={projects.find(p => p.id == props.match.params.id)} 
                  employees={employees} 
                  roles={roles}
                />} 
              />
              <Route  path="/projects/:id/edit" component={ props => 
                <ProjectEdit 
                  project={projects.find(p => p.id == props.match.params.id)} 
                  employees={employees} 
                  roles={roles}
                  onSave={this.updataProject}
                />}
              />
              <Route  path="/employees" component={ props => <Employees employees={employees}/> }/>
              <Route  path="/roles" component={ props => <Roles roles={roles}/> }/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
