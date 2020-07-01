import React from 'react';
import Nav from './components/Nav/Nav';
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Header from "./components/Header/Header";

// ASSETS
import mappingTemplateImg from './assets/images/cards/mapping-template.png';
import daniImg from './assets/images/cards/dani-website.png';
import mapping3dPic from './assets/images/cards/3d_mapping_pic.png';

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
                            title={'3D Mapping Example'}
                            stack={'React, AWS, Cesium, Blender'}
                            image={mapping3dPic}
                            shortDescription={`3D mapping example with building assets split into floors`}

                            longDescription={`Clicking on floors retrieves data for each particular floor and drop 
                            downs allow user to see all floors and/or buildings that match a certain criteria. All data 
                            is fictitious except for building names. Building models acquired from the City of New York 
                            and OpenStreet Maps`}
                            githubLink={'https://github.com/jonathanengelbert/cesium-react-example'}
                            liveLink={'https://3d-mapping-example.jonathanengelbert.com/'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'Full Stack mapping app prototype'}
                            stack={'React, Typescript, Node.js, Docker, Postgres, PostGIS, Mapbox, AWS'}
                            image={mappingTemplateImg}
                            shortDescription={'A Full stack mapping component that allows users to create, update and delete ' +
                            'persistent data'}
                            longDescription={`This project is a live example of a full stack mapping component 
                              template I have been building as an open source contribution. Powered by React and Mapbox
                              in the frontend, the application communicates with an API also built by me, which performs
                              CRUD operations on a Postgres Database with PostGIS extension enabled. Infrastructure 
                              consists of an amplify frontend SPA, databases living in AWS RDS and a node server 
                              running on Docker, in an AWS EC2 instance`}
                            githubLink={'https://github.com/jonathanengelbert/mapping-app-prototype-live-example'}
                            liveLink={'https://crud-mapbox-example.jonathanengelbert.com/'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'A musician\'s portfolio'}
                            stack={'React, AWS'}
                            image={daniImg}
                            shortDescription={`A minimalist musician's web portfolio`}
                            longDescription={`This web portfolio was made for a client who wanted a minimalist yet 
                             attractive website. She was hosting a template on SquareSpace and wanted to switch to 
                             something she could truly personalized. The design was largely provided by the client`}
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
