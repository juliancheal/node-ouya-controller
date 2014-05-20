var HID = require('node-hid'),
    util = require('util'),
    colors = require('colors'),
    events = require('events');
    
var buttons  =
  [
    {
      "name": "o",
      "buttonBlock": 13,
      "buttonValue": "0x1"
    },
    {
      "name": "u",
      "buttonBlock": 13,
      "buttonValue": "0x2"
    },
    {
      "name": "y",
      "buttonBlock": 13,
      "buttonValue": "0x4"
    },
    {
      "name": "a",
      "buttonBlock": 13,
      "buttonValue": "0x8"
    },
    {
      "name": "l_bumper",
      "buttonBlock": 13,
      "buttonValue": "0x10"
    },
    {
      "name": "r_bumper",
      "buttonBlock": 13,
      "buttonValue": "0x20"
    }
  ]
  
  function OuyaController() {
    var device = new HID.HID(10294, 1)
    
    this.hid = device
    this.position = 0;

    for (var key in buttons) {
      this[key] = 0;
    }

    try{
      this.hid.read(this.interpretData.bind(this));
    }
    catch ( ex ){
      console.log( 'error: '.red, 'OUYA controller could not be found.' );
    }
  }
  
  util.inherits(OuyaController, events.EventEmitter);

  var exec = require('child_process').exec;

  OuyaController.prototype.interpretData = function(error, data) {
    for (var key in buttons) {
      var address = buttons[key]
      var state = data[parseInt(address.buttonBlock)] & parseInt(address.buttonValue,16)
      
      if(state ^ this[key]){
        this.emit((state ? buttons[key].name+':press': buttons[key].name+':release'), key);
        this[key] = state
      }
    }

    this.hid.read(this.interpretData.bind(this));
  }

  module.exports = OuyaController