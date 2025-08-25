import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import MonitorIcon from "@mui/icons-material/Monitor";
import AddIcon from "@mui/icons-material/Add";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-cortada.png";

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    {
      text: "Pesquisar",
      icon: <SearchIcon style={{ color: "grey" }} />,
      path: "/search",
    },
    { text: "Home", icon: <HomeIcon style={{ color: "grey" }} />, path: "/" },
    {
      text: "Filmes",
      icon: <MovieIcon style={{ color: "grey" }} />,
      path: "/search",
    },
    {
      text: "Séries",
      icon: <MonitorIcon style={{ color: "grey" }} />,
      path: "/search",
    },
    {
      text: "Mais",
      icon: <AddIcon style={{ color: "grey" }} />,
      path: "/search",
    },
    {
      text: "Em alta",
      icon: <TrendingUpIcon style={{ color: "grey" }} />,
      path: "/search",
    },
    {
      text: "Filme aleatório",
      icon: <ShuffleIcon style={{ color: "grey" }} />,
      path: "/search",
    },
    {
      text: "Meus favoritos",
      icon: <FavoriteBorderOutlinedIcon style={{ color: "grey" }} />,
      path: "/favorites",
    },
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="bg-black h-full"
    >
      <List>
        {menuItems.map((obj) => (
          <ListItem key={obj.text} disablePadding>
            <Link to={obj.path} className="text-white!">
              <ListItemButton>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="fixed top-0 left-0 z-10">
      <div className="flex justify-between bg-black w-screen">
        <Button onClick={toggleDrawer(true)}>
          <MenuOutlinedIcon style={{ color: "grey" }} />
        </Button>
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 mx-4" />
        </Link>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </header>
  );
}
