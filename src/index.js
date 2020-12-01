"use strict";
var root = document.getElementById('root');
var firstInput = document.getElementById('vol');
firstInput.addEventListener('change', function (e) {
    changeHTML(e.currentTarget);
});
var p;
if (firstInput.value) {
    p = document.createElement('p');
    p.innerHTML = firstInput.value;
    root.appendChild(p);
}
function changeHTML(el) {
    if (el.value) {
        p.innerHTML = el.value;
    }
}
