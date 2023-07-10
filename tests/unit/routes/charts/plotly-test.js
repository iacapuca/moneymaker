import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | charts/plotly', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:charts/plotly');
    assert.ok(route);
  });
});
