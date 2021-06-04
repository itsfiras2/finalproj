import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 2 ,

    margin: '15px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 70px',
    "color":"#a3f7bf "

  },
  heading: 
  {
  "color":"#a3f7bf ",
  "marginLeft":"-15px",
  "position":"relative",
  "top":"-2px",
  textDecoration: 'none',
  "fontSize":"38px"},
  image: {
    marginLeft: '10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    "marginRight":"15px",


  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[700]),
    backgroundColor: deepPurple[500],
  },
  Dashbored:{
    "color":"#a3f7bf ",
    "marginLeft":"0px",
    "position":"relative",
    "top":"-2px",
    textDecoration: 'none',
    "fontSize":"40px"},


  


}));
