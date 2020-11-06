import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clothes/tshirt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clothes/tshirt');
    assert.ok(route);
  });
});
