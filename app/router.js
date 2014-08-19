import Ember from 'ember';

var Router = Ember.Router.extend({
    location: SalesTrackerENV.locationType
});

Router.map(function() {
  this.resource('sales');
  this.resource('products');
});

export default Router;
