import React, { Component } from 'react'
import FlashMassage from './FlashMessage'
import { connect } from 'react-redux'
import { deleteFlashMassage } from '../../actions/FlashMassage'


class FlashMessagesList extends Component {
    render() {
            const massage = this.props.massages.map(massage => 
                 <FlashMassage  key={massage.id} massage = {massage} deleteFlashMassage={ this.props.deleteFlashMassage }/>
            )
        // console.log(this.props);
        return (
            <div className="container">
                { massage }
            </div>
        )
    }
}
const mapDispatchToProps = (state) => {
    return {
        massages:state.flashMassage
    }
}


export default connect(mapDispatchToProps,{ deleteFlashMassage })(FlashMessagesList)
