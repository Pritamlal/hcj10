document.getElementById('input').addEventListener('input', calculate);

function calculate() {
    const input = document.getElementById('input').value.trim();
    let result;

    if (input.includes('+')) {
        const parts = input.split('+');
        const operand1 = parseFloat(parts[0]);
        const operand2 = parseFloat(parts[1]);
        result = operand1 + operand2;
    } else if (input.includes('-')) {
        const parts = input.split('-');
        const operand1 = parseFloat(parts[0]);
        const operand2 = parseFloat(parts[1]);
        result = operand1 - operand2;
    } else if (input.includes('*')) {
        const parts = input.split('*');
        const operand1 = parseFloat(parts[0]);
        const operand2 = parseFloat(parts[1]);
        result = operand1 * operand2;
    } 
    else if (input.includes('/')) {
        const parts = input.split('/');
        const operand1 = parseFloat(parts[0]);
        const operand2 = parseFloat(parts[1]);
        if (operand2 !== 0) {
            result = operand1 / operand2;
        } else {
            result = 'Cannot divide by zero';
        }
    } else {
        result = 'Invalid calculation';
    }

    document.getElementById('result').textContent = result;
}
