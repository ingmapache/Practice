let totalAmount = 1000;
let remainingAmount = 1000 - totalAmount;


let message = (totalAmount >= 1000) ? `Your total amount is $${totalAmount - (totalAmount * 0.10)}.` : `Your total amount is $${totalAmount}, If you spend $${remainingAmount} more, you will be elegible for a 10% off.`;



console.log(message);