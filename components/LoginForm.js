import React, {useCallback} from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import {inputHook} from '../forDev/customReactHook';

const LoginForm = () => {

  const [id, onChangeId] = inputHook('');
  const [password, onChangePassword] = inputHook('');
  const onSubmit = useCallback(e=>{
    e.preventDefault();
  },[id, password]);

  return (
    <Form onSubmit={onSubmit} style={{padding:'10px'}}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br/>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">PASSWORD</label>
        <br/>
        <Input name="user-password" value={password} onChange={onChangePassword} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit">LogIn</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  )
}


export default LoginForm;
