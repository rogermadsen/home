var zWaveUrl = 'http://192.168.86.100';

var LIGHT_TYPE_PHILIPS_HUE = 'philips-hue';
var LIGHT_TYPE_ZWAVE = 'zwave';

var rooms = [{
    name: 'Vardagsrum',
    lights: []
}, {
    name: 'Kök',
    lights: [0, 1]
}, {
    name: 'Sovrum',
    lights: []
}, {
    name: 'Barnrum',
    lights: []
}]

var lights = [{
    id: 1,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Tak (Vardagsrum)'
}, {
    id: 2,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Soffbord (Vardagsrum)'
}, {
    id: 4,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Köksö (Kök)'
}, {
    id: 5,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Köksbord 1 (Kök)'
}, {
    id: 6,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Köksbord 2 (Kök)'
}, {
    id: 3,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Tak (Sovrum)'
}, {
    id: 'ZWayVDev_zway_2-0-37',
    type: LIGHT_TYPE_ZWAVE,
    name: 'Fönster (Kök)'
}, {
    id: 'ZWayVDev_zway_4-0-37',
    type: LIGHT_TYPE_ZWAVE,
    name: 'Soffhylla (Vardagsrum)'
}]

var scenes = [{
    name: 'Filmtajm'
}];

module.exports.LIGHT_TYPE_PHILIPS_HUE = LIGHT_TYPE_PHILIPS_HUE;
module.exports.LIGHT_TYPE_ZWAVE = LIGHT_TYPE_ZWAVE;

module.exports.rooms = rooms;
module.exports.lights = lights;
module.exports.scenes = scenes;
