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
import MovieIcon from '@mui/icons-material/Movie';
import MonitorIcon from '@mui/icons-material/Monitor';
import AddIcon from '@mui/icons-material/Add';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    {text: "Pesquisar", icon: <SearchIcon style={{ color: 'grey' }}/> },
    {text: "Home", icon: <HomeIcon style={{ color: 'grey' }} />},
    {text: "Filmes", icon: < MovieIcon style={{ color: 'grey' }}/>},
    {text: "Séries", icon: < MonitorIcon style={{ color: 'grey' }}/>},
    {text: "Mais", icon: < AddIcon style={{ color: 'grey' }}/>},
    {text: "Em alta", icon: < TrendingUpIcon style={{ color: 'grey' }}/>},
    {text: "Filme aleatório", icon: < ShuffleIcon style={{ color: 'grey' }}/>},
    {text: "Meus favoritos", icon: < FavoriteBorderOutlinedIcon style={{ color: 'grey' }}/>},
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} className="bg-black text-white h-full">
      <List>
        {menuItems.map((obj) => (
          <ListItem key={obj.text} disablePadding>
            <ListItemButton>
              <ListItemIcon >{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuOutlinedIcon style={{ color: 'grey' }}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
