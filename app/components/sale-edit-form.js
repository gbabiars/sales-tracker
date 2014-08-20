import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'form',
    role: 'form',

    saveDisabled: Ember.computed.not('sale.isDirty'),

    submit: function(e) {
        e.preventDefault();
        var sale = this.get('sale');
        this.sendAction('action', sale);
    }
});
