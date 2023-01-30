/*var test = window.prompt("Write something here and check the 'console'")
console.log(test)*/

/* Iteration 1: Basic Input/Output & Conditionals */

alert('You are in!')
var driverName = window.prompt("Write driver's name").toLowerCase()
console.log(`The driver's name is ${driverName}`)

var pilotName = window.prompt("Write pilot's name").toLowerCase()
console.log(`The pilot's name is ${pilotName}`)

// Counter of character of driver's Name
var counterDriver = 0
for(let i = 0; i<driverName.length; i++){
    counterDriver++
}

//Counter of character of pilot's Name

var counterPilot = 0 
for(let i = 0; i<pilotName.length; i++){
    counterPilot++
}

if(counterPilot < counterDriver){
  console.log(`The driver has the longest name, it has ${counterDriver} character`)
} else if (counterPilot > counterDriver){
  console.log(`Yo, Pilot got the longest name, it has ${counterPilot} characters`)
} else {
    console.log(`Wow, you both got equally long names, ${counterDriver} characters`)
}

/* Iteration 2: String Loops*/

/* 1. 1. Print all the characters of the driver's name, 
separated by a space.
"m i c h a e l"
*/

let newDriverName = ''
for(let i = 0; i < driverName.length; i++){
    newDriverName += driverName[i].toLowerCase() + ' '
}
console.log(newDriverName)

/* 2. Print all the characters of the driver's name, separated by a dash and ending with an exclamation mark!
"m-i-c-h-a-e-l!"
*/

let driverNameNew = ''
for (let i = 0; i < driverName.length; i++){
    if (i === driverName.length -1){
        driverNameNew += driverName[i].toLowerCase() + '!'
    } else {
        driverNameNew += driverName[i].toLowerCase() + '-'
    }
}
console.log(driverNameNew)

/* 3. Print all the characters of the pilot's name, in reverse order and [UpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
```
"L E A H C I M"
```*/
let newPilotName = ''
for(let i = pilotName.length - 1; i >=0 ;i--){
    newPilotName += pilotName[i] + ' '
}
console.log(newPilotName)

/* Iteration 3: Number Conditionals & Loops */

/* 1. Write a loop that will print all the numbers from 1-20*/

let num = []

for (let i = 1; i <= 20; i++) {
    num.push(i)
}
console.log(num)

/* 1. Write a loop that will print all ODD the numbers smaller than 128 that are divisible by 3, but not divisible by 5.*/

let oddNums= []

for (let i = 0; i < 128; i++) {
    if (i%2 === 1 && i % 3 === 0 && i%5 !== 0){
        oddNums.push(i)
    }
}

console.log(oddNums)

/* 2.Write a loop that will write all the [powers of 2](https://www.varsitytutors.com/hotmath/hotmath_help/topics/exponent-tables-and-patterns) from 2^1 (2) to 2^10 (1024)*/

let powersNum = []

for (let i = 1 ; i <=10; i++){
    let num = Math.pow(2,i)
    powersNum.push(num)
}

console.log(powersNum)

/* Iteration 4: Bonus Time! */

/*1. Generate 3 paragraphs. Store the text in a `lorem` variable */

var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo vel. Molestie a iaculis at erat pellentesque. Cras tincidunt lobortis feugiat vivamus at augue. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Tellus at urna condimentum mattis pellentesque id nibh tortor. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Lorem sed risus ultricies tristique nulla. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mollis aliquam ut porttitor leo. Sed turpis tincidunt id aliquet risus feugiat. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Vestibulum lorem sed risus ultricies. Velit sed ullamcorper morbi tincidunt ornare. Aliquet bibendum enim facilisis gravida. Nunc scelerisque viverra mauris in aliquam sem. Felis imperdiet proin fermentum leo.

Risus sed vulputate odio ut enim blandit. Duis tristique sollicitudin nibh sit amet commodo. Elementum sagittis vitae et leo duis ut. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Purus viverra accumsan in nisl nisi scelerisque eu. Molestie nunc non blandit massa enim. Quis eleifend quam adipiscing vitae proin sagittis nisl. Lorem ipsum dolor sit amet consectetur. Diam quam nulla porttitor massa id neque aliquam vestibulum. Quam viverra orci sagittis eu. Aliquam faucibus purus in massa tempor nec feugiat nisl.

Tristique senectus et netus et. Quis ipsum suspendisse ultrices gravida dictum fusce. Lectus mauris ultrices eros in cursus turpis massa. Porttitor leo a diam sollicitudin. A diam sollicitudin tempor id. Ultricies leo integer malesuada nunc vel risus. Ac turpis egestas sed tempus urna et pharetra. Elementum tempus egestas sed sed risus pretium quam. Vel pretium lectus quam id leo in vitae turpis. Amet est placerat in egestas erat.`

/*2. Make your program count the number of words in the `lorem`*/

let numWords = 0 
let split = lorem.split(' ')

for (let i = 0; i < split.length; i++) {
    if (split[i] != '') {
        numWords ++
    }
}
console.log(numWords)

/*3. Make your program count the number of times the Latin word `et` appears in `lorem`*/

let numTimes = lorem.toLowerCase().split(` et `).length-1

console.log(numTimes)