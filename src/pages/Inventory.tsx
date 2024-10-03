import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/joy";
import SelectIngredient from "../components/SelectIngredient";
import SelectAmount from "../components/SelectAmount";
import { Check, InfoOutlined } from "@mui/icons-material";
import InventoryTable from "../components/InventoryTable";
import ingredientsInventory from "../../inventory.json";
import { useEffect, useState } from "react";
import { IngredientsInventory } from "../types/inventory";

const Inventory = () => {
  const [inventory, setInventory] = useState<IngredientsInventory[]>([]);

  useEffect(() => {
    setInventory(ingredientsInventory.inventory);
  }, []);

  return (
    <Box>
      <Typography sx={{ mb: 2, color: "primary.plainColor" }}>
        Manage Inventory
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography level="h4" textColor="primary.plainColor">
          Add Ingredient
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, bgcolor: "primary.plainColor" }} />
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid>
            <SelectIngredient />
          </Grid>
          <Grid>
            <SelectAmount />
          </Grid>
          <Grid>
            <Button endDecorator={<Check />} sx={{ mt: 3.3 }}>
              Add to Stock
            </Button>
            {/* TODO: Add logic to this */}
            {false && (
              <FormHelperText sx={{ color: "danger.plainColor" }}>
                <InfoOutlined sx={{ color: "danger.plainColor" }} />
                Please select an ingredient and amount.
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography level="h4" textColor="primary.plainColor">
          In-Stock Ingredients
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, bgcolor: "primary.plainColor" }} />
        {inventory.length === 0 ? (
          <p>No ingredients</p>
        ) : (
          <InventoryTable inventory={inventory} />
        )}
      </Box>
    </Box>
  );
};

export default Inventory;
