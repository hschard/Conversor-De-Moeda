const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select"); //Moeda Destino
const currencySelectSrc = document.querySelector(".currency-select-src"); //Moeda Origem

function convertValues() {
  //Converte da moeda real para as outras
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert",); //Valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

  //Valores das moedas
  const rate = {
    real: 1,
    dolar: 5.2,
    euro: 6,
    yuan: 0.8,
    libra: 7.0,
    guarani: 0.00085
  }

  //Pegando valor das taxas baseado no select
  const rateSource = rate[currencySelectSrc.value];
  const rateTarget = rate[currencySelect.value];

  //Converter valore de origem para base real
  const AmountBRL = inputCurrencyValue * rateSource;

  //Divide o valor em reais pela moeda de destino
  const finalValue = AmountBRL / rateTarget;

  //Valor antes
 if (currencySelectSrc.value == "dolar") {
    //SE o select estiver no valor de dolar entra aqui
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  } else if (currencySelectSrc.value == "euro") {
    //SE o select estiver no valor de euro entra aqui
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  } else if (currencySelectSrc.value == "yuan") {
    //SE o select estiver no valor de euro entra aqui
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(inputCurrencyValue);
  } else if (currencySelectSrc.value == "libra") {
    //SE o select estiver no valor de euro entra aqui
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  } else if (currencySelectSrc.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
  }else if (currencySelectSrc.value == "guarani") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-PY", {
        style: "currency",
        currency: "PYG"
    }).format(inputCurrencyValue);
  }

  //Valor depois
  if (currencySelect.value == "dolar") {
    //SE o select estiver no valor de dolar entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(finalValue);
  } else if (currencySelect.value == "euro") {
    //SE o select estiver no valor de euro entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(finalValue);
  } else if (currencySelect.value == "yuan") {
    //SE o select estiver no valor de euro entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(finalValue);
  } else if (currencySelect.value == "libra") {
    //SE o select estiver no valor de euro entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(finalValue);
  } else if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(finalValue);
  } else if (currencySelect.value == "guarani") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-PY", {
        style: "currency",
        currency: "PYG"
    }).format(finalValue);
  }

}

//Altera nome e simbolos das primeiras moedas
function changeCurrencySrc() {
  //AJUSTAR

  const currencyNameSrc = document.getElementById("currency-name-src");
  const currencyImageSrc = document.querySelector(".currency-img-src");
  const inputCurrency = document.querySelector(".input-currency");

  console.log(currencySelectSrc.value);

  if (currencySelectSrc.value == "real") {
    currencyNameSrc.innerHTML = "Real";
    currencyImageSrc.src = "./assets/real.png";
    inputCurrency.placeholder = "R$1.000,00";
  }

  if (currencySelectSrc.value == "dolar") {
    currencyNameSrc.innerHTML = "Dólar americano";
    currencyImageSrc.src = "./assets/dolar.png";
    inputCurrency.placeholder = "US$ 1.000,00";
  }

  if (currencySelectSrc.value == "euro") {
    currencyNameSrc.innerHTML = "Euro";
    currencyImageSrc.src = "./assets/euro.png";
    inputCurrency.placeholder = "€ 1.000,00";
  }

  if (currencySelectSrc.value == "yuan") {
    currencyNameSrc.innerHTML = "Yuan";
    currencyImageSrc.src = "./assets/yuan.png";
    inputCurrency.placeholder = "¥ 1.000,00";
  }

  if (currencySelectSrc.value == "libra") {
    currencyNameSrc.innerHTML = "Libra Esterlina";
    currencyImageSrc.src = "./assets/libra.png";
    inputCurrency.placeholder = "£ 1.000,00";
  }

  if (currencySelectSrc.value == "guarani") {
    currencyNameSrc.innerHTML = "guarani";
    currencyImageSrc.src = "./assets/Guarani.png";
    inputCurrency.placeholder = "₲ 1.000,00";
  }

  convertValues();
}

//Altera nome e simbolos das moedas de saida
function changeCurrencyResult() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "yuan") {
    currencyName.innerHTML = "Yuan";
    currencyImage.src = "./assets/yuan.png";
  }

   if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/real.png";
  }

  if (currencySelect.value == "guarani") {
    currencyName.innerHTML = "guarani";
    currencyImage.src = "./assets/Guarani.png";
  }

  convertValues();
}

currencySelectSrc.addEventListener("change", changeCurrencySrc);
currencySelect.addEventListener("change", changeCurrencyResult);
convertButton.addEventListener("click", convertValues);
