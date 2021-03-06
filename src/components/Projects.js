import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  CardText,
  IconButton,
  Button
} from "react-mdl";
import '../App.css'
import {RemoveScrollBar, zeroRightClassName} from 'react-remove-scroll-bar';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
 
  render() {
    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>REact</Tab>
          <Tab>javascript</Tab>
        </Tabs>
  
          <Grid className="projects-grid">
            <Cell col={12}>
<div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
          <div className='projects-grid'> 
        <Card shadow={0} style={{ width: "450px", margin: "auto" }}>
          <CardTitle 
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://res.cloudinary.com/drz8x4anh/image/upload/v1583275861/Screen_Shot_2020-03-03_at_4.37.24_PM_cdlajs.png) center / cover"
            }}
          >
            Sustainability Trivia
          </CardTitle>
          <CardText>
                A simple trivia game on sustainability using HTML, CSS, and Javascript.
          </CardText>
          <CardActions border>
            <Button colored link href='https://ngumina17.github.io/Project1Trivia/' target="_blank">Deployed App</Button>
            <Button colored link href='https://github.com/ngumina17/Project1Trivia' target="_blank">View GitHub</Button>
          </CardActions>
        </Card>
        </div> 

      );

    } else if (this.state.activeTab === 1) {
      return (
          <div className="projects-grid">
  <Card shadow={0} style={{ width: "450px", margin: "auto" }}>
          <CardTitle 
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://res.cloudinary.com/drz8x4anh/image/upload/v1583933181/Screen_Shot_2020-03-11_at_8.24.26_AM_qn2plw.png) center / cover"
            }}
          >
    
          </CardTitle>
          <CardText>
                An app using ReactJS pulling data from themealdb public API. Users are taken to the original source for the recipe. 
          </CardText>
          <CardActions border>
            <Button colored link href='https://elegant-hamilton-283035.netlify.com/' target="_blank">Deployed App</Button>
            <Button colored link href='https://github.com/ngumina17/project2' target="_blank">View GitHub</Button>
          </CardActions>
        </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
          <div className="projects-grid">
  <Card shadow={0} style={{ width: "450px", margin: "auto" }}>
          <CardTitle 
            style={{
              color: 'black',
              height: "176px",
              background:
                "url(https://res.cloudinary.com/drz8x4anh/image/upload/v1583280533/Screen_Shot_2020-03-03_at_6.08.42_PM_gxdvsk.png) center / cover"
            }}
          >
            Yelp Restaurants
          </CardTitle>
          <CardText>
                This project was completed with 3 other group members. The front end is designed in ReactJS, the backend (REST) was formed using Express and MongoDB. We recreated some simple features of Yelp. 
          </CardText>
          <CardActions border>
            <Button colored link href='https://yelprestaurants.netlify.com' target="_blank">Deployed App </Button>
            <Button colored link href='https://github.com/ngumina17/Yelp_frontend' target="_blank">View Frontend GitHub</Button>
            <Button colored link href='https://github.com/ngumina17/project3_backend' target="_blank">View BackEnd GitHub</Button>
          </CardActions>
        </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
          <div className="projects-grid">
  <Card shadow={0} style={{ width: "450px", margin: "auto" }}>
          <CardTitle 
            style={{
              color: "black",
              height: "176px",
              background:
                "url(https://res.cloudinary.com/drz8x4anh/image/upload/v1581964574/FL%20Logo.png) center / cover"
            }}
          >
    
          </CardTitle>
          <CardText>
                This was my final project for General Assembly. I created a simple workout, goal, and meal tracker app so users can track their fitness journey.
          </CardText>
          <CardActions border>
            <Button colored link href='https://fitlifeapp17.herokuapp.com/' target="_blank">Deployed App</Button>
            <Button colored link href='https://github.com/ngumina17/project4' target="_blank">View GitHub</Button>
          </CardActions>
        </Card>
        </div>
      );
    }
  }
  render() {
    return (
       <div className="category-tabs"> 
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS/JavaScript</Tab>
          <Tab>ReactJS</Tab>
          <Tab>MongoDB/Express/React/Node</Tab>
          <Tab>Python/Django</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="Content">{this.toggleCategories()}</div>
            </Cell>
          </Grid> 

      </div> 
    );
  }
}
export default Projects;