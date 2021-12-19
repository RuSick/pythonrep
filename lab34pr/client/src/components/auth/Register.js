import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Select, DatePicker, InputNumber, Switch, } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setIsAuth, setUser } from '../../redux/actions/authActions'
import { registration } from './auth'
import { MAIN_ROUTE } from '../../redux/types'
import './auth.scss';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { Option } = Select;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('USER');

    const handleRegister = async () => {
        if (confirmPassword !== password) {
            alert('Пароли не совпадают');
        }
        try {
            const user = await registration(
                email,
                password,
                name,
                role
            );
            console.log(user);
            dispatch(setUser(user));
            dispatch(setIsAuth(true));
            history.push(MAIN_ROUTE);
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <Card className="auth-card" title="Registration" bordered={false}>
            <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Username"
                    name="login"
                    rules={[{ required: true, message: 'Write username' }]}
                >
                    <Input onChange={(e) => setName(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Confirm password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                    <Input.Password onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Item>

                <Form.Item>
                    <Button onClick={handleRegister} type="primary" htmlType="submit" style={{ padding: '0px 20px' }}>
                        Sign up
                    </Button>
                    <Link to="/login">login</Link>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Register