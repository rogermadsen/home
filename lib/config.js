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
    id: 5,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Köksbord 1'
}, {
    id: 3,
    type: LIGHT_TYPE_PHILIPS_HUE,
    name: 'Tak (Sovrum)'    
},{
    id: 'ZWayVDev_zway_2-0-37',
    type: LIGHT_TYPE_ZWAVE,
    name: 'Fönster (Kök)'
}]

var scenes = [{
    name: 'Filmtajm'
}];

module.exports.rooms = rooms;
module.exports.lights = lights;
module.exports.scenes = scenes;
