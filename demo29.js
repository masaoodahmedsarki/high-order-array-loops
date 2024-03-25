//********************for of***************************

//["","",""]
//[{},{},{},]

const arr = [1 , 2 , 3 , 4 , 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Masood Ahmed"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);    
}

// Maps

const map = new Map()
map.set("Pak", "Pakistan")
map.set("USA", "united states of america")
map.set("Fr", "France")

//console.log(map)

for (const [key, value] of map) {
    // console.log(key ,':-', value)
}

//const myObject =
//  {
//     'game1': 'gta sanendira',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key ,':-', value)   
// }

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift for apple',
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["Js", "cpp", "rb", "py", "swift"]

for (const [key , value] in programming) {
      //console.log(`${key} keys for ${programming[key]}`);
}


 const coding = ["javascript", "java","python" , "ruby"]
 coding.forEach( function(val){
//     console.log(val)
 } )

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
     console.log(item)
}
//coding.forEach(printMe);

coding.forEach( (item, index , arr) =>{
    console.log (item, index , arr)
} )

const myCoding = [
    {
languageName :"Javascript",
languageFileName :"Js"
},
    {
languageName :"Java",
languageFileName :".java"
},
    {
languageName :"Python",
languageFileName :"py"
}

]

myCoding.forEach( (item) =>{
    console.log(item.languageName)
} )