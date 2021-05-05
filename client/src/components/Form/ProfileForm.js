import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import {  updateUser } from '../../actions/auth';
import useStyles from './styles';

const Form = ({user}) => {
  const [userData, setUserData] = useState(user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentId = user._id

  const clear = () => {
    setUserData({ name: '', email: '', password: '', selectedFile: ''  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(userData.password.charAt(0) === '$'){
      alert('please enter password')
    }else{
      dispatch(updateUser(currentId, { ...userData }));
      clear();
    }
  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{`updating ${user.name} profile`}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        <TextField name="email" variant="outlined" label="Email" type="email" fullWidth multiline rows={2} value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <TextField id="standard-password-input" name="password"  variant="outlined" label="Password" type="password" fullWidth rows={2}  onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
