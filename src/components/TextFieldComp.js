import { FormControl } from "@mui/base";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value))
  };

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
