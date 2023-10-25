import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdOutdoorGrill } from "react-icons/md";
import { FaTrello, FaUserPlus, FaUsers, FaBars, FaUser } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdBorderColor,MdOutlineMenuBook } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { Link } from 'react-router-dom';










const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



const opciones = [
  { text: 'Usuario', path: '/inicio/usuario' },
  { text: 'Panel', path: '/inicio/panel' },
  { text: 'Agregar usuario', path: '/inicio/agregarusuarios' },
  { text: 'Empleados', path: '/inicio/empleados' },
  { text: 'Cocina', path: '/inicio/cocina' },
  { text: 'Ordenes', path: '/inicio/ordenes' },
  { text: 'Menu digital', path: '/inicio/menudigital' },
  { text: 'Salir', path: '/' },
];
  return (
    <>
    
      <Box sx={{ display: 'flex' , backgroundColor:"#100b0bf7 " }}>
      <CssBaseline sx={{backgroundColor:"#100b0bf7 "}} />
      <AppBar position="fixed" open={open} sx={{backgroundColor:"#100b0bf7 "}}>
        <Toolbar style={{backgroundColor:"#100b0bf7"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ARDON <MdOutdoorGrill size={35}/>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} sx={{backgroundColor:"#100b0bf7 "}} >
        <DrawerHeader style={{  color:"white"}}>
          <IconButton onClick={handleDrawerClose} style={{color:"white"}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>






        <List sx={{ backgroundColor: "#100b0bf7"  }}>
  {opciones.map((opcion, index) => (
    <ListItem key={opcion.text} disablePadding sx={{ display: 'block', marginLeft:'0px'}} as={Link} to={opcion.path}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            color:'white'
          }}
        >
          <Link to={opcion.path} style={{ textDecoration: 'none' , backgroundColor: "#100b0bf7" , color:'white'}} variant="dark">
          {index % 8 === 0 ? <FaUser /> : index % 8 === 1 ? <FaTrello /> : index % 8 === 2 ? <FaUserPlus/>: index % 8 === 3 ? <FaUsers/>: index % 8 === 4 ? <FaKitchenSet/>: index % 8 === 5 ? <MdBorderColor/>: index % 8 === 6 ? <MdOutlineMenuBook/>: index % 8 === 7 ? <ImExit/>:<FaUser/>}
          </Link>
        </ListItemIcon>
        <ListItemText primary={opcion.text} sx={{ opacity: open ? 1 : 0 }} style={{color:"white"}} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      



        
      </Drawer>
    
   
    
     
      </Box>
    </>
  
  );
}