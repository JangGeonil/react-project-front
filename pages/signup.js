import React, {useState, useCallback} from "react";
import { Form, Input, Checkbox, Button } from "antd";
import PropTypes from 'prop-types';

import { inputHook } from '../forDev/customReactHook';


const TextInput = ({value}) => (<div>{value}</div>);


const Signup = () => {
  const [id, onChangeId] = inputHook('');
  const [nickname, onChangeNickname] = inputHook('');
  const [password, onChangePassword] = inputHook('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback( e => {
    setTermError(false);
    setTerm(e.target.checked);
  },[term]);

  const onChangePasswordCheck = useCallback( e => {
    setPasswordError(false);
    setPasswordCheck(e.target.value);
  },[passwordCheck]);

  const onSubmit = useCallback((e) =>{
    e.preventDefault();
    if(password !== passwordCheck) return setPasswordError(true);
    if(!term) return setTermError(true);
  },[password, passwordCheck]);

  return (
    <Form onSubmit={onSubmit} style={{padding: 10}}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br/>
        <Input name="user-id" value={id} required onChange={onChangeId}/>
      </div>
      <div>
        <label htmlFor="user-niname">NICKNAME</label>
        <br/>
        <Input name="user-niname" value={nickname} required onChange={onChangeNickname}/>
      </div>
      <div>
        <label htmlFor="user-password">PASSWORD</label>
        <br/>
        <Input name="user-password" value={password} required onChange={onChangePassword}/>
      </div>
      <div>
        <label htmlFor="user-password-check">PASSWORD CHECK</label>
        <br/>
        <Input name="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck}/>
        {passwordError && <div style={{color:'red'}}>Not matched password</div>}
      </div>
      <div>
        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>ACCEPT</Checkbox>
        {termError && <div style={{color:'red'}}>To signup, You must accept.</div>}
      </div>
      <div style={{marginTop:10}}>
        <Button type="primary" htmlType="submit">REGISTER</Button>
      </div>
    </Form>
  )
}

export default Signup
