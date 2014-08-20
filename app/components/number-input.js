import Ember from 'ember';

export default Ember.TextField.extend({
    type: 'number',

    willInsertElement: function() {
        this.set('value', this.get('number'));
    },

    valueChanged: function() {
        var value = this.get('value'),
            number;

        if(value) {
            number = parseInt(value, 10);
            this.set('number', number);
        } else {
            this.set('number', 0);
        }
    }.observes('value')
});
