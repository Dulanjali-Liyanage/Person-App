import {Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Card} from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import React, {useState} from "react";
import {Redirect} from "react-router-dom";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 10,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};



export const Register = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const newuser = {
            username: values.username,
            password: values.password
        }
        axios.post('/register',newuser)
        window.location.reload();
    };

    return (
        <div>
            <Row type="flex" justify="center"  style={{minHeight: '100vh'}}>
                <Col>
                    <Card bordered={false}>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                        >


                            <Form.Item
                                name="username"
                                label="User Name"
                                tooltip="What do you want others to call you?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
