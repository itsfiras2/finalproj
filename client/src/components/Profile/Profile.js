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



const Profile = ({ setCurrentId }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    return (
        <div>
                <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={11} sm={8}>
            
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={user?.result.imageUrl}
          title="profile pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {user?.result.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {user?.result.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => setUser(user)} size="small" color="primary">
          update profile
        </Button>
      </CardActions>
    </Card>

          </Grid>
          <Grid item xs={12} sm={4}>
            <Form user={user.result} setUser={setUser}/>
          </Grid>
          <Typography variant="h1" component="h2" gutterBottom>
       My Posts:
      </Typography>
        </Grid>


        <UserPosts/>
      </Container>
    </Grow>
   

        </div>
    )
}

export default Profile
