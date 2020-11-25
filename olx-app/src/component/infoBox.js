import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OLXAPPSTOREBTN from '../component/images/olxAppStoreBtn.PNG';
import { NoEncryption } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    height:'170px',
    borderRadius : 0,
  },
  autherDetail:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor : ' rgb(1, 27, 14)',
    color : 'white',
    borderRadius : 0,

  },
  infoBox : {
    padding:0,

  },
  box : {
    display: 'flex',
    display : 'inline-block',
    margin: 2 ,
  },
  list : {
    listStyleType : 'none' ,
  }
}));

export default function InfoForWeb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.infoBox}> 
              <div className={classes.box}>
                <p style={{fontWeight:"bold"}}>POPULAR CATEGORIES</p>
                <ul className={classes.list}>
                  <li>Cars</li>
                  <li>Flats For Rent</li>
                  <li>Jobs</li>
                  <li>Mobile Phone</li>
                </ul>
              </div>
              <div className={classes.box} >
                <p style={{fontWeight:"bold" , marginLeft : '30px'}}>TRENDING SEARCHES</p>
                <ul className={classes.list}>
                  <li>Bikes</li>
                  <li>Watches</li>
                  <li>Books</li>
                  <li>Dogs</li>
                </ul>
              </div>
              <div className={classes.box} >
                <p style={{fontWeight:"bold" , marginLeft : '30px'}}>ABOUT US</p>
                <ul className={classes.list}>
                  <li>About OLX group</li>
                  <li>OLX Blog</li>
                  <li>Contact Us</li>
                  <li>OLX For Businesses</li>
                </ul>
              </div>
              <div className={classes.box} >
                <p style={{fontWeight:"bold" , marginLeft : '30px'}}>OLX</p>
                <ul className={classes.list}>
                  <li>Help</li>
                  <li>Sitemap</li>
                  <li>Legal & Site Information</li>
                  <li>Privacy Polecy</li>
                </ul>
              </div>
              <div className={classes.box} >
                <p style={{fontWeight:"bold" , marginLeft : '30px'}}>FOLLOW US </p>
                <ul className={classes.list} >
                  <li style = {{fontSize:20 , margin : 25}}> <FacebookIcon /> <TwitterIcon /> <PlayCircleOutlineIcon /> <InstagramIcon /></li>
                  <li><img src={OLXAPPSTOREBTN} width="180" height="50"/></li>
                </ul>
              </div>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.autherDetail}>Free Classifieds in Pakistan. © 2006-2020 OLX
            Other Countries India - South Africa - Indonesia</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
