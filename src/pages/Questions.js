import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
  } = useSelector((state) => state);

  let apiUrl = `https://opentdb.com/api.php?amount=${amount_of_question}`;

  if(question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if(question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const { response, loading } = useAxios({ url: apiUrl });

  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Box>
      <img
        alt=""
        width="250px"
        height="250px"
        src="https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-11031.jpg?w=1380&t=st=1684947737~exp=1684948337~hmac=65b477870955c8510756b72ad3f6b5da3e0eaa5e1ce7cd5da0a881ac694c9c44"
      ></img>
      <Typography variant="h4">Question 1</Typography>
      <Typography mt={5}>This is the question?</Typography>
      <Box mt={2}>
        <Button variant="contained" style={{ backgroundColor: "pink" }}>
          Answer 1
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained" style={{ backgroundColor: "pink" }}>
          Answer 2
        </Button>
      </Box>
      <Box mt={3}>Score: 2/5</Box>
    </Box>
  );
};

export default Questions;
