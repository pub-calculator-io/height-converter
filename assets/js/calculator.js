function calculate() {
    const inches = input.get('inches').positive().val();
    const cm = input.get('centimeters').positive().val();

    if (!input.valid()) return;

    const results = [];

    const inToCm = roundTo(inches * 2.54, 3);
    const cmToIn = roundTo(cm / 2.54, 3);

    let ft = '';
    console.log(cmToIn);
    if(cmToIn >= 12) ft = (` or ${Math.floor(cmToIn / 12)} ft ${roundTo(cmToIn % 12, 2)} inches`);

    results.push(`${inches} inches = ${inToCm} cm`);
    results.push(`${cm} cm = ${cmToIn} inches${ft}`);

    _('result').innerHTML = results.join('<br/>');
}
