import React from "react";
import { Form, Input, Button } from "antd";
import {dummy} from "../forDev/dummy";

const PostForm = () => {
  return (
    <Form>
      <Input.TextArea maxLength={140} placeholder="Wirte Your Words"/>
      <div>
        <input type="file" multiple hidden/>
        <Button type="danger">Upload Images</Button>
        <Button type="primary" style={{float:'right'}}  htmlType="submit">Register</Button>
      </div>
      <div>
        {dummy.imagePaths.map( ( v, idx ) => {
          return (
            <div key={v} style={{display:'inline-block'}}>
              <img src={`http://domina.~~/${v}`} style={{width:'200px'}} alt={v} />
              <div><Button>Delete</Button></div>
            </div>
          );
        })}
      </div>
    </Form>
  )
}

export default PostForm;
