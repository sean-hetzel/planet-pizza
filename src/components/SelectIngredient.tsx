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
import { Ingredient } from "../types/ingredient"; // Ensure the Ingredient type is imported

type SelectIngredientProps = {
  value?: Ingredient | null; // Expect the selected ingredient to be passed
  setValue?: (ingredient: Ingredient | null) => void; // Function to set the selected ingredient
  options?: { ingredients: Ingredient[] }; // Add pizzaIngredients as a prop
  label?: string;
};

const SelectIngredient = (props: SelectIngredientProps) => {
  const { value, setValue, options, label } = props;

  // Capitalize the type and then sort the ingredients by type and name
  const ingredients: Ingredient[] = options?.ingredients
    ? options.ingredients
        .map((ingredient) => ({
          ...ingredient,
          type:
            ingredient.type.charAt(0).toUpperCase() + ingredient.type.slice(1), // Capitalize the category
        }))
        .sort((a, b) => {
          // Sort by type first, then by name
          const typeComparison = a.type.localeCompare(b.type);
          if (typeComparison === 0) {
            return a.name.localeCompare(b.name); // Sort by name if types are the same
          }
          return typeComparison;
        })
    : []; // Fallback to an empty array if options or options.ingredients is undefined

  return (
    <FormControl id="grouped-autocomplete">
      {label && <FormLabel>{label}</FormLabel>}
      <Autocomplete
        options={ingredients}
        placeholder="Search ingredient"
        groupBy={(option) => option.type} // Grouping by category
        getOptionLabel={(option) => `${option.emoji} ${option.name}`} // Displaying ingredient name
        value={value} // Bind the selected value
        onChange={(_, newValue) => {
          setValue?.(newValue); // Update the selected ingredient
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
