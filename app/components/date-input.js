/* global moment */

import Ember from 'ember';

export default Ember.TextField.extend({
    type: 'date',

    willInsertElement: function() {
        var formattedDate = moment(this.get('date')).format('YYYY-MM-DD');
        this.set('value', formattedDate);
    },

    valueChanged: function() {
        var value = this.get('value'),
            date;

        if(value) {
            date = moment(value, "YYYY-MM-DD").toISOString();
            this.set('date', date);
        } else {
            this.set('date', null);
        }
    }.observes('value')
});
