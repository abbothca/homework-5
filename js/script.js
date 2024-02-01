"use strict";

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

let updatedPriceData = {};

// ваш код
// Щоб скопіювати об'єкт, треба пройтися по всіх його ключах, тому цикл for .. in
// key.toLowerCase() - оскільки всі ключі - рядки, то використовуємо метод .toLowerCase() і створюємо нову властивість об'єкта updatedPriceData "на льоту"
// щоб скристатися методом .toFixed() треба мати число, тому використовую унарний плюс, який переведе priceData[key] у Number
// .toFixed() з параметром 2 - заокруглить до двох знаків після коми; оскільки у вхідному об'єкті ціни були рядковими величинами і у зразку, що має бути на виході - теж рядки, то лишаю рядкове значеня, яке поверне .toFixed(2) 
for (let key in priceData) {
    updatedPriceData[key.toLowerCase()] = (+priceData[key]).toFixed(2);
};

// Виводжу в консоль обидва об'єкти, щоб побачити зміни в новому і перевірити чи не змінила вхідний
console.log("The original object \n   priceData : ", priceData);
console.log("The transformed object  \n   updatedPriceData : ", updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}