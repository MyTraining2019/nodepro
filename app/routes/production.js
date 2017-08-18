import Ember from 'ember';
const Promise = Ember.RSVP.Promise;

export default Ember.Route.extend({
  model(params) {
    // return {
    //   "ProductName": "Ponderosa",
    //   "DimensionName": "1\" X 4\" X 14'",
    //   "BoardsSum": 20,
    //   "BoardFeetSum": 10000
    // }
    // return Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
    return new Promise(function(resolve) {
      setTimeout(function() {
        let data = Ember.$.getJSON(`/data/production.json?starts_at=${params.start}&ends_at=${params.end}`);
        resolve(data);
      }, 400);
    });
  }
});
