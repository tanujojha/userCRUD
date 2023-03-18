import React from 'react'
import "./navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




function Navbar() {

  return (
      <div className='navbardiv'>
          <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Toolbar>
                  <Typography
                      id = "head"
                      variant="h4"
                      component="div"
                      sx={{ flexGrow: 1}}
                  >
                    UserCRUD
                  </Typography>
                </Toolbar>
            </AppBar>
        </Box>
      </div>
  )
}
  
  export default Navbar


  