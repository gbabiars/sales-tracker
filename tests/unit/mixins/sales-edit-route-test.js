import Ember from 'ember';
import SalesEditRouteMixin from 'sales-tracker/mixins/sales-edit-route';

module('SalesEditRouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var SalesEditRouteObject = Ember.Object.extend(SalesEditRouteMixin);
  var subject = SalesEditRouteObject.create();
  ok(subject);
});
