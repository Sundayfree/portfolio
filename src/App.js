import React, { Component } from 'react';
import './App.css';
import SkillItem from './SkillItem';

import CardItem from './CardItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { flexbox } from '@material-ui/system';
const githubRepoUrl = 'https://api.github.com/users/Sundayfree/repos';
class App extends Component {
  // Initialize state
  state = { gitHubProjects: [] };

  // On load
  componentDidMount() {
    this.getProjects();
  }

  // Set state with our projects
  getProjects = () => {
    fetch(githubRepoUrl)
      .then(res => res.json())
      .then(data => {
        const gitHubProjects = data.map(project => {
          return {
            name: project.name,
            html_url: project.html_url,
            description: project.description
          };
        });
        console.log(gitHubProjects);
        this.setState({ gitHubProjects });
      });
  };

  render() {
    const { gitHubProjects } = this.state;

    return (
      <div className="App">
        <div className="header">
          <div className="comment">
            <SkillItem name="Java/Spring Boot" width="85%" />
            <SkillItem name="JavaScript" width="83%" />
            <SkillItem
              name="React.js/Redux.js/React Native/Node.js"
              width="79%"
            />
            <SkillItem name="golang" width="70%" />
            <SkillItem name="HTML5/CSS3" width="75%" />
            <SkillItem name="MySQL/Redis/MongoDB" width="75%" />

            <SkillItem name="Python" width="65%" />
          </div>
          <div className="profile">
            <h2
              style={{
                fontFamily: 'Varela Round',
                color: '#fff'
              }}
            >
              Hi, My name is Gary Liu
            </h2>

            <h3
              style={{
                fontFamily: 'Varela Round',
                color: '#fff'
              }}
            >
              I'm a Web developer
            </h3>

            <p
              style={{
                fontFamily: 'Varela Round',
                color: '#fff',
                fontSize: 16
              }}
            >
              Email:liuqy198811@gmail.com
            </p>
            <p
              style={{
                fontFamily: 'Varela Round',
                color: '#fff',
                fontSize: 16
              }}
            >
              Phone: +0220 130 858
            </p>
          </div>
        </div>
        <div className="container">
          <div className="title">
            <h2 style={{ fontFamily: 'Varela Round' }}>
              Here are a few of my projects:
            </h2>
          </div>
          <div className="content">
            <div className="cards">
              {gitHubProjects.length ? (
                gitHubProjects.map((project, index) => (
                  <CardItem
                    key={project.name}
                    title={project.name}
                    description={project.description}
                    url={project.html_url}
                  />
                ))
              ) : (
                <div className="spinner">
                  <CircularProgress />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
