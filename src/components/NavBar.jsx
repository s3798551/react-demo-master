import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/LoginAction';


class NavBar extends Component {

    // 退出操作
    logout = (e) => {
        e.preventDefault()
        // 数据清除
        this.props.logout()
    }

    render() {
        // 读取是否登录
        const { isAuth } = this.props.auth

        // 用户模式（已登录）
        const userLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" onClick={ this.logout.bind(this) } >Logout</a>
                </li>
            </ul>
        )

        // 游客模式（未登录）
        const guestLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbarr-light bg-light mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Greenii Inc</Link>
                    <div className="navbar-collapse" id="navbarsExample05">
                        {isAuth ? userLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{logout})(NavBar)