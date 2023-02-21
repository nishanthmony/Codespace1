// `` is called backticks ahm

function ishu(names){
    console.log("printing name", names);
    //console.log(`In here im printing ${name} and explaining it to you using the backticks
    //`);

}

function shady(){
    return "I am inevitable";
}

// ishu();
// ishu("ishu");
// shady();
// the above function shady is returning but not printing anything in the console. It can be done like below methods

// var printShady = shady();
// console.log(printShady);
// console.log(shady());


//roles using function
//admin - access to everything
//subadmin - access to delete/create courses
//testprep - access to create/delete test
//user - gets access to content
//other - trial user

// var name = "Shady";
// var role = "user";

// function getUserRole(name, role){
//     console.log(`The role of user ${name} is ${role}`);
// }

function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `The role of user ${name} is ${role} who has access to everything`;
            break; //now break is not necessary as the value will be returned
        case "subadmin":
            return `The role of user ${name} is ${role} who has access to create/delete courses`;
            break;
        case "testprep":
            return `The role of user ${name} is ${role} who has access to create/delete tests`;
            break;
        case "user":
            return `The role of user ${name} is ${role} and will be consuming content`;
            break;
        default:
            return `The role of user ${name} is ${role} and is a trial user`;
            break;
    }

}


// console.log(getUserRole("shady", "user"));
// var getRole = getUserRole("Ishu", "admin");
// console.log(getRole);

//alternate ways to create a function with no change in outputs
//var getUserRole = function (name, role){}



//hoisting in context

tip("15");
function tip(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

tip("10");

bigTip("85");

var bigTip = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);
}