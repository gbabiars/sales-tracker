import Ember from 'ember';

var Router = Ember.Router.extend({
    location: SalesTrackerENV.locationType
});

Router.map(function() {
  this.resource('sales', function() {
    this.route('edit', { path: ':sale_id/edit' });
    this.route('new');
  });
  this.resource('products', function() {
    this.route('detail', { path: ':product_id' });
  });
});

export default Router;
