import React,{Component} from "react";
import { Divider,Button, Row, Col, Descriptions, Steps, Badge} from 'antd';

const style = { background: '#0092ff', padding: '20px 0' };
const { Step } = Steps;

export default class Details extends Component {

    state={
        process: 0,
        time : new Date()
    }

    render() {
        return (
            <div>
                <Descriptions title="User Info">
                    <Descriptions.Item label="Receiver Name">User1</Descriptions.Item>
                    <Descriptions.Item label="Telephone" span={2}>1810000000</Descriptions.Item>
                    <Descriptions.Item label="Address" span={3}>
                        18/33 LaTrobe St., VIC3000, Australia
                    </Descriptions.Item>
                    <Descriptions.Item label="Sender Name">User2</Descriptions.Item>
                    <Descriptions.Item label="Telephone" span={2}>1810000000</Descriptions.Item>
                    <Descriptions.Item label="Address" span={3}>
                        18/33 LaTrobe St., VIC3000, Australia
                    </Descriptions.Item>
                    <Descriptions.Item label="Product Type">Cloth</Descriptions.Item>
                    <Descriptions.Item label="Product Weight">2kg</Descriptions.Item>
                    <Descriptions.Item label="Price">$60</Descriptions.Item>
                    <Descriptions.Item label="Pickup Time">2018-1-1 10:22:00</Descriptions.Item>
                    <Descriptions.Item label="Appointment No:"span={2}>CX12094148172941</Descriptions.Item>
                    <Descriptions.Item label="Driver Name">Driver1</Descriptions.Item>
                    <Descriptions.Item label="Drive Phone">13718241781</Descriptions.Item>
                </Descriptions>

                <Descriptions title="Order Info" bordered>
                    <Descriptions.Item label="Sender Name">User1</Descriptions.Item>
                    <Descriptions.Item label="Sender Phone" span={2} >1810000000</Descriptions.Item>
                    <Descriptions.Item label="Address"span={3}> 18/33 LaTrobe St., VIC3000, Australia</Descriptions.Item>

                    <Descriptions.Item label="Receiver Name">User2</Descriptions.Item>
                    <Descriptions.Item label="Receiver Phone" span={2}>1810000000</Descriptions.Item>
                    <Descriptions.Item label="Address"span={3}> 18/33 LaTrobe St., VIC3000, Australia</Descriptions.Item>

                    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Appointment No:" span={2}>
                        CX12094148172941
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        {/*If complete, status = success, or = processing*/}
                        <Badge status="processing" text="Running" />

                    </Descriptions.Item>
                    <Descriptions.Item label="Product Type">Cloth</Descriptions.Item>
                    <Descriptions.Item label="Product Weight(kg)">2</Descriptions.Item>
                    <Descriptions.Item label="Price">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Driver Name">Driver1</Descriptions.Item>
                    <Descriptions.Item label="Drive Phone">13718241781</Descriptions.Item>

                </Descriptions>

                <Divider orientation="left">Status</Divider>

                <Steps progressDot current={(this.state.process==1 || this.state.process==2)? 1 : this.state.process}>
                    <Step title="Waitting" />
                    <Step title="In Progress"/>
                    <Step title="Finished" />
                </Steps>
                <Divider dashed={true} />
                <Steps progressDot current={this.state.process} direction="vertical">
                    <Step title="Waitting" subTitle={this.state.time.toLocaleString()} description="Waiting for the driver to accept the order" />
                    <Step title="In Progress" subTitle={this.state.time.toLocaleString()} description="The driver has already accepted the order" />
                    <Step title="In Progress"subTitle={this.state.time.toLocaleString()}  description="The driver has already packed the product" />
                    <Step title="Finished" subTitle={this.state.time.toLocaleString()} description="The package has been delivered to the delivery point " />
                </Steps>

                <Row align="middle">
                    <Col span={18}>

                    </Col>
                    <Col offset={3}>
                        <Button type="primary">Cancel</Button>
                    </Col>
                </Row>

            </div>
        );
    }
}