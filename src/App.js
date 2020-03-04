import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import landingPage from './components/landingpage';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title" className="title">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
        <Main />
        </Content>        

         
    </Layout>
</div>
    )
  }
}

export default App;
