'use strict';

import React from 'react';
//import Counter from './Counter';
//import Immutable from 'immutable';
import {
    ReduceStore
} from 'flux/utils';
//import Todo from './Todo';
import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

var store = {
    lights: []
}


class AppStore extends ReduceStore {

    constructor() {
        console.log('Store constructor');
        super(AppDispatcher);
    }

    getInitialState() {
        return store;
    }

    reduce(state, action) {
        console.log('reduce');
        console.log(state);
        switch (action.type) {
            case ActionTypes.UPDATED:
            console.log('UPDATED');
            console.log(state);
                state.lights = action.data;
                return JSON.parse(JSON.stringify(state));

            case ActionTypes.LIGHT_UPDATING:
                state.updating = true;
                return JSON.parse(JSON.stringify(state));

            case ActionTypes.LIGHT_ON:
                var lightId = action.lightId;
                state.lights[lightId].on = true;
                state.lights[lightId].updating = false;
                return JSON.parse(JSON.stringify(state));

            case ActionTypes.LIGHT_OFF:
                var lightId = action.lightId;
                state.lights[lightId].on = false;
                state.lights[lightId].updating = false;
                return JSON.parse(JSON.stringify(state));

            default:
                return state;
        }
    }

    getState() {
        // return `this._state`, which is that one number, in a way that doesn't let the user modify it through something like `store.getState() = 5`
        // my offhand JS knowledge doens't let me answer that with certainty, but maybe:
        //var a = this._state + 1;
        return this._state; //a - 1;
    }
}


/*
class AppStore extends Store {
    constructor() {
        console.log('Store constructor');
        super(AppDispatcher);
    }

    __onDispatch(payload) {
        console.log('onDispatch!');
    }
}
*/
export default new AppStore();
