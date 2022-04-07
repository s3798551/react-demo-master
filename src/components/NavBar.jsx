import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/LoginAction';


class NavBar extends Component {


    logout = (e) => {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        //
        const { isAuth } = this.props.auth

        // user model
        const userLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" onClick={ this.logout.bind(this) } >Logout</a>
                </li>
            </ul>
        )

        // visitor model
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