/*for (i =0; i < 10; i++) {
*    alert(Math.random());
*}
*/


for (i = 0; i <10; i++) {
    //inclusive of 20
    //Math.floor works for positive, but Math.trunc works on all
    random1To20 = alert(Math.trunc(Math.random() * 20) + 1);
}

//example of why not use it for negative numbers
var a = Math.floor(-9.1)
alert(a);
