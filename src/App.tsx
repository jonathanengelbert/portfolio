import React from 'react';
import Nav from './components/Nav/Nav';
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Header from "./components/Header/Header";

// MATERIAL UI CONFIG
import Grid from '@material-ui/core/Grid';

import './appStyles.scss';

function App() {
    return (
        <div className="app">
            <Nav />
            <Header/>
            <main>
                <Grid
                    container
                    direction={"row"}
                    justify={"space-between"}
                    alignItems={"center"}
                    spacing={5}
                >
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'Full Stack mapping app prototype'}
                            stack={'React, Typescript, Node.js, Docker, Postgres, PostGIS, Mapbox, AWS'}
                            image={'mapping-template.png'}
                            shortDescription={'A Fullstack mapping app that allows users to create, update and delete persistent data'}
                            longDescription={`This project is a live example of a fullstack mapping app 
                              template I have been building as an open source contribution. Powered by React and Mapbox
                              in the frontend, the application communicates with an API also built by me, which performs
                              CRUD operations on a Postgres Database with PostGIS extension enabled. Infrastructure 
                              consists of an amplify frontend SPA, databases living in AWS RDS and a node server 
                              running on Docker, in an AWS EC2 instance`}
                            githubLink={'https://github.com/jonathanengelbert/mapping-app-prototype-live-example'}
                            liveLink={'https://project1.jonathanengelbert.com/'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'A musician\'s portfolio'}
                            stack={'React, AWS'}
                            image={'dani-website.png'}
                            shortDescription={`A minimalist musician's web portfolio with custom media players`}
                            longDescription={`This web portfolio was made for a client who wanted a minimalist yet 
                             attractive website. She was hosting a template on SquareSpace and wanted to switch to 
                             something she could truly personalized. The design was largely provided by the client`}
                            githubLink={'https://github.com/jonathanengelbert/dani-portfolio-2019'}
                            liveLink={'https://danielletatarian.com/'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'A musician\'s portfolio'}
                            stack={'React, AWS'}
                            image={'dani-website.png'}
                            shortDescription={`A minimalist musician's web portfolio`}
                            longDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                              eiusmod tempor deserunt mollit anim id est laborum.`}
                            githubLink={'https://github.com/jonathanengelbert/dani-portfolio-2019'}
                            liveLink={'https://danielletatarian.com/'}
                        />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default App;
