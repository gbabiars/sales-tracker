import Ember from 'ember';

export default Ember.Component.extend({
    sales: [],

    count: function() {
        return this.get('sales.length');
    }.property('sales.[]'),

    totalVolume: function() {
        return this.get('sales').reduce(function(total, sale) {
            return total + parseInt(sale.get('volume'), 10);
        }, 0);
    }.property('sales.@each.volume'),

    totalPrice: function() {
        return this.get('sales').reduce(function(total, sale) {
            return total + parseInt(sale.get('price'), 10);
        }, 0);
    }.property('sales.@each.price')
});
