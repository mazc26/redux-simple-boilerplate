import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const fetchUsers = async () => {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/todos/"
    //   );
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <button onClick={() => props.setCounter(200)}>Clic me!</button>
      {props.counter}
      <button onClick={() => props.history.push("/users")}>Go back</button>
    </>
  );
};

export default Home;
