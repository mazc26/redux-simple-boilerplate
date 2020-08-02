import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);

    const state = {
      users: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      this.setState({ users: response.data });
    };

    fetchData();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/")}>Go back</button>
      </div>
    );
  }
}

export default Users;
