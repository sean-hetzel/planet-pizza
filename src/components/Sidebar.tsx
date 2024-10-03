import { Box, List, ListItemButton, ListItemDecorator, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '200px',
        height: '100vh',
        bgcolor: 'background.surface',
        p: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
        boxSizing: 'border-box'
      }}
    >
      <Typography level="h4" fontWeight="bold" mb={2}>
        Sidebar
      </Typography>
      <List sx={{ '--List-item-radius': '8px' }}>
      <ListItemButton component={Link} to="/recipes">
          <ListItemDecorator>
            <LocalPizzaIcon />
          </ListItemDecorator>
          Recipes
        </ListItemButton>
        <ListItemButton component={Link} to="/inventory">
          <ListItemDecorator>
            <MenuBookIcon />
          </ListItemDecorator>
          Inventory
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
