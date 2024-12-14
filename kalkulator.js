function calculate(operation) {
    const a11 = parseFloat(document.getElementById('a11').value) || 0;
    const a12 = parseFloat(document.getElementById('a12').value) || 0;
    const a21 = parseFloat(document.getElementById('a21').value) || 0;
    const a22 = parseFloat(document.getElementById('a22').value) || 0;

    const b11 = parseFloat(document.getElementById('b11').value) || 0;
    const b12 = parseFloat(document.getElementById('b12').value) || 0;
    const b21 = parseFloat(document.getElementById('b21').value) || 0;
    const b22 = parseFloat(document.getElementById('b22').value) || 0;

    let r11, r12, r21, r22;

    if (operation === 'add') {
        r11 = a11 + b11;
        r12 = a12 + b12;
        r21 = a21 + b21;
        r22 = a22 + b22;
    } else if (operation === 'subtract') {
        r11 = a11 - b11;
        r12 = a12 - b12;
        r21 = a21 - b21;
        r22 = a22 - b22;
    } else if (operation === 'multiply') {
        r11 = a11 * b11 + a12 * b21;
        r12 = a11 * b12 + a12 * b22;
        r21 = a21 * b11 + a22 * b21;
        r22 = a21 * b12 + a22 * b22;
    }

    document.getElementById('r11').innerText = r11;
    document.getElementById('r12').innerText = r12;
    document.getElementById('r21').innerText = r21;
    document.getElementById('r22').innerText = r22;
}
