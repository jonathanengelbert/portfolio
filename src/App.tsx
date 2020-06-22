import React, {useState} from 'react';
import Nav from './components/Nav/Nav';
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/Contact/ContactForm";

// MATERIAL UI CONFIG
import Grid from '@material-ui/core/Grid';

import './appStyles.scss';


function App() {
    const [formOpen, setFormOpen] = useState<boolean>(false);
    return (
        <div className="app">
            <Nav
                setFormOpen={setFormOpen}
                formOpen={formOpen}
            ></Nav>
            <Header/>
            <ContactForm
                setFormOpen={setFormOpen}
                formOpen={formOpen}
            />

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
                            title={'Mapping App Prototype Live Example'}
                            stack={'React, Typescript, Docker, Postgres, PostGIS, Mapbox, AWS'}
                            shortDescription={'A Fullstack mapping app that allows users to create, update and delete persistent data'}
                            longDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit 
                amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.`}
                            githubLink={'https://github.com/jonathanengelbert/mapping-app-prototype-live-example'}
                            liveLink={'https://project1.jonathanengelbert.com/'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'Mapping App Prototype Live Example'}
                            stack={'React, Typescript, Postgres, PostGIS, Mapbox, AWS'}
                            shortDescription={'A Fullstack mapping app that allows users to create, update and delete persistent data'}
                            longDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit 
                amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.`}
                            githubLink={'https://github.com/jonathanengelbert/mapping-app-prototype-live-example'}
                            liveLink={'https://project1.jonathanengelbert.com/'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard
                            title={'Mapping App Prototype Live Example'}
                            stack={'React, Typescript, Postgres, PostGIS, Mapbox, AWS'}
                            shortDescription={'A Fullstack mapping app that allows users to create, update and delete persistent data'}
                            longDescription={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit 
                amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.`}
                            githubLink={'https://github.com/jonathanengelbert/mapping-app-prototype-live-example'}
                            liveLink={'https://project1.jonathanengelbert.com/'}
                        />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default App;
