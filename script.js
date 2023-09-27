// const selectTo = document.getElementById('selectTo')
// const selectfrom = document.getElementById('selectFrom')
// const inputSum = document.getElementById('inputSum')
// const btn = document.getElementById('btn')

// const requestServ = async () => {
//     const r = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     return await r.json()
// }

// const unpackingDate = (objVal) => {
//     console.log(objVal);
// }

// const getValue = () => {
//     if(selectTo.value === '' || selectfrom.value === ''){
//         alert('выберите валюту')
//     } else if(inputSum.value === ''){
//         alert('заполните поле "введите сумму"')
//     } else{
//         requestServ()
//             .then((data) => unpackingDate(data.Valute))
//             .catch(() => alert('Сервер не отвечает :('))
//     }
// }


// btn.addEventListener('click' , getValue)

// const test = async () => {
//     const r = await fetch('https://www.cbr-xml-daily.ru/daily_jsonp.js')
//     return await r.json()
// }

// const test1 = (data) => {
//     console.log(data);
// }

// test()
//     .then((data) => test1(data))