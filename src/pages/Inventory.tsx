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

const Inventory = () => {
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
      </Box>
    </Box>
  );
};

export default Inventory;
