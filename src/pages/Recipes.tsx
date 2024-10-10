import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Typography,
} from "@mui/joy";
import SelectIngredient from "../components/SelectIngredient";
import { Add, Delete } from "@mui/icons-material";
import { useState } from "react";
import { Ingredient } from "../types/ingredient";
import data from "../test-data/ingredients.json";
import { INGREDIENT_TYPE } from "../types/constants";

const Recipes = () => {
  const [pizzaName, setPizzaName] = useState<string>("");
  const [crust, setCrust] = useState<Ingredient | null>(null);
  const [sauce, setSauce] = useState<Ingredient | null>(null);
  const [cheese, setCheese] = useState<Ingredient | null>(null);
  const [toppings, setToppings] = useState<Ingredient[]>([]); // Initialize as empty array

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

  return (
    <>
      <Typography sx={{ mb: 2, color: "primary.plainColor" }}>
        Manage Recipes
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography level="h4" textColor="primary.plainColor">
          Create New Pizza Recipe
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, bgcolor: "primary.plainColor" }} />
        <Grid container direction="column" spacing={2}>
          <Grid display="flex">
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
        <Typography level="h4" textColor="primary.plainColor">
          Pizza Recipes
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, bgcolor: "primary.plainColor" }} />
      </Box>
    </>
  );
};

export default Recipes;
