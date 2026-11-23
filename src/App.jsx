import { Route, Routes } from 'react-router-dom'
import { Nav } from './layout/Nav'
import { SnackbarProvider } from 'notistack'
import BungalowOutlinedIcon from '@mui/icons-material/BungalowOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import BiotechIcon from '@mui/icons-material/Biotech';
import { Home } from './layout/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AlbumIcon from '@mui/icons-material/Album';

const navLinks = [
  {
    path: '',
    text: 'Home',
    icon: <BungalowOutlinedIcon/>
  },
  {
    path: 'playground',
    text: 'Playground',
    icon: <BiotechIcon/>
  },
  {
    path: 'account',
    text: 'Account',
    icon: <AccountBalanceIcon/>
  },
  {
    path: 'access-time',
    text: 'Access time',
    icon: <AccessTimeFilledIcon/>
  },
  {
    path: 'album',
    text: 'Album',
    icon: <AlbumIcon/>
  },
  {
    path: 'menu',
    text: 'Menu',
    icon: <MenuOutlinedIcon/>
  },
  {
    path: 'airplane',
    text: 'Airplane',
    icon: <AirplanemodeActiveOutlinedIcon/>
  }
]

function App() {

  return (
    <>
      <Nav navLinks={navLinks}/>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
      >
        <Routes>
          <Route path='' element={<Home/>} />
        </Routes>
      </SnackbarProvider>
    </>
  )
}

export default App
