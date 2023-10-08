import React, { Fragment } from "react";
import axios from "axios";
import { api_url } from "../environment/environment.dev";
import { Space, Card, Typography, Image } from "antd";
const { Text } = Typography;
class UserList extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios
      .get(`${api_url}/users`)
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
      <Fragment>
        {this.state.users &&
          this.state.users.map((user) => {
            return (
              <Space direction="horizontal" size={20}>
                <Card key={user.id} title={user.email} style={{ width: 300,marginRight:20 }}>
                  <Space direction="vertical">
                    <Image width={200} src={user.avatar} />
                    <Text>First Name: {user.first_name}</Text>
                    <Text>Last Name: {user.last_name}</Text>
                  </Space>
                </Card>
              </Space>
            );
          })}
      </Fragment>
    );
  }
}

export default UserList;
