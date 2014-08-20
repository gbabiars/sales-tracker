import DS from 'ember-data';

export default DS.Model.extend({
    volume: DS.attr('number', { defaultValue: 0 }),
    price: DS.attr('number', { defaultValue: 0 }),
    date: DS.attr(),
    product: DS.belongsTo('product')
});
