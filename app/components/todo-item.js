import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        editTodo: function() {
            this.set('isEditing', true);
        },
        acceptChanges: function() {
            this.set('isEditing', false);
            this.sendAction('acceptChanges', this.get("todo"));
        },
        deleteTodo: function(todo) {
            this.sendAction('deleteTodo', todo);
        }
    }
});
