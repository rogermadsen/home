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
    on: false,
    updating: false
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
            case ActionTypes.LIGHT_ON:
                state.on = true;
                return JSON.parse(JSON.stringify(state));

            case ActionTypes.LIGHT_OFF:
                state.on = false;
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
