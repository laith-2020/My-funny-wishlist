'use strict';


var wishes = [];
function Wichis(wishName, date) {
    this.wishName = wishName;
    this.date = date;
    wishName.push(this);

}

Wichis.prototype.render = function () {
    var container = document.getElementById('tableOne');
    var table1 = document.createElement('tr');
    container.appendChild(table1);

    var tableData = document.createElement('td');
    table1.appendChild(tableData);
    tableData.textContent = (this.wishName);

}

function calling() {


    for (var i = 0; i < wishes.length; i++) {
        wishes[i].render();
    }

}


function headertable() {
    var container = document.getElementById('tableContent');
    var table1 = document.createElement('table');
    container.appendChild(table1);
    table1.setAttribute('id', 'tableOne');

    var tableRow = document.createElement('tr');
    table1.appendChild(tableRow);

    var tableData2 = document.createElement('th');
    tableRow.appendChild(tableData2);

    tableData2.textContent = ' Wish Title ' + 'Expected Date' + 'Your Wish Will come True after XD ' + 'Remove ';

}


var form1 = document.getElementById('form1');

form1.addEventListener('submit', function (event) {
    event.preventDefault();

    var wishName1 = event.target.wishName.value;
    var date1 = event.target.date.value;
    

});

headertable();
calling()
