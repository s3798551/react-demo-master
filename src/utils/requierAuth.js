/*
 * @Author: your name
 * @Date: 2020-06-22 17:53:51
 * @LastEditTime: 2020-06-29 19:28:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-redux-login-stage1-evn\src\utils\requierAuth.js
 */ 
import React from 'react'
import { connect } from 'react-redux'
import { addFlashMassage } from '../actions/FlashMassage'
import { withRouter } from 'react-router-dom'

export default function (ComposedComponent){
    class Authenticate extends React.Component{

        componentWillMount(){
            console.log('componentWillMount!!!!!!!!!')
            // 是否登录
            if(!this.props.isAuth)
            {
                this.props.addFlashMassage({
                    type:'danger',
                    text:'您还未进行登录，请登录后在访问！'
                });
                this.props.history.push("/login")
            }
        }   

        componentWillUpdate(nextProps){
            // 是否改变登录状态
            if (!nextProps.isAuth) {
                this.props.history.push("/login")
            }
        }


        render(){
            return(
                <ComposedComponent {...this.props} ></ComposedComponent>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return withRouter(connect(mapStateToProps,{addFlashMassage})(Authenticate))
}