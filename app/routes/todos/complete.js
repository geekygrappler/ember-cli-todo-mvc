import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let todos = this.modelFor('todos');
        return todos.filter((todo) => {
            return todo.get('complete')
        })
    },
    renderTemplate(controller, model) {
        this.render('todos.index', {
            model: model
        });
    }
});
