import { Form, Input, Button, Checkbox, Row, Card, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Login.css';
import axios from "axios";
import React, { useState,useEffect } from 'react';
import {Redirect} from "react-router-dom";


export const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(isAuthenticated){
            console.log(isAuthenticated);
            setRedirect(true);
        }
    });

    function redirectTo() {
        return <Redirect to="/home" />;
    }

    const setAuthToken = (jwttoken) => {
        const {token} = jwttoken;
        if(token){
            //Apply authorization token to every request if logged in
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            setIsAuthenticated(true);
        }else{
            //Delete auth header
            delete axios.defaults.headers.common["Authorization"];
        }
        console.log(token);
        console.log(axios.defaults.headers.common["Authorization"]);
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const loguser = {
            username: values.username,
            password: values.password
        }
        axios.post('/authenticate',loguser)
            .then(res => {
                setAuthToken(res.data);
            })
    };

    if (redirect) return redirectTo();
    return (
        <div>
            <Row type="flex" justify="center"  style={{minHeight: '100vh'}}>
                <Col>
                    <Card bordered={false}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
