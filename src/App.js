import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import UserList from "./components/UserList";
import { Layout, Space, Menu } from "antd";
import Home from "./pages/Home";
import About from "./pages/About";

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
      <BrowserRouter>
        <Space
          direction="vertical"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Layout>
            <Header style={headerStyle}>
              <Menu mode="horizontal">
                <Menu.Item key="home">
                  <NavLink activeClassName="activePage" to="/">
                    Home
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="users">
                  <NavLink to="/users">Users</NavLink>
                </Menu.Item>
                <Menu.Item key="about">
                  <NavLink to="/about">About</NavLink>
                </Menu.Item>
              </Menu>
            </Header>
            <Layout hasSider>
              <Content style={contentStyle}>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Content>
            </Layout>

            <Footer style={footerStyle}>Footer</Footer>

          </Layout>
        </Space>
      </BrowserRouter>
    );
  }
}

export default App;
