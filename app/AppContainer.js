'use strict';

import AppView from './view/AppView';
import {Container} from 'flux/utils';
import Actions from './Actions';
import AppStore from './AppStore';

function getStores() {
  return [
    AppStore,
  ];
}

function getState() {
  return {
      store: AppStore.getState(),

      onLightOn: Actions.turnOnLight,
      onLightOff: Actions.turnOffLight,
      onStartSunrise: Actions.startSunrise
  };
}

export default Container.createFunctional(AppView, getStores, getState);