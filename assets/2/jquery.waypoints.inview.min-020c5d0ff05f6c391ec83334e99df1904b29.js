/*!
Waypoints Inview Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(){}function e(t){this.options=i.Adapter.extend({},e.defaults,t),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.element=this.options.element,this.createWaypoints()}var i=window.Waypoint;e.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,i=t[this.axis].length;i>e;e++){var n=t[this.axis][e];this.createWaypoint(n)}},e.prototype.createWaypoint=function(t){var e=this;this.waypoints.push(new i({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:function(t){return function(i){e.options[t[i]].call(e,i)}}(t),offset:t.offset,horizontal:this.options.horizontal}))},e.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].destroy();this.waypoints=[]},e.prototype.disable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].disable()},e.prototype.enable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].enable()},e.defaults={context:window,enabled:!0,enter:t,entered:t,exit:t,exited:t},i.Inview=e}();

// Allow custom offsets
Waypoint.Inview.prototype.createWaypoints = function() {
  var configs = {
    vertical: [{
      down: 'enter',
      up: 'exited',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.bottom || 0;
        return this.options.context.innerHeight - _offset;
      }.bind( this )
    }, {
      down: 'entered',
      up: 'exit',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.bottom || 0;
        return this.options.context.innerHeight - this.element.outerHeight() - _offset;
      }.bind( this )
    }, {
      down: 'exit',
      up: 'entered',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.top || 0;
        return _offset;
      }.bind( this )
    }, {
      down: 'exited',
      up: 'enter',
      offset: function() {
        var _offset = this.options.offset && this.options.offset.top || 0;
        return _offset - this.element.outerHeight();
      }.bind( this )
    }],
    horizontal: [{
      right: 'enter',
      left: 'exited',
      offset: '100%'
    }, {
      right: 'entered',
      left: 'exit',
      offset: 'right-in-view'
    }, {
      right: 'exit',
      left: 'entered',
      offset: 0
    }, {
      right: 'exited',
      left: 'enter',
      offset: function() {
        return -this.adapter.outerWidth()
      }
    }]
  };

  for (var i = 0, end = configs[this.axis].length; i < end; i++) {
    var config = configs[this.axis][i]
    this.createWaypoint(config)
  }
};
