const converter = () => {
    const numInput = document.getElementById('conv').value;
    const optSelected = document.getElementById('choose_conv');
    const valueConv = choose_conv.options[optSelected.selectedIndex].value;


    let result;

    const kgTog = (gram) => {
        let kilogram = Math.round(gram * 1000)
        return kilogram;
    }
    const gTokg = (kg) => {
        let gram = (kg / 1000)
        return gram;
    }

    if (valueConv == 'kg') {
        result = kgTog(numInput);
        document.getElementById('resultContainer').innerHTML = `${result} grams`
    }else{
        result = gTokg(numInput);
        document.getElementById('resultContainer').innerHTML = `${result} kilograms`
    }
}