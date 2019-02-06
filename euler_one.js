///var total =  0;

/*for(var i=1; i<1000; i++)
{

    if (i % 3 == 0 || i % 5 == 0) { 
        total += i; }
}


console.log(total
*/

function sumOfMultiple(limit) {
    var i, sum = 0;
    for(i=3; i < limit; i++) { // var i is attached to 3
        if(i % 3 === 0 || i % 5 === 0) { //means: as long as less than 1000, add 1 to it
            sum += i; //1 is added to sum, and process continues untill...
        }
    }
    return sum;
}
console.log("Answer " + sumOfMultiple(1000)); //...until limit(1000) is reached. Then loop stops.