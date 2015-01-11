module('Table setup and destruction', {
  setup: function () {
    $('#qunit-fixture').robodoku();
  },
  teardown: function () {
    $('#qunit-fixture').robodoku('destroy');
  }
});

test('it builds a table', function (assert) {
  assert.strictEqual($('table.robodoku').length, 1, 'init adds a table to the DOM');
});

test('it cleans up after itself', function (assert) {
  $('#qunit-fixture').robodoku('destroy');
  assert.strictEqual($('table.robodoku').length, 0, 'destroy empties out the <div>');
});

test('it adds rows to the table', function (assert) {
  assert.strictEqual($('.robodoku tr').length, 9, 'adds nine rows');
});

test('each row should have nine columns', function (assert) {
  assert.strictEqual($('.robodoku tr:first td').length, 9);
});

test('the first cell should have a class of .column-1', function (assert) {
  assert.ok($('.robodoku tr:first td:first').attr('class').indexOf('column-1') > -1);
});

test('the first cell should have a class of .row-1', function (assert) {
  assert.ok($('.robodoku tr:first td:first').attr('class').indexOf('row-1') > -1);
});

test('the last cell should have a class of .column-9', function (assert) {
  assert.ok($('.robodoku tr:last td:last').attr('class').indexOf('column-9') > -1);
});

test('the last cell should have a class of .row-9', function (assert) {
  assert.ok($('.robodoku tr:last td:last').attr('class').indexOf('row-9') > -1);
});

test('it adds a solve button to the puzzle', function (assert) {
  assert.strictEqual($('button.solve').length, 1);
});

module('Classify into squares', {
  setup: function () {
    $('#qunit-fixture').robodoku();
  },
  teardown: function () {
    $('#qunit-fixture').robodoku('destroy');
  }
});

test('the upper-left cell should belong to Square 1', function (assert) {
  assert.strictEqual($('.robodoku .row-1.column-1').data('square'), 1);
});

test('the lower-right cell should belong to Square 9', function (assert) {
  assert.strictEqual($('.robodoku .row-9.column-9').data('square'), 9);
});

test('the cell at (1, 4) should belong to Square 2', function (assert) {
  assert.strictEqual($('.robodoku .row-1.column-4').data('square'), 2);
});

test('the cell at (6, 6) should belong to Square 5', function (assert) {
  assert.strictEqual($('.robodoku .row-6.column-6').data('square'), 5);
});

test('the cell at (7, 1) should belong to Square 7', function (assert) {
  assert.strictEqual($('.robodoku .row-7.column-1').data('square'), 7);
});

test('the cell at (1, 7) should belong to Square 3', function (assert) {
  assert.strictEqual($('.robodoku .row-1.column-7').data('square'), 3);
});