import React from "react";
import UserList from "./components/UserList";
import { Layout, Space } from "antd";

const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: "120",
  lineHeight: "120px",
  color: "#fff",
 
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
class App extends React.Component {
  render() {
    return (
      <Space
        direction="vertical"
        style={{
          width: "100%",height:"100%"
        }}
      >
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Layout hasSider>
            <Content style={contentStyle}>
              <UserList />
            </Content>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
    );
  }
}

export default App;
