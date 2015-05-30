var Store = require('./Store');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var _ = require('underscore');

var _songs = {
  's_1': {
    id: 's_1',
    path: './assets/test1.mp3',
    meta: {
      title: 'Blue Sky Action (Feat. Alex Vargas)',
      artist: 'Above & Beyond',
      album: 'We Are All We Need',
      year: 2015
    }
  }
};

var LibraryStore = _.extend({}, Store, {
  getSong: function(id) {
    return _.extend({}, _songs[id]);
  },

  getSongs: function() {
    return Object.keys(_songs).map(function(id) { return this.getSong(id); }, this);
  }
});

AppDispatcher.register(function(payload) {

});

module.exports = LibraryStore;
