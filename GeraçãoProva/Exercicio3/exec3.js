function sortTable(table, col, reverse) {
  var tb = table.tBodies[0],
    tr = Array.prototype.slice.call(tb.rows, 0),
    i;
  reverse = -((+reverse) || -1);
  var str1;
  var str2;
  tr = tr.sort(function(a, b) {
    if (a.cells[col].children[0] === undefined) {
      str1 = a.cells[col].textContent.trim();
      str2 = b.cells[col].textContent.trim();
    } else {
      str1 = a.cells[col].getElementsByTagName(a.cells[col].children[0].tagName)[0].value;
      str2 = b.cells[col].getElementsByTagName(a.cells[col].children[0].tagName)[0].value;
    }

    if (!isNaN(str1)) {
      if (str1.length === 1) {
        str1 = '0' + str1;
      }
      if (str2.length === 1) {
        str2 = '0' + str2;
      }
    }
    return reverse * (str1.localeCompare(str2));
  });
  for (i = 0; i < tr.length; ++i)
    tb.appendChild(tr[i]);
}

function makeSortable(table) {
  var th = table.tHead,
    i;
  th && (th = th.rows[0]) && (th = th.cells);
  if (th)
    i = th.length;
  else
    return;
  while (--i >= 0)
    (function(i) {
      var dir = 1;
      $(th[i]).append('  <i class="fa fa-caret-up  hidden" data-order="up"></i>');
      $(th[i]).append('  <i class="fa fa-caret-down hidden" data-order="down"></i>');
      th[i].addEventListener('click', function() {
        sortTable(table, i, (dir = 1 - dir));
        if ((1 - dir) === 1) {
          $(th).find('i[data-order=down],i[data-order=up]').addClass('hidden');
          $(th[i]).find('i[data-order=up]').removeClass('hidden');
        } else {
          $(th).find('i[data-order=down],i[data-order=up]').addClass('hidden');
          $(th[i]).find('i[data-order=down]').removeClass('hidden');
        }
      });
    }(i));
}

function makeAllSortable(parent) {
  parent = parent || document.body;
  var t = parent.getElementsByTagName('table'),
    i = t.length;
  while (--i >= 0) {
    if (t[i].attributes['data-sortable'] !== undefined) {
      makeSortable(t[i]);
    }
  }
}
makeAllSortable();