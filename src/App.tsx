import React from 'react';
import Nav from './components/Nav/Nav';
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// ASSETS
import daniImg from './assets/images/cards/dani-website.png';
import mapping3dPic from './assets/images/cards/3d_mapping_pic.png';
import mockStorePic from './assets/images/cards/mock-store.png';

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
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    spacing={5}
                >
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'E-Commerce Mock Store'}
                            stack={'React, AWS, Node.js, SASS'}
                            image={mockStorePic}
                            shortDescription={`An E-Commerce website for a mock store, built with React`}

                            longDescription={`(Under construction, completion estimated 07/25/2020). This fullstack 
                            website has its pictures and assets served from a MongoDB database, with a Node.js backend. 
                            Built with React and Bootstrap in the front-end`}
                            githubLink={'https://github.com/jonathanengelbert/mock-store'}
                            liveLink={'https://mock-store.jonathanengelbert.com'}
                        />
                    </Grid>
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
                            title={'A musician\'s portfolio'}
                            stack={'React, AWS'}
                            image={daniImg}
                            shortDescription={`A minimalist musician's web portfolio`}
                            longDescription={`This web portfolio was made for a client who wanted a minimalist yet 
                             something she could truly personalized. The design was largely provided by the client`}
                            githubLink={'https://github.com/jonathanengelbert/dani-portfolio-2019'}
                            liveLink={'https://danielletatarian.com/'}
                        />
                    </Grid>
                </Grid>
            </main>
            <Footer />
        </div>
    );
}

export default App;
