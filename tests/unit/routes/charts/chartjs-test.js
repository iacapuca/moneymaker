import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | charts/chartjs', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:charts/chartjs');
    assert.ok(route);
  });
});
