(function ($) {

  "use strict";

  $.fn.robodoku = function(options) {

    var methods = {
      init: function () {
        buildTable(this);
        assignToSquares(this);
        addSolverButton(this);
        return this;
      },
      destroy: function () {
        this.empty();
        return this;
      }
    };

    if (methods[options]) {
      return methods[options].apply(this, [].slice.call(arguments, 1));
    } else if ( typeof options === 'object' || !options ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Robodoku cannot compute: ' +  options);
    }

  };

  var buildTable = function (puzzle) {
    var $table = $('<table class="robodoku"></table>').appendTo(puzzle);
    addRowsToTable($table);
    return $table;
  };

  var addRowsToTable = function (table) {
    for (var row = 1; row <= 9; row++) {
      var $row = $('<tr></tr>').appendTo(table);
      addColumnsToRow($row, row);
    }
  };

  var addColumnsToRow = function (row, rowNumber) {
    for (var column = 1; column <= 9; column++) {
      $('<td></td>')
        .addClass('row-' + rowNumber)
        .addClass('column-' + column)
        .data('row', rowNumber)
        .data('column', column)
        .appendTo(row);
    }
  };

  var assignToSquares = function (puzzle) {
    puzzle.find('td').each(function (index, cell) {
      var $cell = $(cell);
      determineSquare($cell);
    });
  };

  var determineSquare = function (cell) {
    var row = cell.data('row');
    var column = cell.data('column');
    var square = determineRow(row) + Math.ceil(column / 3) - 1;
    cell.data('square', square).addClass('square-' + square);
  };

  var determineRow = function (row) {
    if (row <= 3) { return 1; }
    if (row <= 6) { return 4; }
    if (row <= 9) { return 7; }
  };

  var addSolverButton = function (puzzle) {
    return $('<button></button>').addClass('solve').appendTo(puzzle);
  };

}(jQuery));