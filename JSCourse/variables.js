// var fullName = "Ishu";
// var mailId = "nishanth19007shady@gmail.com";
// var myPassword = "12345678";
// var confirmPassword = "12345678";

// console.log(fullName);

// console.log(`
//     My name is ${fullName}
//     and my mail id is ${mailId}
//     and my password is ${myPassword}
// `)



//Operators

listPrice = 799;
sellingPrice = 199;
discountPrice = 0;


discountPrice = (listPrice - sellingPrice)/listPrice * 100;

roundDiscountPrice = Math.round(discountPrice);
console.log(roundDiscountPrice + "%");

var result = listPrice > sellingPrice;
console.log(result);
console.log(typeof result);