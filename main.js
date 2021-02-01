
function ticketHandler(category ,isIncrease) {
    const firstInput = document.getElementById(category + '-input');
    const firstInputNumber = parseInt(firstInput.value);

    let firstNewNumber = firstInputNumber;
    if (isIncrease == true) {
        firstNewNumber = firstInputNumber + 1;
    }
    if (isIncrease == false && firstNewNumber > 0) {
        firstNewNumber = firstInputNumber - 1;
    }

    firstInput.value = firstNewNumber;
    let firstTotal = 0;
    if (category == 'first') {
        firstTotal = firstNewNumber * 150
    }
    if (category  == 'economy') {
        firstTotal = firstNewNumber * 100
    }
    subCalculator()
}



function subCalculator() {
    const firstInput = document.getElementById('first-input');
    const firstInputNumber = parseInt(firstInput.value)

    const economyInput = document.getElementById('economy-input');
    const economyInputNumber = parseInt(economyInput.value)

    const subtotal = firstInputNumber * 150 + economyInputNumber * 100
    const vatTotal = subtotal * 10 / 100

    document.getElementById('vat-cost').innerText = vatTotal
    document.getElementById('subtotal').innerText = subtotal

    const total = subtotal + vatTotal

    document.getElementById('total').innerText = total
}
