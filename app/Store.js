var AppDispatcher = require('./AppDispatcher');
var AppConstants = require('./ActionTypes');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _store = {
    lightOn: false,
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
var TodoStore = ObjectAssign({}, EventEmitter.prototype, {

    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },

    getLight: function() {
        return _store;
    }

});

AppDispatcher.register(function(payload) {


    //var action = payload.action;

    switch (payload.actionType) {
        case AppConstants.LIGHT_TOGGLE:
            console.log('Toggle light');

            if (_store.lightOn === true) {
                _store.lightOn = false;
            } else {
                _store.lightOn = true;
            }

            TodoStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.LIGHT_ON:
            console.log('Lights on!');
            // Add the data defined in the TodoActions
            // which the View will pass as a payload
            //_store.editing = true;

            TodoStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.LIGHTS_OFF:

            // Add the data defined in the TodoActions
            // which the View will pass as a payload
            //_store.list.push(action.text);
            //_store.editing = false;
            TodoStore.emit(CHANGE_EVENT);
            break;

        default:
            return true;
    }
});

module.exports = TodoStore;
