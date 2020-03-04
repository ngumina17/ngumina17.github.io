import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nicole Gumina</h2>
            <img
              src="https://res.cloudinary.com/drz8x4anh/image/upload/v1583290772/Screen_Shot_2020-03-03_at_8.59.11_PM_zbobeo.png"
              alt="headshot"
              style={{ height: "250px", borderRadius: "20%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hello! I'm Nicole, a software engineer based in Madison, WI who
              enjoys building full stack web apps. I recently graduated from an
              immersive bootcamp through General Assembly where I learned a
              variety of programming languages and frameworks to kick start my
              career in tech.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>

            <List>
              <ListItem>
              <i className="fa fa-paper-plane" aria-hidden="true"/>
                <ListItemContent style={{fontSize: '18px', fontFamily: 'Source Sans Pro'}}>nicole.gumina17@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
                <i className="fa fa-phone" aria-hidden="true"/>
                <ListItemContent style={{fontSize: '18px', fontFamily: 'Source Sans Pro'}}>847-989-8501</ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
