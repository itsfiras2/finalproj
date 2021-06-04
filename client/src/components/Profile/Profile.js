import React, { useState, useEffect } from 'react';
import { Card, Typography, CardActionArea, CardActions, Button, CardContent,CardMedia,Grid, CircularProgress,
    Container, Grow, } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Post from '../Posts/Post/Post';
import useStyles from '../Posts/Post/styles';
import * as actionType from '../../constants/actionTypes';
import Form from '../Form/ProfileForm';
import UserPosts from './UserPosts'
import "./Profile.css"


const Profile = ({ setCurrentId }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    return (
        <div>
                <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={7} sm={8}>
            

      <aside className="profile-card">
      <header>
        <a href="https://www.pngitem.com/pimgs/m/245-2454007_lost-and-found-icon-hd-png-download.png">
          <img src= {user?.result.imgUser} />
        </a>
        <h1>{user?.result.name}</h1>
        <h2> Email : {user?.result.email}</h2>
      </header>
      <div className="profile-bio">
        <p> Phone Number : {user?.result.Phone} </p>
      </div>
      <ul className="profile-social-links">
        <li>
          <a href="#">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
          </a>
        </li>
      </ul>    
    </aside>
    <Typography variant="h3" component="h2" gutterBottom>
    My Posts:
   </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form user={user.result} setUser={setUser}/>
          </Grid>

        </Grid>


        <UserPosts/>
      </Container>
    </Grow>
   

        </div>
    )
}

export default Profile
