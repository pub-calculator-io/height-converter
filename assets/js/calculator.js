function calculate() {
    const inches = input.get('inches').positive().val();
    const cm = input.get('centimeters').positive().val();

    if (!input.valid()) return;

    const results = [];

    const inToCm = roundTo(inches * 2.54, 3);
    const cmToIn = roundTo(cm / 2.54, 3);

    let ft = '';
    console.log(cmToIn);
    if(cmToIn >= 12) ft = (` or ${plural(Math.floor(cmToIn / 12), 'feet:foot:feet:feet:feet:feet')} ${plural(roundTo(cmToIn % 12, 2), 'inches:inch:inches:inches:inches:inches')}`);

    results.push(`${plural(inches, 'inches:inch:inches:inches:inches:inches')} = ${inToCm} cm`);
    results.push(`${cm} cm = ${plural(cmToIn, 'inches:inch:inches:inches:inches:inches')} ${ft}`);

    _('result').innerHTML = results.join('<br/>');
}
