const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectSrc = document.querySelector(".currency-select-src");
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    console.log(currencySelect.value);
    const dolarToday = 5.2;
    const euroToday = 6;
    const yuanToday = 0.8 ;
    const libraToday = 7;

    if (currencySelect.value == "dolar") { //SE o select estiver no valor de dolar entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") { //SE o select estiver no valor de euro entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "yuan") { //SE o select estiver no valor de euro entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("cn-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday)
    }

     if (currencySelect.value == "libra") { //SE o select estiver no valor de euro entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue); //Formatando para ficar no padrão real

}

//Altera nome e simbolos das primeiras moedas
function changeCurrencySrc() { //AJUSTAR    

    const currencyNameSrc = document.getElementById("currency-name-src");
    const currencyImageSrc = document.querySelector(".currency-img-src");
    console.log(currencySelectSrc.value);

    if (currencySelectSrc.value == "real"){
        currencyNameSrc.innerHTML = "Real";
        currencyImageSrc.src = "./assets/real.png"
    }

    if (currencySelectSrc.value == "dolar"){
        currencyNameSrc.innerHTML = "Dólar americano";
        currencyImageSrc.src = "./assets/dolar.png"
    }

    if (currencySelectSrc.value == "euro"){
        currencyNameSrc.innerHTML = "Euro";
        currencyImageSrc.src = "./assets/euro.png"
    }

}


//Altera nome e simbolos das moedas de saida
function changeCurrencyResult(){
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan";
        currencyImage.src = "./assets/yuan.png"
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrencyResult);
currencySelectSrc.addEventListener("change", changeCurrencySrc);
convertButton.addEventListener("click", convertValues);