import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import { pink } from '@mui/material/colors';

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/");
  };

  console.log(response);
  const resultCat = response?.trivia_categories[question_category].name;

  const color = pink[50];
  return (
    <Box>
      <img
        alt=""
        width="400px"
        height="400px"
        src="https://img.freepik.com/free-vector/hand-drawn-team-checking-cheklist_23-2148077379.jpg?w=1380&t=st=1685471479~exp=1685472079~hmac=8f8bfc50efba93ececf5a85780f3eb7a24a34d17f6a7286220cdbcfe3d8e8458"
      ></img>
      <Box sx={{backgroundColor:color, borderRadius:3}}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Final Score: {score}
        </Typography>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Category: {resultCat}
        </Typography>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Number Of Question: {amount_of_question}
        </Typography>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Difficulty: {question_difficulty}
        </Typography>{" "}
        <Button onClick={handleBackToSettings} variant="outlined">
          back to settings!
        </Button>
      </Box>
    </Box>
  );
};

export default FinalScreen;
