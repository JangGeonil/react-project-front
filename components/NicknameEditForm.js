import { Button, Form, Input } from "antd";
import React from "react";

const NicknameEditForm = () => (
  <Form style={{ marginBottom:'20px', border:'1px solid #d9d9d9', padding:'20px', display:'flex' }}>
    <Input addonBefore="Nickname" />
    <Button type="info" style={{verticalAlign:'middle'}}>Edit</Button>
  </Form>
)

export default NicknameEditForm;
