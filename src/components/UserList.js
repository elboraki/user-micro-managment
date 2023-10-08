import React from "react";
import axios from "axios";
import { api_url } from "../environment/environment.dev";
import { Space, Card } from "antd";

class UserList extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios
      .get(`${api_url}/users?page=2`)
      .then((res) => {
        
        this.setState({ users: res.data.data });
        console.log("Data", this.state.users);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <Space direction="vertical" size={16}>
        {this.state.users &&
          this.state.users.map((user) => {
           return <Card 
                key={user.id}
              title={user.email}
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            ></Card>;
          })}
      </Space>
    );
  }
}

export default UserList;
