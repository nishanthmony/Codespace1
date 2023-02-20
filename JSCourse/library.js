var user=prompt("enter the typeof user  LIBRARIAN OR STUDENT")
switch(user){
    case "student":
        var userName=prompt("enter the username?");
        var password=prompt("enter the password?");
        if(userName=="ishu"&& password==12345){
            console.log("authentication success")
        }
        else{
            console.log("enter the correct credentials")
        }
    case "librarian":
        var userName=prompt("enter the username?");
        var password=prompt("enter the password?");
        if(userName=="ishu"&& password==12345){
            console.log("authentication success")
            operation=prompt("enter what you want to do insert or remove ")
            switch(operation){
                case "insert":
                    console.log("insertion successful")
                case "remove":
                    console.log('deletion successful')
            }
        }
        else{
            console.log("enter the correct credentials")
        }
}