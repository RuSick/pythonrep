import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Card  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { MAIN_ROUTE } from '../../redux/types'
import { setIsAuth, setUser } from '../../redux/actions/authActions';
import { login } from "./auth";
import './auth.scss';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [contractNumber, setContractNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
        const user = await login(contractNumber, password);
        dispatch(setUser(user));
        dispatch(setIsAuth(true));
        history.push(MAIN_ROUTE);

}

    return (
      <Card className="auth-card" title="Logging in" bordered={false}>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Write username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input onChange={e => setContractNumber(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Write password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{padding: '0px 20px'}}
                onClick={handleLogin}
              >
                Sign in
              </Button>
              <Link to="/register">register</Link>
            </Form.Item>
          </Form>
        </Card>
    )
}

export default Login