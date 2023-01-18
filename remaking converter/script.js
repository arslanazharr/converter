const converter = () => {
    const input = document.getElementById('conv').value;
    const selected = document.getElementById('choose_conv');
    const valueConv = selected.options[selected.selectedIndex].value;

    let result;

    const kgTog = (graam) => {
        let kilogram = (graam * 1000)
        return kilogram;
    }
    const gTokg = (kilog) => {
        let gram = (kilog / 1000)
        return gram;
    }

    if (valueConv == 'kg') {
        result = kgTog(input);
        document.getElementById('resultBox').innerHTML =  `${result} grams` 
        
    }else{
        result = gTokg(input);
        document.getElementById('resultBox').innerHTML =  `${result} kilograms` 
    }
}