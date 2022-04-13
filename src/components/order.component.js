import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Order extends Component{
    constructor(props) {
        super(props);
        this.handleOrder = this.handleOrder.bind(this);
        this.onChangesenderName = this.onChangesenderName.bind(this);
        this.onChangesenderPhonenumber = this.onChangesenderPhonenumber.bind(this);
        this.onChangesenderAddress = this.onChangesenderAddress.bind(this);
        this.onChangereceiverName = this.onChangereceiverName.bind(this);
        this.onChangereceiverPhonenumber = this.onChangereceiverPhonenumber.bind(this);
        this.onChangereceiverAddress = this.onChangereceiverAddress.bind(this);
        this.onChangeproductType = this.onChangeproductType.bind(this);
        this.onChangeproductWeight = this.onChangeproductWeight.bind(this);
        this.onChangepickupTime = this.onChangepickupTime.bind(this);

        this.state = {
            senderName: "",
            senderPhonenumber: "",
            senderAddress: "",
            receiverName: "",
            receiverPhonenumber: "",
            receiverAddress: "",
            productType: "",
            productWeight: "",
            pickupTime: "",
            successful: false,
            message: ""
        };
    }
    onChangesenderName(e) {
        this.setState({
            senderName: e.target.value
        });
    }
    onChangesenderPhonenumber(e) {
        this.setState({
            senderPhonenumber: e.target.value
        });
    }
    onChangesenderAddress(e) {
        this.setState({
            senderAddress: e.target.value
        });
    }
    onChangereceiverName(e) {
        this.setState({
            receiverName: e.target.value
        });
    }
    onChangereceiverPhonenumber(e) {
        this.setState({
            receiverPhonenumber: e.target.value
        });
    }
    onChangereceiverAddress(e) {
        this.setState({
            receiverAddress: e.target.value
        });
    }
    onChangeproductType(e) {
        this.setState({
            productType: e.target.value
        });
    }
    onChangeproductWeight(e) {
        this.setState({
            productWeight: e.target.value
        });
    }
    onChangepickupTime(e) {
        this.setState({
            pickupTime: e.target.value
        });
    }
    handleOrder(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.order(
                this.state.senderName,
                this.state.senderPhonenumber,
                this.state.senderAddress,
                this.state.receiverName,
                this.state.receiverPhonenumber,
                this.state.receiverAddress,
                this.state.productType,
                this.state.productWeight,
                this.state.pickupTime
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }

    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container">

                    <Form
                        onSubmit={this.handleOrder}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="senderName">senderName</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="senderName"
                                        value={this.state.senderName}
                                        onChange={this.onChangesenderName}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="senderPhonenumber">senderPhonenumber</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="senderPhonenumber"
                                        value={this.state.senderPhonenumber}
                                        onChange={this.onChangesenderPhonenumber}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="senderAddress">senderAddress</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="senderAddress"
                                        value={this.state.senderAddress}
                                        onChange={this.onChangesenderAddress}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="receiverName">receiverName</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="receiverName"
                                        value={this.state.receiverName}
                                        onChange={this.onChangereceiverName}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="receiverPhonenumber">receiverPhonenumber</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="receiverPhonenumber"
                                        value={this.state.receiverPhonenumber}
                                        onChange={this.onChangereceiverPhonenumber}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="receiverAddress">receiverAddress</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="receiverAddress"
                                        value={this.state.receiverAddress}
                                        onChange={this.onChangereceiverAddress}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="productType">productType</label>
                                    <select
                                        name="productType"
                                        className="form-select"
                                        value={this.state.productType}
                                        onChange={this.onChangeproductType}
                                        required>
                                        <option value="document">Document</option>
                                        <option value="eproducts">Electronic products</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="others">Others</option>
                                    </select>

                                </div>

                                <div className="form-group">
                                    <label htmlFor="productWeight">productWeight(kg)</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="productWeight"
                                        value={this.state.productWeight}
                                        onChange={this.onChangeproductWeight}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pickupTime">pickupTime</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="pickupTime"
                                        value={this.state.pickupTime}
                                        onChange={this.onChangepickupTime}
                                        validations={[required]}
                                    />
                                </div>


                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Submit</button>
                                </div>
                            </div>
                        )}

                        {this.state.message && (
                            <div className="form-group">
                                <div
                                    className={
                                        this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        );
    }




}