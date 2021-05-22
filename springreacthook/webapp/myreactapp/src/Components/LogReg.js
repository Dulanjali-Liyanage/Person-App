import { Row, Card, Col, Tabs } from 'antd';
import {Login} from "./Login";
import {Register} from "./Register";
import 'antd/dist/antd.css';

const { TabPane } = Tabs;


function callback(key) {
    console.log(key);
}

export const LogReg = () => {
    return(
        <div>
            <Row type="flex" justify="center" align="center" style={{minHeight: '100vh'}}>
                <Col>
                    <Card style={{width: '100vh',height:'100vh'}}>

                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Sign In" key="1">
                                <Login />
                            </TabPane>
                            <TabPane tab="Sign Up" key="2">
                                <Register />
                            </TabPane>

                        </Tabs>

                    </Card>
                </Col>
            </Row>
        </div>
    );
};