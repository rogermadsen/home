import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var AppDispatcher = require('../AppDispatcher');
//var AppConstants = require('../Constants');
var Store = require('../Store');

class SunsetButton extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {date: new Date()};
    }

    render() {
        return <RaisedButton label='Start sunset' onTouchTap={this.props.onStartSunrise}/>
    }

}

module.exports = SunsetButton;
