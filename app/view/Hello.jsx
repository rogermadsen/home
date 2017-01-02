'use strict'

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Hello extends React.Component {
    constructor(props) {
        const divProps = Object.assign({}, props);
        super(divProps);
    }

    render() {
        //console.log(this.props);
        return <p>ROGER ÄR BÄST!</p>;
    }
}

module.exports = Hello;
