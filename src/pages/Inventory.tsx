import { Box, Divider, Typography } from "@mui/joy";
import SelectIngredient from "../components/SelectIngredient";

const Inventory = () => {
  return (
    <Box>
      <Typography sx={{ mb: 2, color: "primary.plainColor" }}>
        Inventory
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography level="h4" textColor="primary.plainColor">
          Add Ingredient
        </Typography>
        <Divider sx={{ mt: 1, mb: 2 }} />
        <SelectIngredient />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography level="h4" textColor="primary.plainColor">
          In-Stock Ingredients
        </Typography>
        <Divider sx={{ mt: 1, mb: 2 }} />
      </Box>
    </Box>
  );
};

export default Inventory;
