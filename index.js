
let entries = [];
const entriesWrapper = document.querySelector('#entries');

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
    return total + currentValue;
}

function calAverage() {
    const average = entries.reduce(reducer) / entries.length;
    document.getElementById('average').innerText = average;
}

function calcTotal() {
    let totalValue = entries.reduce(reducer);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
    console.log(totalValue)
}
function numberValue(event){
    event.preventDefault();
    const entry = Number(document.getElementById('entry').value);
    if (!entry) return;
    form.reset();
    entries.push = entry;
    addNewEntry(entry);
    calcTotal();
    calAverage();
}

const form = document.querySelector('form');
form.addEventListener('submit', numberValue);



