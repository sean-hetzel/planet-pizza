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
import SelectAmount from "../components/SelectAmount";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { Ingredient } from "../types/ingredient";

const Recipes = () => {
  const [pizzaName, setPizzaName] = useState<string>();
  const [crust, setCrust] = useState<Ingredient | null>();
  const [sauce, setSauce] = useState<Ingredient | null>();
  const [cheese, setCheese] = useState<Ingredient | null>();
  const [toppings, setToppings] = useState<Ingredient[] | null>();

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
              />
            </FormControl>
          </Grid>
          <Grid display="flex">
            <SelectIngredient label="Select Crust" />
            <SelectAmount
              label="Select Amount"
              style={{ marginLeft: "16px" }}
            />
          </Grid>
          <Grid display="flex">
            <SelectIngredient label="Select Sauce (optional)" />
            <SelectAmount
              label="Select Amount"
              style={{ marginLeft: "16px" }}
            />
          </Grid>
          <Grid display="flex">
            <SelectIngredient label="Select Cheese (optional)" />
            <SelectAmount
              label="Select Amount"
              style={{ marginLeft: "16px" }}
            />
          </Grid>
          <Grid display="flex">
            <SelectIngredient label="Select Topping (optional)" />
            <SelectAmount
              label="Select Amount"
              style={{ marginLeft: "16px" }}
            />
          </Grid>
          <Grid display="flex">
            <Button variant="soft" endDecorator={<Add />}>
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
