const goal = 25
document.querySelector('#target')
entries = []
const entriesWrapper = document.querySelector('#entries')
function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild)
    const listItem = document.createElement('li')
    const listValue = document.createTextNode(newEntry.toFixed(1))
    listItem.appendChild(listValue)
    entriesWrapper.appendChild(listItem)
}

function reducer(total, currentValue) {
    return total + currentValue
}
function calcTotal(){
    const totalValue = entries.reduce(reducer)
    document.getElementById('total').innerText = totalValue
    document.getElementById('progressTotal').innerText = totalValue
}

function average() {
    const average = (entries.reduce(reducer)/ entries.length).toFixed(1)
    document.getElementById('average').innerText = average
}

function target() {
    const highestNumber = Math.max(...entries)
    document.getElementById('high').innerText = highestNumber
}

function progressCircle() {
    const totalValue = entries.reduce(reducer)
    const completedPercent = (totalValue*100) / (goal)
    const progressPercent = document.getElementById('progressCircle')
    if (completedPercent <= 100)  {
        progressPercent.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}%)`;
    }   else {
        progressPercent.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}%)`;
    }
}

function handleSubmit(event) {
    event.preventDefault()
    const entry = Number(document.getElementById('entry').value)
    if(!entry) return;
    form.reset()

    entries.push(entry)
    addNewEntry(entry)
    calcTotal()
    average()
    target()
    progressCircle()
}



const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)
