import React from 'react'
import "./navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';




function Navbar() {

  return (
      <div className='navbardiv'>
          <Box sx={{ flexGrow: 1 }}>
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
                  <Button id='homebtn' href='/' color="inherit">Home</Button>
                  <Button id='createbtn' href='/create' color="inherit">Create</Button>
                </Toolbar>
            </AppBar>
        </Box>
      </div>
  )
}
  
  export default Navbar


  