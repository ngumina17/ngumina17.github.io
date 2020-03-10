import React, { Component } from 'react';
import Projects from './Projects';
import { Grid, Cell } from 'react-mdl'

class landingPage extends Component {
    render() {
        return (
            <div style ={{ width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src="https://i.imgur.com/FA5iBD7.jpg?1"
                            alt="headshot"
                            className="headshot"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                        <p>HTML | CSS | PostgreSQL | JavaScript | ReactJS | NodeJS | Express | MongoDB | Python | Django | Git
                        </p>
                        <div className="social-links">

                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/nicolegumina-327211132" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                              {/* GitHub */}
                              <a href="https://github.com/ngumina17" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
              
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default landingPage;