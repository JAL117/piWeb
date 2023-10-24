import { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrello, FaUserPlus, FaUsers, FaBars, FaUser } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdBorderColor, MdOutlineMenuBook } from "react-icons/md";
import { ImExit } from "react-icons/im";

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navbarStyle = {
    position: "fixed", // Fijar la posición
    top: 0, // Fijar en la parte superior
    width: "100%", // Ancho completo
    zIndex: 1000, // Asegurar que está por encima de otros elementos
  };

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
            Ardon<MdOutdoorGrill size={35}/>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} sx={{backgroundColor:"#100b0bf7 "}} >
        <DrawerHeader style={{backgroundColor:"#100b0bf7" , color:"white"}}>
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

export default NavbarComponent;
