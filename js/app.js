var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('stations', function() {
    this.resource('station', { path: ':station_id' }, function() {
      //this.resource('track', { path: ':track_id' })
      this.resource('track')
    })
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('stations');
  }
});

App.StationsRoute = Ember.Route.extend({
  model: function() {
    return App.Station.find();
    //return Em.A(['Carl','Stacey']);
    //return Em.A([]);
  }
});

App.StationRoute = Ember.Route.extend({
  model: function(params) {
    return App.Station.find(params.station_id);
  }
});

//App.TrackRoute = Ember.Route.extend({
  //model: function(params) {
    //return App.Track.find(params.track_id);
  //}
//});

//App.ApplicationRoute = Ember.Route.extend({});

//App.searchController = Ember.Object.create({
  //searchText: '',
  //search: function(){
    //console.log('search for %@'.fmt( this.get('searchText') ));
  //}
//});


//App.TrackView = Ember.View.extend({
  //templateName: 'track',
  //didInsertElement: function() {
  //}
//})

// SoundCloud
//$(document).ready(function(){
  //App.iframeElement = $('iframe')[0];
  //App.SCWidget = SC.Widget(App.iframeElement);
//});

App.SearchView = Ember.TextField.extend({
  valueBinding: 'App.SearchController.model',
  //change: function(evt) {
    //var value = this.get('value');
    //console.log(value);
    ////this.set('formBlurred', true);
  //}
  insertNewline: function() {
    App.SearchController.setCurrent
    var value = this.get('value');
    console.log(value);
    //debugger;
    //if (value) {
      //App.productsController.search(value);
    //}
  }
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Track = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string')
});

App.Station = DS.Model.extend({
  name: DS.attr('string'),
  tracks: DS.hasMany('App.Track')
});

App.Station.FIXTURES = [
  {
    id: 1,
    name: 'Carl Craig',
    tracks: [100]
  },
  {
    id: 2,
    name: 'Stacey Pullen',
    tracks: [200]
  }
];

App.Track.FIXTURES = [
  {
    id: 100,
    title: '20 Years Of Planet E Essential Mix',
    url: 'https://soundcloud.com/r_co/carl-craig-20-years-of-planet'
  },
  {
    id: 200,
    title: 'Stacey Pullen Live',
    url: 'https://soundcloud.com/staceypullen/stacey-pullen-live'
  },
];

window.setTimeout(function(){
    //var widgetIframe = document.getElementById('sc-widget'),
        //widget = SC.Widget(widgetIframe);

    //widget.bind(SC.Widget.Events.READY, function() {
      //widget.bind(SC.Widget.Events.PLAY, function() {
        //// get information about currently playing sound
        //widget.getCurrentSound(function(currentSound) { 
          ////console.log('sound ' + currentSound.get('') + 'began to play');
        //});
      //});
      //// get current level of volume
      //widget.getVolume(function(volume) {
        //console.log('current volume value is ' + volume);
      //});
      //// set new volume level
      //widget.setVolume(50);
      //// get the value of the current position
    //});
}, 1000);
