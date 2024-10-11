import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Typography,
} from "@mui/joy";
import SelectIngredient from "../components/SelectIngredient";
import { Add, Delete, InfoOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Ingredient, Recipe } from "../types/ingredient";
import data from "../test-data/ingredients.json";
import { INGREDIENT_TYPE } from "../types/constants";
import IngredientTable from "../components/IngredientTable";

const Recipes = () => {
  const [pizzaName, setPizzaName] = useState<string>("");
  const [crust, setCrust] = useState<Ingredient | null>(null);
  const [sauce, setSauce] = useState<Ingredient | null>(null);
  const [cheese, setCheese] = useState<Ingredient | null>(null);
  const [toppings, setToppings] = useState<(Ingredient | null)[]>([]); // Allow null values
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [addRecipeError, setAddRecipeError] = useState(false);

  const crustOptions = data.ingredients.filter(
    (ingredient) => ingredient.type === INGREDIENT_TYPE.CRUST
  );
  const sauceOptions = data.ingredients.filter(
    (ingredient) => ingredient.type === INGREDIENT_TYPE.SAUCE
  );
  const cheeseOptions = data.ingredients.filter(
    (ingredient) => ingredient.type === INGREDIENT_TYPE.CHEESE
  );
  const toppingOptions = data.ingredients.filter(
    (ingredient) => ingredient.type === INGREDIENT_TYPE.TOPPING
  );
  console.log(toppings);
  const handleSetToppings = (newTopping: Ingredient | null, index: number) => {
    setToppings((prevToppings) => {
      if (!prevToppings) return prevToppings; // Check if null or undefined

      // If index is within bounds, update the existing topping
      if (index < prevToppings.length) {
        return prevToppings.map((t, i) => {
          if (i === index) {
            return newTopping as Ingredient; // Ensure it's an Ingredient
          }
          return t; // Keep the other toppings unchanged
        });
      }

      // If adding a new topping, append it to the array
      return [...prevToppings, newTopping as Ingredient];
    });
  };

  const handleRemoveTopping = (index: number) => {
    setToppings((prevToppings) => {
      if (!prevToppings) return prevToppings; // Check if null or undefined

      // Return a new array excluding the topping at the specified index
      return prevToppings.filter((_, i) => i !== index);
    });
  };

  const handleAddRecipe = () => {
    if (!pizzaName || !crust || !sauce || !cheese) {
      // Alert if required fields are missing
      setAddRecipeError(true);
      return;
    }

    setAddRecipeError(false);

    // Filter toppings to ensure only valid ingredients (no null values)
    const validToppings = toppings.filter(
      (topping): topping is Ingredient => topping !== null
    );

    // Collect all ingredients (crust, sauce, cheese, and valid toppings)
    const ingredients: Ingredient[] = [crust, sauce, cheese, ...validToppings];

    // Create the new recipe object
    const newRecipe: Recipe = {
      name: pizzaName, // Use the pizza name from state
      ingredients, // Combine all ingredients
    };

    // Add the new recipe to the existing list of recipes
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);

    // Optionally, clear the form fields after adding the recipe
    setPizzaName("");
    setCrust(null);
    setSauce(null);
    setCheese(null);
    setToppings([]);
  };

  return (
    <>
      <Typography sx={{ mb: 2, color: "primary.plainColor" }}>
        Manage Recipes
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography level="h3" textColor="primary.plainColor">
          Create New Pizza Recipe
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, bgcolor: "primary.plainColor" }} />
        <Grid container direction="column" spacing={2}>
          <Grid>
            <FormControl>
              <FormLabel>Pizza Name</FormLabel>
              <Input
                value={pizzaName}
                onChange={(e) => setPizzaName(e.target.value)}
                placeholder="Enter Pizza Name"
                sx={{ width: "300px" }}
              />
            </FormControl>
          </Grid>
          <Grid>
            <SelectIngredient
              value={crust}
              setValue={setCrust}
              options={crustOptions}
              label="Select Crust"
            />
          </Grid>
          <Grid>
            <SelectIngredient
              value={sauce}
              setValue={setSauce}
              options={sauceOptions}
              label="Select Sauce"
            />
          </Grid>
          <Grid>
            <SelectIngredient
              value={cheese}
              setValue={setCheese}
              options={cheeseOptions}
              label="Select Cheese"
            />
          </Grid>
          {toppings?.map((topping, index) => (
            <Grid display="flex" key={index}>
              <SelectIngredient
                value={topping}
                setValue={(newTopping) => handleSetToppings(newTopping, index)} // Call the handler function
                options={toppingOptions}
                label={`Select Topping ${index + 1}`}
                autoFocus
              />
              <Grid mx={2} mt={"26px"}>
                <Button
                  onClick={() => handleRemoveTopping(index)}
                  variant="soft"
                  endDecorator={<Delete />}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
          <Grid>
            <Button
              onClick={() => handleAddRecipe()}
              sx={{ mr: 2 }}
              endDecorator={<Add />}
            >
              Add Recipe
            </Button>
            {addRecipeError && (
              <FormHelperText
                sx={{ color: "danger.plainColor", position: "absolute", mt: 1 }}
              >
                <InfoOutlined sx={{ color: "danger.plainColor" }} />
                Please enter a pizza name, crust, sauce and cheese.
              </FormHelperText>
            )}
            <Button
              onClick={() => handleSetToppings(null, toppings.length)} // Add new topping
              variant="soft"
              endDecorator={<Add />}
            >
              Add Topping
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography level="h3" textColor="primary.plainColor">
          Pizza Recipes
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, bgcolor: "primary.plainColor" }} />
        {recipes.map((recipe) => (
          <Box sx={{ mb: 2 }}>
            <Typography
              level="h4"
              textColor="primary.plainColor"
              sx={{ mb: 1 }}
            >
              {recipe.name}
            </Typography>
            <IngredientTable ingredients={recipe.ingredients} showType />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Recipes;
