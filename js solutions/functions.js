// JavaScript Functions - Warmup Problems

// Problem: 1

// Write a function called “addFive".
// Given a number, “addFive" returns 5 added to that number.
// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0

let num = 20;
function addFive(num) {
    num=num+5;
    return num;
    }
    
 let result = addFive(num)
 console.log(result); 
    
    
    // Problem:2
    
    // Write a function called “getOpposite".
    // Given a number, return its opposite
    
    // Input:
    // getOpposite(5);
    // getOpposite(0);
    // getOpposite(-5);
    // getOpposite(“5a");
    // getOpposite(5.5);
    
    // Output:
    // -5
    // 0
    // 5
    // -1
    // -1
    
    let no = 5;
    function getOpposite(no) 
    {
    if (typeof no === 'number')
     { 
        return -no; 
    } 
    else 
    { 
        return -1; 
    }
    }
    let res = getOpposite(no)
    console.log(res);
    
    // Problem:3
    
    // Fill in your code that takes an number minutes and converts it to seconds.
    
    // Examples
    // toSeconds(5) ➞ 300
    // toSeconds(3) ➞ 180
    // toSeconds(2) ➞ 120
    
    let min = 10;
    function toSeconds(min) {
        return min*60;
    }
    const secs = toSeconds(min);
    console.log("seconds:",secs);
    
    // Problem:4
    
    // Create a function that takes a string and returns it as an integer.
    
    // Examples
    // toInteger(“6") ➞ 6
    // toInteger(“1000") ➞ 1000
    // toInteger(“12") ➞ 12
    
    let str_num = "5";
    function toInteger(str_num) 
    {
    
        return parseInt(str_num,10);
    }
    
   
    
    let myint = toInteger(str_num)
    console.log(myint); 
    
    
    // Problem:5
    
    // Create a function that takes a number as an argument, increments the number by +1 and returns the result.
    
    // Examples
    // nextNumber(0) ➞ 1
    // nextNumber(9) ➞ 10
    // nextNumber(-3) ➞ -2
    
    let mint = 6;
    function nextNumber(mint) 
    {
    return mint+1;
    }
    
    let myNextint = nextNumber(mint)
    console.log(myNextint); 
    
    
    // Problem:6
    
    // Create a function that takes an array and returns the first element.
    
    // Examples
    // getFirstElement([1, 2, 3]) ➞ 1
    // getFirstElement([80, 5, 100]) ➞ 80
    // getFirstElement([-500, 0, 50]) ➞ -500
    
    let array = [5, 6, 7];
    function getFirstElement(arr) 
    {
    return array[0];
    }
    let data = getFirstElement(array)
    console.log(data); 
    
    // Problem:7
    
    // Convert Hours into Seconds
    
    // Write a function that converts hours into seconds.
    
    // Examples
    // hourToSeconds(2) ➞ 7200
    // hourToSeconds(10) ➞ 36000
    // hourToSeconds(24) ➞ 86400
    
    let arr = [3, 9, 5];
    function hourToSeconds(arr) {
    for(let i=0;i<arr.length;i++)
     return arr[i]*3600;
    }
    let value = hourToSeconds(arr)
    console.log(value)
    
    // Problem:8
    
    // Find the Perimeter of a Rectangle
    // Create a function that takes height and width and finds the perimeter of a rectangle.
    
    // Examples
    // findPerimeter(6, 7) ➞ 26
    // findPerimeter(20, 10) ➞ 60
    // findPerimeter(2, 9) ➞ 22
    function findPerimeter(num1,num2) {
    return 2*(num1+num2);
    }
    let peri = findPerimeter(2,2)
    console.log(peri);
    
    // Problem:9
    
    // Less Than 100?
    // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
    
    // Examples
    // lessThan100(22, 15) ➞ true
    // // 22 + 15 = 37
    // lessThan100(83, 34) ➞ false
    // 83 + 34 = 117
    function lessThan100(num1,num2) {
    let sum=num1+num2
    return sum<100
    }
    let info = lessThan100(22,90)
    console.log(info)
    
    // Problem:10
    
    // There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
    
    // Examples
    // remainder(1, 3) ➞ 1
    // remainder(3, 4) ➞ 3
    // remainder(-9, 45) ➞ -9
    // remainder(5, 5) ➞ 0
    function remainder(num1,num2) {
     return num1%num2
    }
    let rem = remainder(10,3)
    console.log(rem)
    
    // Problem:11
    
    // Old macdonald had a farm:
    // MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
    // turkey = 2 legs
    // horse = 4 legs
    // pigs = 4 legs
    
    // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
    
    // Examples
    // CountAnimals(2, 3, 5) ➞ 36
    // CountAnimals(1, 2, 3) ➞ 22
    // CountAnimals(5, 2, 8) ➞ 50
    function CountAnimals(tur,horse,pigs) {
        return (tur*2)+(horse*4)+(pigs*4);
    }
    let legs = CountAnimals(2,3,5)
    console.log("total number of legs",legs);
    
    // Problem:12
    
    // Frames Per Second
    // Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
    
    // Examples
    // frames(1, 1) ➞ 60
    // frames(10, 1) ➞ 600
    // frames(10, 25) ➞ 15000
    function frames(num1,num2) {
        return (num1*60)*num2;
    }
    let fps = frames(1,2)
    console.log("number of frames",fps);
    
    // Problem:13
    
    // Check if an Integer is Divisible By Five
    // Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
    
    // Examples
    // divisibleByFive(5) ➞ true
    // divisibleByFive(-55) ➞ true
    // divisibleByFive(37) ➞ false
    function divisibleByFive(num1) {
        return num1%5 == 0;
    }
    let divisible = divisibleByFive(5)
    console.log("divisible by 5",divisible)
    
    // Problem :14
    
    // Write a function called “isEven".
    // Given a number, “isEven" returns whether it is even.
    
    // Input:
    // isEven(12);
    // isEven(0);
    // isEven(11);
    // isEven(“11h");
    
    // Output:
    // true
    // true
    // false
    // -1
    
    function isEven(num){
        return num%2 == 0;
    
    }
    let even = isEven(5)
    console.log("even num",even)
    
    // Problem:15
    
    // Write a function called “areBothOdd".
    // Given 2 numbers, “areBothOdd" returns whether or not both of the given numbers are odd.
    
    // Input:
    // areBothOdd(1, 3);
    // areBothOdd(1, 4);
    // areBothOdd(2, 3);
    // areBothOdd(0, 0);
    
    // Output:
    // true
    // flase
    // flase
    // flase
    
    function areBothOdd(num1, num2){
        return num1 % 2 !== 0 && num2 % 2 !== 0;
    
    }
    let odd = areBothOdd(5,3)
    console.log("both r odd",odd)
    
    // Problem:16
    
    // Write a function called “getFullName".
    // Given a first and a last name, “getFullName" returns a single string with the given first and last names separated by a single space.
    
    // Input:
    // getFullName(“GUVI", “GEEK");
    // getFullName(“GUVI", );
    // getFullName(, “GEEK");
    // getFullName(“", “");
    
    // Output:
    // “GUVI GEEK"
    // “GUVI"
    // “GEEK"
    // “"
    
    function getFullName(firstName, lastName){
        return firstName + " "+ lastName;
    
    }
    let val = getFullName('john','smith')
    console.log("fullname is ",val);
    
    // Problem:17
    
    // Write a function called “getLengthOfWord".
    // Given a word, “getLengthOfWord" returns the length of the given word.
    
    // Input:
    // getLengthOfWord(“GUVI");
    // getLengthOfWord(“");
    // getLengthOfWord();
    // getLengthOfWord(9);
    
    // Output:
    // 4
    // 0
    // -1
    // -1
    function getLengthOfWord(word1){
        return word1.length;
    
    }
    let word = getLengthOfWord("asha")
    console.log("length of",word );
    // Problem:18
    
    // Write a function called “isSameLength".
    // Given two words, “isSameLength" returns whether the given words have the same length.
    
    // Input:
    // isSameLength(“GUVI", “GEEK");
    
    // Output:
    // true
    
    function isSameLength(word1, word2){
        return word1.length === word2.length;
    
    }
    let same = isSameLength('hut','not out');
    console.log("same length ",same)
    
    // Problem:19
    
    // Create a function to calculate the distance between two points defined by their x, y coordinates
    // console.log(getDistance(100, 100, 400, 300));
    function getDistance(x1, y1, x2, y2){
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx*dx + dy*dy);
    
    }
    let root = getDistance(2,4,6,8)
    console.log("distance between 2 points",root)
    
    // Problem:20
    
    // Write a function called “getNthElement".
    // Given an array and an integer, “getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
    
    // Input:
    // getNthElement([1, 3, 5], 1);
    
    // Output:
    // 3
    function getNthElement(array,n){
        if (n < 0 || n >= array.length){
            return undefined;
        }
        return array[n];    
    }
    let ele = getNthElement([3,4,2],1);
    console.log(ele)
    
    // Problem:21
    
    // Write a function called “getLastElement".
    // Given an array, “getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
    
    // Input:
    // getLastElement([1, 2, 3, 4]);
    
    // Output:
    // 4
    
    function getLastElement(array){
        if(array.length === 0 ){
            return undefined
        }
        else{
            return array[array.length-1]
        }
   
    }
    let element = getLastElement([1,3,3,9])
    console.log(element)
    
    // Problem:22
    
    // Write a function called “getProperty".
    // Given an object and a key, “getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
    
    // let obj = {
    // mykey: “value"
    // };
    
    // Input:
    // getProperty(obj,’mykey’);
    // getProperty(obj,’dummykey’);
    
    // Output:
    // value
    // NA
    let obj = {
    mykey: "val",
     };
    function getProperty(obj, key) {
        if (obj.hasOwnProperty(key)){
            return obj[key];
        }
        else{
            return undefined
        }
    }
    console.log(getProperty(obj,"mykey"));

    // Problem:23
    
    // Write a function called “addProperty".
    // Given an object and a key, “addProperty" adds a new property on the given object with a value of true.
    
    // let obj = {
    // }
    
    // Input:
    // addProperty(obj, “mykey");
    
    // Output:
    // {
    // mykey: true
    // }
    let obt = {
     mykey: "value",
     };
    function addProperty(obt, key,value){
        obt[key] = value;
   
    }
    console.log(obt);
    
    // Problem:24
    
    // Write a function called “removeProperty".
    // Given an object and a key, “removeProperty" removes the given key from the given object.
    
    // Input:
    // removeProperty(obj, “name");
    
    // Output:
    // undefined
    
    function removeProperty(obj, key){
        if(obj.hasOwnProperty(key)){
            delete obj[key];
            return true;
        }
        return undefined;   
    }
    const person = {
        firstName:'john',
        lastName:'doe',
        age:30,
    };

    console.log(removeProperty(person,"age"));
    console.log(removeProperty(person,"city"));
    
    
    // Problem:25
    
    // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
    function countPositivesSumNegatives(arr) {
        let countPositive = 0;
        let sumNegative = 0;
        for(let num of arr){
            if(num > 0){
                countPositive++;
            }
            else if (num < 0){
                sumNegative += num;
            }
        }
        return [countPositive,sumNegative];
        
    }
    console.log(countPositivesSumNegatives([2,-9,8,1,-3,-9,2,10]));
    
    // Problem:26
    
    // Create a function that receives an array of numbers and returns an array containing only the positive numbers
    function getPositives(ar)
    {
    const positiveNumbers =[]
    for(const number of ar){
        if(number > 0){
            positiveNumbers.push(number);
        }
    }
    return positiveNumbers
    }
    let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
    let ar222 = getPositives(ar);
    console.log(ar222);
    
    // Problem:27
    
    // Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
    // n = 0 -> 2⁰ -> [1]
    // n = 1 -> 2⁰, 2¹ -> [1,2]
    // n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
    
    // Input:
    // powersOfTwo(0)
    // powersOfTwo(1)
    // powersOfTwo(2)
    
    // Output:
    // 1
    // 1,2
    // 1,2,4
    function powersOfTwo(n){
        let result = [];
        for(let i = 0;i <= n;i++){
            result.push(2**i);
        }
      return result ;
    }
    const myarray = powersOfTwo(2)
    console.log(myarray)

    
    // Problem:28
    
    // Find the maximum number in an array of numbers
    function findMax(ary)
    {
        return Math.max(-5,10,-3,12,-9,5,90,0,1);
    
    }
    let ary = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
    let max = findMax(ary);
    console.log("Max:", max);
    
    
    // Problem:29
    
    // Print the first 100 prime numbers
    // printPrimes(100);
    
    // Function prints the first nPrimes numbers
    function printPrimes(nPrimes)
{
let number = 0;
let i = 2;

while(number < nPrimes)
{
if (isPrime(i))
{
console.log(number, " → ", i);
number++;
}
i++;
}
}
// Returns true if a number is prime
function isPrime(number)
{
if(number<=1)
    return false;
if(number<=3)
    return true;
if(number%2===0 || number%3==0)
    return false;
for(let i=5;i*i<=number;i+=6){
    if(number%i===0 || number%(i+2)===0)
        return false;
}
return true;
}
printPrimes(100);
    
    
    // Problem:30
    
    // Create a function that will return in an array the first “nPrimes" prime numbers greater than a particular number “startAt"
    // console.log(getPrimes(10, 100));
    function getPrimes(nPrimes, startAt) {
        const primes = [];
        let num = startAt + 1; // Start checking from the next number
    
        while (primes.length < nPrimes) {
            if (isPrime(num)) {
                primes.push(num);
            }
            num++;
        }
    
        return primes;
    }
    
    // Returns true if a number is prime
    function isPrime(n) {
        if (n <= 1) return false; // 0 and 1 are not prime numbers
        if (n <= 3) return true; // 2 and 3 are prime numbers
        if (n % 2 === 0 || n % 3 === 0) return false; // Exclude multiples of 2 and 3
    
        // Check for factors from 5 to √n
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
    
        return true;
    } 
    console.log(getPrimes(10,100));
    
    // Problem:31
    
    // Reverse a string
    let s = reverseString("JavaScript");
    console.log(s);
    function reverseString(s)
    {
        return s.split('').reverse().join(''); 
    }
    
    // Problem:32
    
    // Create a function that will merge two arrays and return the result as a new array
    // let ar1 = [1, 2, 3];
    // let ar2 = [4, 5, 6];
    // let ar = mergeArrays(ar1, ar2);
    // console.log(ar);
    function mergeArrays(ar1, ar2)
    {
    return ar1.concat(ar2);
    }
    let ar1 = [1,2,3];
    let ar2 = [8,9,4];
    let ar3 = mergeArrays(ar1,ar2);
    console.log(ar3);

    
    // Problem:33
    
    // Calculate the sum of numbers received in a comma delimited string
    //console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
    
    function sumCSV(s)
    {
        const numbers = s.split(',').map(num => parseFloat(num.trim()));
        let sum =0 ;
        for(let i = 0; i< numbers.length;i++){
            sum += numbers[i];
        }
        return sum;
        
        
    }
    let sumcsv = sumCSV(("1.5,2.3,3.1,4,5.5,6,7,8,9,10.9"))
    console.log(sumcsv)
    
   
    
    
    