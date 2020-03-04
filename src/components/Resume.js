import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
      return(
    <div className='resume-grid'>
        <Grid>
            <Cell className='resume-left-col' col={6}>
                <h2 style={{paddingTop: '.05em'}}> Nicole Gumina</h2>
                    <h4 style={{color: 'black'}}>Software Engineer</h4>
                    <hr style={{borderTop: '3px solid black', width: '100%'}} />
                    <p>I am a solutions-driven software engineer with a passion for making a difference. My background in biological sciences, project management, and customer service
                        has taught me the importance of being detail oriented and has given me the ability to adopt a new role at any time. 
                    </p>
            </Cell>
            <Cell className='resume-right-col' style={{paddingLeft: '100px', fontSize: '22px', paddingTop: '25px'}} col={6}>Click <a href="https://drive.google.com/file/d/1uu_TAQYssie1b46LXWJgUHYv7TZga3t9/view?usp=sharing" target="_blank">here</a> to get taken to my resume! </Cell>
        </Grid>
    </div>
    )
  }
}

export default Resume;
