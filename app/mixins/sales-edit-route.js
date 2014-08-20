import Ember from 'ember';

export default Ember.Mixin.create({

    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('products', this.store.all('product'));
    },

    actions: {
        save: function(model) {
            model.save()
                .then(function() {
                    this.transitionTo('sales');
                }.bind(this))
                .catch(function() {
                    console.log('error saving');
                });
        },

        willTransition: function() {
            var model = this.controller.get('model');
            if(model.get('isDirty')) {
                model.rollback();
            }
        }
    }

});
