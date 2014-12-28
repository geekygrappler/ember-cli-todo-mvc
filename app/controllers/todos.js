import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        createTodo: function(newTitle) {
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: newTitle,
                isCompleted: false
            });
 
            // Clear the "New Todo" text field
            this.set('newTitle', '');
 
            // Save the new model
            todo.save();
        },
<<<<<<< HEAD

=======
>>>>>>> master
        clearCompleted: function() {
            var completed = this.filterBy('isCompleted', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
    },
    
    remaining: function() {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),
 
    inflection: function() {
        var remaining = this.get('remaining');
        return (remaining === 1) ? 'item' : 'items';
    }.property('remaining'),

    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),
     
    completed: function() {
        return this.filterBy('isCompleted', true).get('length');
<<<<<<< HEAD
=======
    }.property('@each.isCompleted'),

    allAreDone: function(key, value) {
        console.log(key + ": " + value);
        if (value === undefined) {
            return this.get('length') > 0 && this.isEvery('isCompleted', true);
        } else {
            this.setEach('isCompleted', value);
            this.invoke('save');
            return value;
        }
>>>>>>> master
    }.property('@each.isCompleted')
});