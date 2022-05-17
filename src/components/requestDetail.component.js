import { Divider, Steps, Button, Row, Col, notification} from 'antd';
import React, {Component} from "react";
import AuthService from "../services/auth.service";

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default class RequestDetail extends Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
        orderList: [],
        process: 1,
        time: new Date(),
        orderID: 0,
        orderDetail: [],
        showElem: true
    };

    componentDidMount() {

    }


    nextStep = () => {
        this.setState({process: this.state.process + 1})

        if (this.state.process === 2) {
            const btn = (
                <Button type="primary" size="small">
                    Confirm
                </Button>
            );
            notification.open({
                message: 'Notification Title',
                description:
                    'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
                btn
            });
            this.setState({showElem:false})
        }

    }

    render() {
        const {Step} = Steps;
        return (
            <div>
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
                    <Step title="In Progress" subTitle={this.state.time.toLocaleString()}
                          description="The driver has already packed the product"/>
                    <Step title="Finished" subTitle={this.state.time.toLocaleString()}
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