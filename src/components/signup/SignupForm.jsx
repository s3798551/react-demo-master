import React from 'react'
import classnames from "classnames"

import { withRouter } from 'react-router-dom'


class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfir: "",
            errors: {},
            isloading: false,  //判断是否有错误
            isvalid:false,
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 提交
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({errors:{}, isloading:true})
        this.props.signupActions.userSignupRequest(this.state).then(
            // ture
            () => {
                // console.log(this.props);
                this.props.flashAction.addFlashMassage({
                    type:"success",
                    text:"Sign up Successfully！"
                })
                this.props.history.push('/')
             },
            // false，调用错误内容
            ({ response }) => { this.setState({ errors: response.data, isloading: false }) }
        )
    }
    // 检查username是否重复
    clackUserExists = (e) =>{
        const fidld = e.target.name;
        const val = e.target.value;
        let isvalid;
        if(val !==''){
            this.props.signupActions.isUserExists(val).then(res =>{
                let errors = this.state.errors;
                if(res.data[0]){
                    errors[fidld] = 'The user"' + val + '"已存在！'
                    isvalid = true
                }else{
                    errors[fidld] = '';
                    isvalid = false
                }
                this.setState({errors,isvalid})
            })
        }
    }

    render() {

        const { errors, isloading, isvalid } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Sign up</h2>

                <div className="form-group">
                    <label className="control-label">Username </label>
                    <input
                        className={classnames('form-control', { 'is-invalid': errors.username })}
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        onBlur = {this.clackUserExists}
                    />
                    {errors.username && <span className="from-text text-muted">{errors.username}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Email </label>
                    <input
                        className={classnames('form-control', { 'is-invalid': errors.email })}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <span className="from-text text-muted">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Password </label>
                    <input
                        className={classnames('form-control', { 'is-invalid': errors.password })}
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <span className="from-text text-muted">{errors.password}</span>}

                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation </label>
                    <input
                        className={classnames('form-control', { 'is-invalid': errors.passwordConfir })}
                        type="password"
                        name="passwordConfir"
                        value={this.state.passwordConfir}
                        onChange={this.onChange}
                    />
                    {errors.passwordConfir && <span className="from-text text-muted">{errors.passwordConfir}</span>}

                </div>

                <div className="form-group">
                    <button type="submit" disabled={isloading || isvalid} className="btn btn-primary btn-md">注册</button>
                </div>
            </form>
        )
    }
}

export default withRouter(SignupForm)
