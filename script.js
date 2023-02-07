let user = {
name:"Azim",
surname:'kaxramonov',
age: 18,
gender:'male',
scholl: 45,
adress:"alishernavoiy",
phone:998915554438,
bol: true,
lob: false
}
let passport = {
    passportnumber: 77777777,
    data: 7777,
    exp: 2000
    
}
let user2 = Object.assign({}, user ,{passport})
console.log(user2)


let key = Object.keys(user2)
let valu = Object.values(user2)
let keyarray = key.concat(valu)
console.log(keyarray)

let totalString = keyarray.filter(n => typeof n === 'string')

console.log(totalString);

let totalNumber = keyarray.filter(n => typeof n === 'number')

console.log(totalNumber);

let totalBoolean = keyarray.filter(n => typeof n === 'boolean')

console.log(totalBoolean);

let totalObject = keyarray.filter(n => typeof n === 'object')

console.log(totalObject);
