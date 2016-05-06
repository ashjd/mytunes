// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(response) {
    return response.results;
  },
  initialize: function() {
    this.on('enqueue', function(song) {
      //console.log(song);
    });

    this.on('change', function(data) {
      console.log(data);
    });

    this.fetch({
      success: (function(model) {
        //this.trigger('libraryChanged', model);
        if (window.actions) {
          //get relevant song
          var sgs = model.where({title: window.actions});
          if (sgs) {
            console.log(sgs[0]);
            sgs[0].enqueue();
            sgs[0].play();
          }
          //then reset val
          window.actions = null;
        }
      }).bind(this)
    });
  }
});