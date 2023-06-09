import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setErrorMessage("");
  };

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Wennt Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!response.trivia_categories || !difficultyOptions || !typeOptions) {
      setErrorMessage("Please select all options");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }
    
    navigate("/questions");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <img
        alt=""
        width="250px"
        height="250px"
        src="https://img.freepik.com/free-vector/shrug-concept-illustration_114360-8833.jpg?w=1380&t=st=1684929286~exp=1684929886~hmac=b364e4ae5530d58654fd4f2f6ed31efc2af1bb2f03a09a2f77c529ffb9789946"
      ></img>
      <SelectField
        options={response.trivia_categories}
        label="Category"
        onChange={handleSelectChange}
      ></SelectField>
      <SelectField
        options={difficultyOptions}
        label="Difficulty"
        onChange={handleSelectChange}
      ></SelectField>

      <SelectField
        options={typeOptions}
        label="Type"
        onChange={handleSelectChange}
      ></SelectField>
      <TextFieldComp />
      {errorMessage && (
        <Typography variant="h6" mt={2} color="red" fontSize={15}>
          {errorMessage}
        </Typography>
      )}
      <Box mt={3} width="100%">
        <Button
          style={{ backgroundColor: "pink" }}
          fullWidth
          variant="contained"
          type="submit"
        >
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;