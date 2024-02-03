import React from "react";
import { Container } from "./styles";
import Form from "../Form/Form";
import { useState } from "react";

function Gym() {
  const [input, setInput] = useState('');
  console.log(input, "input")
  return (
    <Container>
      <h2>List of Exercises</h2>
      {/* Form Component */}
      <Form input={input} setInput={setInput}/>
      {/* Exercise List */}
      {/* Key */}
      {/* Author Component */}
    </Container>
  );
}

export default Gym;
