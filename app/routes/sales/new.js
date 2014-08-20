import Ember from 'ember';
import SalesEditRouteMixin from '../../mixins/sales-edit-route';

export default Ember.Route.extend(SalesEditRouteMixin, {

    model: function() {
        return this.store.createRecord('sale');
    }

});
