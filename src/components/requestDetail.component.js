import {Divider, Steps, Button, Row, Col, notification, Descriptions, Badge} from 'antd';
import React, {Component} from "react";
import AuthService from "../services/auth.service";

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default class RequestDetail extends Component {
    state = {
        process: 1,
        time: new Date(),
        orderID: 0,
        orderDetail: [],
        showElem: true
    };

    componentDidMount() {
        var orderID
        var localS = localStorage.getItem(orderID);
        console.log(localS);

        AuthService.getOrderDetails(localS).then(
            response => {
                this.setState({orderDetail:response.data})
                console.log(this.state.orderDetail)
            },
            error => {
                console.log("error")
            }
        );
    }


    nextStep = () => {
        if (this.state.process === 2) {
            const btn = (
                <Button type="primary" size="small">
                    Confirm
                </Button>
            );
            notification.open({
                message: 'Order complete!',
                description:
                    '',
                btn
            });
            this.setState({showElem:false})
        }
        this.setState({process: this.state.process + 1})
    }

    render() {
        const {Step} = Steps;
        const {orderDetail} = this.state

        return (
            <div>

                <Descriptions title="Order Info" bordered>
                    <Descriptions.Item label="Sender Name">{orderDetail.sender_name}</Descriptions.Item>
                    <Descriptions.Item label="Sender Phone" span={2} >{orderDetail.sender_phone}</Descriptions.Item>
                    <Descriptions.Item label="Address" span={3}> {orderDetail.sender_address}</Descriptions.Item>

                    <Descriptions.Item label="Receiver Name">{orderDetail.receiver_name}</Descriptions.Item>
                    <Descriptions.Item label="Receiver Phone" span={2}>{orderDetail.receiver_phone}</Descriptions.Item>
                    <Descriptions.Item label="Address" span={3}>{orderDetail.receiver_address}</Descriptions.Item>

                    <Descriptions.Item label="Order time">{orderDetail.pickup_date}</Descriptions.Item>
                    <Descriptions.Item label="Appointment No:" span={2}>
                        {orderDetail.id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        {/*If complete, status = success, or = processing*/}
                        <Badge status="processing" text="Running" />

                    </Descriptions.Item>
                    <Descriptions.Item label="Product Type">{orderDetail.product_type}</Descriptions.Item>
                    <Descriptions.Item label="Product Weight(kg)">{orderDetail.product_weight}</Descriptions.Item>
                    <Descriptions.Item label="Price">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Driver Name">Driver1</Descriptions.Item>
                    <Descriptions.Item label="Drive Phone">13718241781</Descriptions.Item>

                </Descriptions>

                <br/><br/>
                <Steps progressDot
                       current={(this.state.process == 1 || this.state.process == 2) ? 1 : this.state.process}>
                    <Step title="Waiting"/>
                    <Step title="In Progress"/>
                    <Step title="Finished"/>
                </Steps>
                <Divider/>
                <Steps progressDot current={this.state.process} direction="vertical">
                    <Step title="Waiting" subTitle={this.state.time.toLocaleString()}
                          description="Waiting for the driver to accept the order"/>
                    <Step title="In Progress" subTitle={this.state.time.toLocaleString()}
                          description="The driver has already accepted the order"/>
                    <Step title="In Progress" subTitle=""
                          description="The driver has already packed the product"/>
                    <Step title="Finished" subTitle=""
                          description="The package has been delivered to the delivery point "/>
                </Steps>
                <Row align="middle">
                    <Col span={18}>

                    </Col>
                    <Col offset={3}>
                        {
                            this.state.showElem?(
                                <Button type="primary" onClick={this.nextStep} >Next Step</Button>
                            ):(
                                <Button type="primary">Finish</Button>
                            )
                        }

                    </Col>
                </Row>
            </div>
        );
    }
}