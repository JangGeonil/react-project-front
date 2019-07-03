import React from "react";
import { Card, Icon, Button, Avatar } from "antd";
import PropTypes from "prop-types";

const PostCard = ({ postCardData }) => {
  return (
    <Card
      key={+postCardData.createdAt}
      cover={postCardData.img && <img alt="example" scr={postCardData.img}/>}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
      extra={<Button>FOLLOW</Button>}
      style={{marginBottom:30, marginTop:30}}
    >
      <Card.Meta
        avatar={<Avatar>{postCardData.User.nickname[0]}</Avatar>}
        title={postCardData.User.nickname}
        description={postCardData.content}
      />
    </Card>
  )
}

export default PostCard;
