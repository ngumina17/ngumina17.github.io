import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingPage from './landingpage';
import About from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component ={landingPage} />
        <Route path="/about" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path ="/Projects" component={Projects} />
        <Route path ="/Resume" component={Resume} />


    </Switch>
)

export default Main;