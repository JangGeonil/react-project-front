import React from "react";
import { Button, List, Card, Icon } from "antd";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => (
  <div>
    <NicknameEditForm />
    <List
      style={{marginBottom:'20px'}}
      grid={{ gutter:4, xs:2, md:3 }} //화면이 작을 때 XS / 클때 MD 24 비율
      size="small"
      header={<div>List Header</div>}
      loadMore={<Button style={{width:'100%'}}>More</Button>}
      bordered
      dataSource={['data1','data2','data3']}
      renderItem={item=>(
        <List.Item style={{mairginTop:'20px'}}>
          <Card actions={[<Icon key="stop" type="stop"/>]}>
            <Card.Meta description={item}/>
          </Card>
        </List.Item>
      )}
    />
    <List
      style={{marginBottom:'20px'}}
      grid={{ gutter:4, xs:2, md:3 }} //화면이 작을 때 XS / 클때 MD 24 비율
      size="small"
      header={<div>List Header</div>}
      loadMore={<Button style={{width:'100%'}}>More</Button>}
      bordered
      dataSource={['data1','data2','data3']}
      renderItem={item=>(
        <List.Item style={{mairginTop:'20px'}}>
        <Card actions={[<Icon key="stop" type="stop"/>]}>
          <Card.Meta description={item}/>
        </Card>
        </List.Item>
      )}
    />
  </div>
)

export default Profile
