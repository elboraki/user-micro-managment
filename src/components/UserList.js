import React, { Fragment } from "react";
import { api_url } from "../environment/environment.dev";
import { Space, Card, Typography, Image, Layout } from "antd";
import { UserContext } from "../contexts/UserContext";
const { Text } = Typography;
class UserList extends React.Component {
  state = {
    users: [],
  };
  static contextType = UserContext;
  componentDidMount() {
    fetch(`${api_url}/users`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }



  render() {
    //const {selectedUser,changeUser}=this.context
    return (
      <UserContext.Consumer>
        {(context) => {

          const {selectedUser,changeUser}=context
          return (
            <Fragment>
              <Layout>

              <Text className="align-center">Current User: {selectedUser.last_name+' '+selectedUser.first_name}</Text>
              </Layout>
              {this.state.users &&
                this.state.users.map((user) => {
                  return (
                    <Space direction="horizontal" size={20} key={user.id}>
                      <Card
                        title={user.email}
                        style={{ width: 300, marginRight: 20 }}
                      >
                        <Space direction="vertical">
                          <Image width={200} src={user.avatar} />
                          <Text>First Name: {user.first_name}</Text>
                          <Text>Last Name: {user.last_name}</Text>
                          <button onClick={(e)=>changeUser(user)}>Make him current User</button>
                        </Space>
                      </Card>
                    </Space>
                  );
                })}
            </Fragment>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default UserList;
