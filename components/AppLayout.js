import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Col, Row, Footer, Layout } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile"

const dummy = {
  nickname: 'GeonilJang',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const AppLayout = ({ children }) => {
  return (
    <Layout style={{height:"100vh"}}>
      <Layout.Header style={{ width:"100%", position: "fixed", top: "0" ,zIndex:1}}>
        <Menu mode="horizontal">
          <Menu.Item key="home"><Link href="/"><a>MAIN</a></Link></Menu.Item>
          <Menu.Item key="profile"><Link href="/profile"><a>PROFILE</a></Link></Menu.Item>
          <Menu.Item key="signup"><Link href="/signup"><a>SIGNUP</a></Link></Menu.Item>
          <Menu.Item key="mail">
            <Input.Search enterButton style={{verticalAlign:'middle'}}/>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout style={{backgroundColor:"white"}}>
        <div style={{marginTop:"6vh", marginBottom:"10vh"}}>
          <Row gutter={8}>
            <Col xs={24} md={6}>
              {dummy.isLoggedIn ? <UserProfile />: <LoginForm />}
            </Col>
            <Col xs={24} md={12}>
              {children}
            </Col>
            <Col xs={24} md={6}>

            </Col>
          </Row>
        </div>
      </Layout>
      <Layout.Footer style={{ width:"100%",position: "fixed", bottom: "0" ,zIndex:1 }}>
        <Link href="http://geonil.kr" ><a target="_blank">Made by GeonilJang</a></Link>
      </Layout.Footer>
    </Layout>
  )
}

export default AppLayout;
