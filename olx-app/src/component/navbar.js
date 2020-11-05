import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
import LOGO from './images/logo.png';
import SELLBTN from './images/sellBtn.PNG';
import SimpleDialogDemo from './dialogbox'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // zIndex: 5,
    },
    location: {
        margin: '10px',
        position: 'relative',
        border: `2px solid rgb(0,51,25)`,
        backgroundColor: 'white',
        color: 'rgb(0,51,25)',
        marginLeft: 10,
        width: '25%',
    },
    search: {
        margin: '10px',
        position: 'relative',
        border: `2px solid rgb(0,51,25)`,
        backgroundColor: 'white',
        color: 'rgb(0,51,25)',
        marginLeft: 10,
        width: '40%',
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
        // backgroundColor : 'darkgreen',
        // color : 'white',
        // float : 'right',
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
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    loginLink :{
        margin: '10px',
        color: 'rgb(0,51,25)',
        fontSize : '20px',
        fontWeight:'bold',
        textDecoration:'underline',

    },
    btn : {
        cursor :'pointer',

        // float: 'right',
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();

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
                    <Link
                        component="button"
                        variant="body2"
                        className = {classes.loginLink}
                        onClick={() => {
                            console.info("I'm a Login Button.");
                        }}
                    >
                        LOGIN
                    </Link>
                    
                    <span 
                    className={classes.btn}
                     onClick={() => {
                        console.info("I'm a Sell Button.");
                    }}>
                    <img src={SELLBTN} width='100' />
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    );
}