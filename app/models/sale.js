import DS from 'ember-data';

export default DS.Model.extend({
    volume: DS.attr('number'),
    price: DS.attr('number'),
    date: DS.attr(),
    product: DS.belongsTo('product')
});
