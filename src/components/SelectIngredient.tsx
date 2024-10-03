import {
  Autocomplete,
  AutocompleteOption,
  Box,
  Chip,
  FormControl,
  FormLabel,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import pizzaIngredients from "../../ingredients.json";

const groupedOptions = pizzaIngredients.ingredients.map((ingredient) => ({
  ...ingredient,
  category: ingredient.type.charAt(0).toUpperCase() + ingredient.type.slice(1), // Capitalize the category
}));

const SelectIngredient = () => {
  // State for selected ingredient
  const [value, setValue] = useState(null);

  return (
    <FormControl id="grouped-autocomplete">
      <FormLabel>Choose an Ingredient</FormLabel>
      <Autocomplete
        options={groupedOptions}
        groupBy={(option) => option.category} // Grouping by category
        getOptionLabel={(option) => option.name} // Displaying ingredient name
        onChange={(event, newValue) => {
          // @ts-ignore
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
        sx={{ width: 300, bgcolor: "neutral.800" }} // Set the width of the autocomplete
      />
    </FormControl>
  );
};

export default SelectIngredient;
