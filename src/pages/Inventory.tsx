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
import ingredientsInventory from "../test-data/inventory.json";
import data from "../test-data/ingredients.json";
import { useEffect, useState } from "react";
import { Ingredient } from "../types/ingredient";

const Inventory = () => {
  const [inventory, setInventory] = useState<Ingredient[]>([]);
  const [selectedIngredient, setSelectedIngredient] =
    useState<Ingredient | null>(); // Track selected ingredient
  const [quantity, setQuantity] = useState<number | undefined>();
  const [error, setError] = useState(false); // Error state for form validation

  useEffect(() => {
    setInventory(ingredientsInventory.inventory);
  }, []);

  const handleAddToStock = () => {
    // Basic validation: Ensure an ingredient and quantity are selected
    if (!selectedIngredient || !quantity) {
      setError(true); // Show error if input is invalid
      return;
    }

    // Check if the ingredient already exists in the inventory
    const existingIngredientIndex = inventory.findIndex(
      (item) => item.name === selectedIngredient.name
    );

    if (existingIngredientIndex >= 0) {
      // If ingredient exists, update its quantity (safely check if quantity is defined)
      const updatedInventory = [...inventory];
      updatedInventory[existingIngredientIndex].quantity =
        (updatedInventory[existingIngredientIndex]?.quantity ?? 0) +
        (quantity ?? 0);

      setInventory(updatedInventory);
    } else {
      // If ingredient doesn't exist, add it to the inventory
      setInventory([
        ...inventory,
        {
          name: selectedIngredient.name,
          emoji: selectedIngredient.emoji,
          type: selectedIngredient.type,
          quantity: quantity ?? 0, // Default to 0 if quantity is undefined
        },
      ]);
    }

    // Reset form inputs
    setSelectedIngredient(null);
    setQuantity(undefined);
    setError(false); // Clear error
  };

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
            <SelectIngredient
              value={selectedIngredient}
              setValue={setSelectedIngredient}
              options={data.ingredients}
              label="Select an Ingredient"
            />
          </Grid>
          <Grid>
            <SelectAmount
              value={quantity}
              setValue={setQuantity}
              label="Select Amount"
            />
          </Grid>
          <Grid>
            <Button
              endDecorator={<Check />}
              sx={{ mt: 3.3 }}
              onClick={handleAddToStock}
            >
              Add to Stock
            </Button>
            {error && (
              <FormHelperText
                sx={{ color: "danger.plainColor", position: "absolute" }}
              >
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
