//for of
// const arr=[1,2,3,4,5]
// for(const num of arr){
//     console.log(num)
// }
// const greetings="Hello world"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }
//map is iterable using for of
// const map=new Map()
// map.set("IN","India")
// map.set("USA","United States of America")
// map.set("Fr","France")
// map.set("In","canada")
// map.set("IN","jaipur")
// map.set("USA","America")
// console.log(map)
// for(const [key,value] of map){
//     console.log(key,":-",value)
// }
//object is not iterable using for of
// const myObject={
//     game1:"NFS",
//     game2:"spiderman"
// }
// for(const [key,value] of myObject){
//     console.log(key,value)
// }
//for in
//object is iterable using for in
// const myObject={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for(const key in myObject){
//     console.log(`${key} is the extension of ${myObject[key]}`)
// }
// const programming=["js","rb","py","java","cpp"]
// for(const key in programming){
//     console.log(programming[key])
// }
//Map
// const map=new Map()
// map.set("IN","India")
// map.set("USA","United States of America")
// map.set("Fr","France")
// map.set("In","canada")
// map.set("IN","jaipur")
// map.set("USA","America")
// for(const key in map){
//     console.log(key)
// }
//forEach loop
const coding=["js","python","java","ruby","cpp"]
// coding.forEach(function (val){
//     console.log(val)
// })
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})
