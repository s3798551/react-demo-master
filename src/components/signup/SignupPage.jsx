import React from 'react'
import SignupForm from './SignupForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/SignupActions'
import * as flashAction from '../../actions/FlashMassage'

class SignupPage extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6" >
                    <SignupForm signupActions={ this.props.signupActions } flashAction = {this.props.flashAction}/>
                </div>
                <div className="col-sm-3"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupActions: bindActionCreators(signupActions, dispatch),
        flashAction: bindActionCreators(flashAction,dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SignupPage)
