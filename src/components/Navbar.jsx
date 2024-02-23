import { AppBar,  Toolbar ,Typography,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

const Navbar = () => {
  return (
    <div><Box sx={{flexGrow:1}}>
        <AppBar position='static'>
            <Toolbar>
                
            <Typography sx={{flexGrow:1}} align='left 'variant='h6'>Student App</Typography>
            {/* <Button><Link to='login' style={{color:'white'}}>Login</Link></Button> */}
            <Button><Link to='Addstudent' style={{color:'white'}}>Addstudent</Link></Button>
            <Button><Link to='viewstudent' style={{color:'white'}}>viewstudent</Link></Button>

            </Toolbar>
            </AppBar>
            </Box>
            
    </div>
  )
}

export default Navbar