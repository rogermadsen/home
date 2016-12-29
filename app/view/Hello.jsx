'use strict'

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


/*
module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function() {
        return <RaisedButton label='Start sunset' onTouchTap={() => { console.log('test!!'); }}/>

    }
})
*/


module.exports = function (props) {

    console.log(props);

    return (<p>HEJHEJ</p>)
}

/*
class Photo extends React.Component {
  render() {
    return <p>ROGER ÄR BÄST!</p>;
  }
}

module.exports = Photo;
*/
