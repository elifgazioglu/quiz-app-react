import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";
import {decode} from 'html-entities';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch()

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
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response]);

  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress/>
      </Box>
    )
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(handleScoreChange(score+1));
    }

    if(questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/score');
    }
  }

  return (
    <Box>
      <img
        alt=""
        width="250px"
        height="250px"
        src="https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-11031.jpg?w=1380&t=st=1684947737~exp=1684948337~hmac=65b477870955c8510756b72ad3f6b5da3e0eaa5e1ce7cd5da0a881ac694c9c44"
      ></img>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
        <Button onClick={handleClickAnswer} variant="contained" style={{ backgroundColor: "pink" }}>
          {decode(data)}
        </Button>
      </Box>
      ))}
      <Box mt={3}>Score: {score} / {response.results.length}</Box>
    </Box>
  );
};

export default Questions;
