import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        let todos = this.get('todos');
        if (todos.get('length') > 0 && todos.isEvery('complete', true)) {
            this.set('allAreDone', true);
        } else {
            this.set('allAreDone', false);
        }
    },
    remaining: Ember.computed('todos.@each.complete', function() {
        let todos = this.get('todos');
        return todos.filterBy('complete', false).get('length');
    }),
    inflection: Ember.computed('remaining', function() {
        var remaining = this.get('remaining');
        return (remaining === 1) ? 'item' : 'items';
    }),
    completed: Ember.computed('todos.@each.complete', function() {
        var todos = this.get('todos');
        return todos.filterBy('complete', true).get('length');
    }),
    hasCompleted: Ember.computed('completed', function() {
        return this.get('completed') > 0;
    }),
    actions: {
        clearCompleted() {
            let completed = this.get('todos').filterBy('complete', true);
            completed.forEach((todo) => {
                todo.destroyRecord();
            });
        },
        toggleAll(completeValue) {
            this.set("allAreDone", completeValue);
            let todos = this.get('todos');
            todos.forEach((todo) => {
                todo.set('complete', completeValue);
            });
        }
    }
});
