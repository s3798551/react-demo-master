import React, { Component } from 'react'
import classnames from 'classnames'

export default class FlashMassages extends Component {
    onClick = () => {
        this.props.deleteFlashMassage(this.props.massage.id)
    }
    render() {

        const {type,text} = this.props.massage;

        return (
            <div className={ classnames('alert',{
                'alert-success': type === 'success',
                'alert-danger' : type ==='danger'
            }) }>
                
                <button onClick={ this.onClick } className="close">&times;</button>
                { text }
            </div>
        )
    }
}
