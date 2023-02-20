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

if (listPrice > sellingPrice) {
    console.log("listprice is higher");

}else{
    console.log("selling price is higher");
}

//conditional purchase

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

if(isLoggedIn){
    console.log("user is logged in");
    if(isEmailVerified){
        console.log("Mail id is verified");
        if(cardInfo){
            console.log("You can make a purchase");
        }
    }
}
//efficient way of soing this is below

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("you are allowed to make a purchase");
}else{
    console.log("You are not allowed to make a purchase");
}



//conditionals login 

//login should be success even if the user logs in using any one of the following
//email or facebook or google


var email = true;
var facebook = false;
var google = false;

if(email || facebook || google){
    console.log("The user login is Success");
}else{
    console.log("User login Failiure")
}

//ternary operator (or) another method for conditional method 

var authenticated = true;

authenticated ? console.log("Signout Button") : console.log("Login");


//Roles Conditioning using Switch Cases

//creating application with roles
//admin - access to everything
//subadmin - access to delete/create courses
//testprep - access to create/delete test
//user - gets access to content

// var admin;
// var testprep;
// var subadmin;
var user = "testprep";

switch(user){
    case "admin":
        console.log("Access to everything");
        break;
    case "subadmin" :
        console.log("Access to Create/Delete Courses");
        break;
    case "testprep" :
        console.log("Access to Create/Delete Tests");
        break;
    case "user" :
        console.log("Gets access to consume content");
        break;
    default :
        console.log("Access Denied");
        break;
}

//Truthy and Falsy values
//undefines, null, 0, '', NaN
//these values state false in conditioning Statements

var shady = "2";
if(2 == shady){
    console.log("Condition is True");
}
if(2 === shady){
    console.log("Condition is true");
}else{
    console.log("False Condition");
}