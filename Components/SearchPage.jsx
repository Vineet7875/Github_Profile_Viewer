import React from "react";
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import ClearIcon from '@material-ui/icons/Clear';
import "./SearchPage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    background: '#007bff',
    width: '60vw',
    [theme.breakpoints.down(500)]: {
      width: '85vw',
    },
  },
  searchInput: {
    flex: 1,
    boxShadow: '0px 15px 10px -15px #616161 !important',
    '&::placeholder': {
      color: '#fff !important',
      fontSize: '1.5rem !important',
      fontWeight: 'bold !important',
      font: 'icon !important',

    },
    '& input': {
      color: '#fff !important',
      fontSize: '1.5rem !important',
      fontWeight: 'bold !important',
      font: 'icon !important',
    },
    '& label': {
      color: '#fff !important',
      fontSize: '1,5rem !important',
      fontWeight: 'bold !important',
      font: 'icon !important',
    },
    
  },
}));

function SearchPage({ searchQuery, setSearchQuery }) {
  const classes = useStyles();

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="home-container">
      <div className="left-container">
        <div className="child-container">
          <img src="\github1.png" id="git" className="socialimg"></img>
          <h1>Github Profile Viewer</h1>
        </div>
        <form className='navbar__search'>
          <div className={classes.root}>
            <TextField
              className={classes.searchInput}
              placeholder="Search User"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <IconButton disabled={searchQuery === ''}>
                    <SearchIcon style={{ 'fontSize': '20px', 'color': '#fff' }} />
                  </IconButton>
                ),
                endAdornment: (
                  <IconButton disabled={searchQuery === ''} onClick={handleClear}>
                    <ClearIcon style={{ 'fontSize': '20px', 'color': '#fff' }} />
                  </IconButton>
                ),
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchPage;

