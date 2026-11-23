import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { Menu } from '@mui/icons-material'
import { NavLink } from "react-router-dom"
import { NavDrawer } from "../components/NavDrawer"

export const Nav = ({navLinks=[]}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            sx={{
              display: {
                xs: 'flex',
                lg: 'none'
              }
            }}
            onClick={() => setOpen(true)}
          >
            <Menu/>
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1
            }}
          >News</Typography>
          <Box
            sx={{
              display: {
                xs: 'none',
                lg: 'flex'
              }
            }}
          >
            {navLinks.map((link, index) => <Button
              nativeButton={false}
              color="inherit"
              key={`nav_row_button_key_index_${index}`}
              component={NavLink}
              to={link.path}
            >{link.text}</Button>)}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#34383F',
                color: '#FFFFFF',
                '&:hover' : {
                  backgroundColor: '#505660'
                },
                marginInlineStart: 18
              }}
            >Descargar CV</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
      >
        <NavDrawer navLinks={navLinks} setOpen={setOpen}/>
      </Drawer>
    </>
  )
}
