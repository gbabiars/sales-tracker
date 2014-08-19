import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
    return parseInt(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
});
