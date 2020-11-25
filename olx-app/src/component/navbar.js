import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import LOGO from './images/logo.png';
import SELLBTN from './images/sellBtn.PNG';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    location: {
        margin: '10px',
        position: 'relative',
        border: `2px solid rgb(0,51,25)`,
        backgroundColor: 'white',
        color: 'rgb(0,51,25)',
        marginLeft: 10,
        width: '30%',
    },
    search: {
        margin: '10px',
        position: 'relative',
        border: `2px solid rgb(0,51,25)`,
        backgroundColor: 'white',
        color: 'rgb(0,51,25)',
        marginLeft: 10,
        width: '43%',
    },
    searchIconForLocation: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIconForSearch: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        // width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //         width: '20ch',
        //     },
        // },
    },
    loginLink :{
        margin: '10px',
        color: 'rgb(0,51,25)',
        fontSize : '17PX',
        fontWeight:'bold',
    },
    btn : {
        cursor :'pointer',
        position: 'absolute',
        right: '10px',
        top: '5px',
    }
}));

export default function Navbar(props) {
    const classes = useStyles();

    // console.log(props.item)
    let getData = JSON.parse(localStorage.getItem("CurrUser"))
    console.log(getData)



    return (
        <div className={classes.root}>
            <AppBar position="static" color='default'>
                <Toolbar>
                    <img src={LOGO} width='50' />
                    <div className={classes.location}>
                        <div className={classes.searchIconForLocation}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Location"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            endAdornment={<LocationOnIcon/>}
                        />
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIconForSearch}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <Link to = "/login" className={classes.loginLink} >LOGIN</Link>

                    <Link  to = {getData === null ?  "/login" : "/sellpage"} className={classes.btn}>
                        <img src={SELLBTN} width='100' />
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}