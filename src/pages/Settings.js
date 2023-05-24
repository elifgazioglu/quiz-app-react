import { Box, Button} from "@mui/material";
import React from "react";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp"

const Settings = () => {
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <img alt="" width="250px" height="250px" src="https://img.freepik.com/free-vector/shrug-concept-illustration_114360-8833.jpg?w=1380&t=st=1684929286~exp=1684929886~hmac=b364e4ae5530d58654fd4f2f6ed31efc2af1bb2f03a09a2f77c529ffb9789946"></img>
      <SelectField label="Category"></SelectField>
      <SelectField label="Difficulty"></SelectField>
      <SelectField label="Type"></SelectField>
      <TextFieldComp/>
      <Box mt={3} width="100%">
        <Button style={{ backgroundColor: "pink" }} fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
