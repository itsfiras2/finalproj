import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import {  updateUser } from '../../actions/auth';
import useStyles from './styles';

const Form = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '', selectedFile: ''  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = user.result._id

  const clear = () => {
    setUserData({ name: '', email: '', password: '', selectedFile: ''  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      dispatch(updateUser(currentId, { ...userData }));
      clear();
  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{`updating ${user.result.name} profile`}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        <TextField name="email" variant="outlined" label="Email" type="email" fullWidth multiline rows={2} value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        {/* <TextField name="password"  variant="outlined" label="Password" type="password" fullWidth multiline rows={2} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
