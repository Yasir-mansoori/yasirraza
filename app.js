/////chap no # 21          (01)

// var x = "Hello World";


// //////////////////////////(02)

// var x = "Hello World";
// var result =  x.toLowerCase();
// ///////////////////////////(03)

// var x = "Hello World";
// var result =  x.toLowerCase();
// //////////////////(04)

//  var x = "PAKISTAN"
//  var result =  x.toLowerCase();
 ///////////////(05)

// var car = "PAKISTAN";
// alert(car);
///////////////(06)

//  var a = "kaRacHi";
// var firstletter = a.slice(0,1);
// firstletter = firstletter.toUpperCase();

// var otherletter = a.slice(1);
// otherletter = otherletter.toLowerCase();

// var b = firstletter + otherletter;
// console.log(b);

/////////////chap no # 22 to 25

////////////(01)

// var text = "sameWord!";
// var result = text.substring(1,3);
// console.log(result)

/////////////(02)

// var a = "elephant";
// var result = a.slice(1, 5);

///////////////(03)

// var a ="elephant";
// var result = a.length;
// console.log(result);

//////////////////////(04)

// var text = "To be or not to be";
// var indx = text.indexOf("be");
// console.log(indx); //result 3 

// /////////////////(05)
// var text = "To be or not to be";
// var indx = text.lastIndexOf("be");
//  console.log(indx); //result 16



// var text = "Hello planet earth, you are a great planet.";
// var indx = text.lastIndexOf("planet"); //result 36

////////////////(06)

// var text = "abcd";
// var letter = text.charAt(2);
// console.log(letter); // result c


/////////chap no # (26)

// let a = Math.round(2.60);
// let b = Math.round(3.50);
// let c = Math.round(0.5);
// let d = Math.round(-2.60);
// let e = Math.round(-2.50);
// let f = Math.ceil(-2.49);
// let g = Math.floor(0.5);
// console.log()


//////////chap no # (27)
// var x = Math.random() * 50;
// console.log(x); //result 46.411178411123245


// var x = (Math.random(46.411178411123245));
// console.log(x);

// var dice = Math.floor(Math.random() * 6)
// var toss = Math.floor(Math.random() * 2)


/////////chap no # 28 to 29

// var a = String(new Date()); 
// var b = String("12345");
// var c = String(12345);

// var d = String([1,2,3,4]);
// var e = String(Boolean(0)); 
// var f = String(Boolean(1));
// console.log(f); 


// parseInt("52")
// parseInt("173")
// Number("3.2131")
// var int = 22
// int = int.toString()
// var int = 42
// int = int.toString()
// parseInt("3.142")


///////chap no # 30


// var num = 5.56789;
// var n = num.toFixed();

// var num = 5.56789;
// var n = num.toFixed(3);
 

// var newNum = aNumber.toFixed(4)
// var aNumber = parseFloat(aNumber.toFixed(2))
// var num = 123.354
// if (num.toFixed(2).length > 4) { }
// var aNumber = 23.594582
// alert(aNumber.toFixed(2))


//////////chap no # 31  to 34

// var dobj = new Date();
// var dStr = new Date();

// dStr = dStr.toDateString()
// var d = new Date()
// var day = d.getDay()
// var d = new Date().getDay()

// var dayname = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","sunday"];
// var newdate = (new Date).tostring();
// alert(dayname[d]);


// var later = new Date('2020-12-31')
// var newDate = new Date('1992-2-2')
// var today = new Date()
// alert(today - new Date('1980-2-2'))
// var d = new Date()
// d.setFullYear(2012)
// function changeMonth(d) 
//     d.setMonth(0)



// a.setDate(4);
// a.setMonth(7);
// a.setFullYear(5);
// a.setMinutes(55);
// a.setSeconds(9);


// var a = new Date();
// var Birthday =new Date("1999-08-03");
// var diff = a - Birthday;
// console.log(diff /(1000 * 60 * 60 * 24 * 365));




//////////////chap no # 35 to 37


// function displayAlert() { }
// function askName() {
//     var myName = prompt("Enter name")
// }
// function afunc() { }
// function func() {
//     afunc()
//     displayAlert()
// }
// function showName() {
//     var input = prompt("Enter name")
//     alert(input)
// }
// showName()
// function concat(a, b, c) { }
// function concat2(a, b) {
//     var newVariable = a + b
// }
// function clacProduct(a, b, c) {
//     var product = a * b * c
// }
// function calcAverage(arr) {
//     var sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum += arr[index]
//     }
//     average = sum / arr.length
//     return average
// }
// var average = calcAverage([1, 2, 3, 4])
// function letterCount(word) {
//     return word.length
// }
// function setYear(y) {
//     d = new Date()
//     d.setFullYear(y)
// }
// function ageCalc(DOB) {
//     DOB = new Date(DOB)
//     var today = new Date()
//     var diff = (today - DOB)
//     var age = Math.floor(diff / (1000 * 3600 * 24 * 365))
//     return age
// }
// function findInArr(word) {
//     var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima']
//     var found = array.indexOf(word) !== -1
//     return found
// }
// function repeat(letter) {
//     return letter.repeat(10)
// }
// function reverseArr() {
//     var array = ['a', 'b', 'c', 'd', 'e']
//     array.reverse()
//     return array
// }


// //////////////chap no # 38
// function local() {
//     var localVariable = 123;
//     console.log(localVariable)
// }
// local()
// console.log(aLocalVariable)
// var globalVariable = 99;
// function func2() {
//     console.log(globalVariable)
// }






// ////////////////chap no # 39 to 40
// day = 0
// switch (day) {
//     case 0:
//         alert("SUNDAY")
//         break
//     case 1:
//         alert("MONDAY")
//         break
//     case 2:
//         alert("TUESDAY")
//         break
//     case 3:
//         alert("WEDNESDAY")
//         break
//     case 4:
//         alert("THURSDAY")
//         break
//     case 5:
//         alert("FRIDAY")
//         break
//     case 6:
//         alert("SATURDAY")
//         break
//     default:
//         alert("WRONG DAY")
//         break;
// }
// var cityName = prompt("Enter City Name")
// switch (cityName.toLowerCase()) {
//     case "karachi":
//         alert("karachi")
//         break;
//     case "islamabad":
//         alert("islamabad")
//         break;
//     case "sialkot":
//         alert("lahore")
//         break;
//     default:
//         alert("City not found")
//         break;
// }






