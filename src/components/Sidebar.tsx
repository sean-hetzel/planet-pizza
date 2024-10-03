import {
  Box,
  List,
  ListItemButton,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { Link } from "react-router-dom";
import { DarkMode, LocalPizza, MenuBook } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "250px",
        bgcolor: "neutral.800",
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Typography
        level="h2"
        fontWeight="bold"
        mb={2}
        textColor="primary.plainColor"
        endDecorator={<DarkMode sx={{ color: "primary.plainColor" }} />}
      >
        Planet Pizza
      </Typography>
      <List sx={{ "--List-item-radius": "8px" }}>
        <ListItemButton
          component={Link}
          to="/inventory"
          sx={{ color: "primary.plainColor" }}
        >
          <ListItemDecorator>
            <MenuBook />
          </ListItemDecorator>
          <Typography level="h4" textColor="primary.plainColor">
            Inventory
          </Typography>
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/recipes"
          sx={{ color: "primary.plainColor" }}
        >
          <ListItemDecorator>
            <LocalPizza />
          </ListItemDecorator>
          <Typography level="h4" textColor="primary.plainColor">
            Recipes
          </Typography>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
