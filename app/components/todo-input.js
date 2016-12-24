import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        submitTodo() {
            if (this.get('title')) {
                this.get('store').createRecord("todo", {
                    title: this.get('title'),
                    complete: false
                });
            }
            this.set('title', "");
        }
    }
});
