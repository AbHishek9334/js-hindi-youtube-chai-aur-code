//objects literals
// const mySym=Symbol("Keys1")
// const JsUser={
//     name:"Hitesh",
//     [mySym]:"myKeys1",
//     age:18,
//     location:"Jaipur",
//     email:"hitesh@google.com",
//     isLoggedIn:false,
//     lastLogInDays:["Monday","Saturday"]
//  }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log( JsUser[mySym])
// JsUser.email="hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email="hitesh@microsoft.com"
// console.log(JsUser)
// JsUser.greeting=function(){
//     console.log(`Hello Js user`)
// }
// JsUser.greetingTwo=function(){
//     console.log(`Hello JS user,${this.name}`)
// }
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())
// const regularUser={
//     email:"some@gmail.com",
//     fullName:{
//         userFullName:{
//             firstName:"hitesh",
//             lastName:"choudhary"
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.firstName)
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj3={5:"a",6:"b"}
// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)
// console.log(obj1)
//spreadout operator
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)
// const users=[
//     {
//         id:1,
//         email:"h@gmail.com"
//     },
//     {
//         id:2,
//         email:"a@gmail.com"
//     }
// ]
// console.log(users[0].id)
// console.log(users[0].email)
// console.log(Object.keys(JsUser))
// console.log(Object.values(JsUser))
// console.log(Object.entries(JsUser))
// console.log(JsUser.hasOwnProperty("name"))
//destructing
const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseName,price,courseInstructor}=course
console.log(courseName,price,courseInstructor)