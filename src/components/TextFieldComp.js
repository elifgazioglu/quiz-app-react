import { FormControl } from "@mui/base";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TextFieldComp = () => {
  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl>
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
          fullWidth
        ></TextField>
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
