import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    title(i) { return `Todo title ${i + 1}`; },
    complete: faker.list.random(true, false)
});
