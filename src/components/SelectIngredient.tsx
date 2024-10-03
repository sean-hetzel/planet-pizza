import {
  Autocomplete,
  AutocompleteOption,
  Box,
  FormControl,
  FormLabel,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import pizzaIngredients from "../../ingredients.json";
import { Ingredient } from "../types/ingredient";

const ingredients: Ingredient[] = pizzaIngredients.ingredients.map(
  (ingredient) => ({
    ...ingredient,
    type: ingredient.type.charAt(0).toUpperCase() + ingredient.type.slice(1), // Capitalize the category
  })
);

const SelectIngredient = () => {
  // State for selected ingredient
  const [value, setValue] = useState<Ingredient | null>(null);

  return (
    <FormControl id="grouped-autocomplete">
      <FormLabel>1. Choose an Ingredient</FormLabel>
      <Autocomplete
        options={ingredients}
        placeholder="Search ingredient"
        groupBy={(option) => option.type} // Grouping by category
        getOptionLabel={(option) => `${option.emoji} ${option.name}`} // Displaying ingredient name
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        renderOption={(props, option) => (
          <AutocompleteOption {...props}>
            <Box sx={{ display: "flex", p: 1 }}>
              <ListItemDecorator>
                <Typography level="body-md" sx={{ mr: 1 }}>
                  {option.emoji}
                </Typography>
              </ListItemDecorator>
              <ListItemContent sx={{ fontSize: "sm" }}>
                {option.name}
              </ListItemContent>
            </Box>
          </AutocompleteOption>
        )}
        sx={{ width: 300 }} // Set the width of the autocomplete
      />
    </FormControl>
  );
};

export default SelectIngredient;
