import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
    return parseInt(value).toLocaleString();

});
