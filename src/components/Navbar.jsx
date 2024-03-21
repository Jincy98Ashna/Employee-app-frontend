import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ backgroundColor: 'teal'}}
      className='Navbar'>
        <Toolbar>
          <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Button>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Home</Link>
          </Button>
          <Button>
            <Link to={"/e"} style={{ textDecoration: "none", color: "white" }}>Employee-Form</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;
