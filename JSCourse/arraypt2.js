function isEven(element){
    // if( element %2 == 0){
    //     return true;
    // }else{
    //     return false;
    // }
    return element%2 === 0;
}

//namma munnadiye pathurukom triple === oda purpose ah same we have use here

var isOdd = (element) => {
    return element%2 === 0;
    //return has to be given if not undefines will be printed
}


//console.log(isEven(4));
//onsole.log(isOdd(3));

//console.log([2, 4, 6, 8].every(isEven)); //even if one value is odd then false will be printed

//basic arrow function () => {}

var result = [4, 8, 1, 2].every((element) => {
    return element%2 === 0;
});
console.log(result);

var result2 = [2, 4, 6, 8].every((element) => (element%2 === 0));
console.log(result2);
//above example works same as the above function