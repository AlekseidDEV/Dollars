const selectTo = document.getElementById("selectTo");
const selectFrom = document.getElementById("selectFrom");
const inputSum = document.getElementById("inputSum");
const btn = document.getElementById("btn");
const span = document.querySelector(".result");

const requestServ = async () => {
    const r = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    return await r.json();
};

const calcValute = (dollar, euro, valTo, valFrom, money) => {
    let totalSum;

    if (valTo === "USD" && valFrom === 'RUB') {
        totalSum = Math.ceil(dollar.Value * money);
        span.textContent = `Итого : ${totalSum} ${valFrom}`;
    } else if (valTo === "EUR" && valFrom === 'RUB') {
        totalSum = Math.ceil(euro.Value * money);
        span.textContent = `Итого : ${totalSum} ${valFrom}`;
    }
    
    if(valTo === "RUB" && valFrom === 'USD'){
        totalSum = money / dollar.Value
        span.textContent = `Итого : ${totalSum.toFixed(4)} ${valFrom}`;
    } else if(valTo === "RUB" && valFrom === 'EUR'){
        totalSum = money / euro.Value
        span.textContent = `Итого : ${totalSum.toFixed(4)} ${valFrom}`;
    }

    if(valTo === "USD" && valFrom === 'EUR'){
        totalSum = (euro.Value / 100) * money
        span.textContent = `Итого : ${totalSum.toFixed(2)} ${valFrom}`;
    } else if(valTo === "EUR" && valFrom === 'USD'){
        totalSum = (dollar.Value / 100) * money
        span.textContent = `Итого : ${totalSum.toFixed(2)} ${valFrom}`;
    }
};

const getValue = () => {
    if (selectTo.value === "") {
        alert("выберите валюту");
    } else if (inputSum.value === "") {
        alert('заполните поле "введите сумму"');
    } else if(selectTo.value === selectFrom.value){
        alert('нельзя перевести в ту же валюту')
    } else {
        requestServ()
            .then((data) =>
                calcValute(
                    data.Valute.USD,
                    data.Valute.EUR,
                    selectTo.value,
                    selectFrom.value,
                    +inputSum.value
                )
            )
            .catch(() => alert("Сервер не отвечает :("));
    }
};

btn.addEventListener("click", getValue);
