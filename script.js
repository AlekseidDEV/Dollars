const selectTo = document.getElementById("selectTo");
const inputSum = document.getElementById("inputSum");
const btn = document.getElementById("btn");
const span = document.querySelector(".result");

const requestServ = async () => {
    const r = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    return await r.json();
};

const calcValute = (dollar, euro, valTo, money) => {
    let totalSum;
    if (valTo === "USD") {
        totalSum = Math.ceil(dollar.Value * money);
    } else if (valTo === "EUR") {
        totalSum = Math.ceil(euro.Value * money);
    }

    span.textContent = `Итого : ${totalSum} RUB`;
};

const getValue = () => {
    if (selectTo.value === "") {
        alert("выберите валюту");
    } else if (inputSum.value === "") {
        alert('заполните поле "введите сумму"');
    } else {
        requestServ()
            .then((data) =>
                calcValute(
                    data.Valute.USD,
                    data.Valute.EUR,
                    selectTo.value,
                    +inputSum.value
                )
            )
            .catch(() => alert("Сервер не отвечает :("));
    }
};

btn.addEventListener("click", getValue);
