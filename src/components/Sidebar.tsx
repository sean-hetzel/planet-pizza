import {
  Box,
  List,
  ListItemButton,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { Link, useLocation } from "react-router-dom";
import { LocalPizza, MenuBook, RocketLaunch } from "@mui/icons-material";
import { URL } from "../types/constants";

const Sidebar = () => {
  const location = useLocation();

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
        level="h3"
        fontWeight="bold"
        mx={1}
        mt={1}
        mb={2}
        textColor="#ffc107"
        fontStyle={"italic"}
        endDecorator={<RocketLaunch sx={{ color: "#ffc107" }} />}
      >
        PLANET PIZZA
      </Typography>
      <List sx={{ "--List-item-radius": "8px" }}>
        <ListItemButton
          component={Link}
          to={URL.INVENTORY}
          sx={{ color: "primary.plainColor" }}
          selected={URL.INVENTORY === location.pathname}
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
          to={URL.RECIPES}
          sx={{ color: "primary.plainColor" }}
          selected={URL.RECIPES === location.pathname}
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
