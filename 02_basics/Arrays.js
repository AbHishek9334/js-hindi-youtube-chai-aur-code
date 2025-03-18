const myArr=[10,20,30,40,50]
// const myHeroes=["shaktiman","nagraj"]
// const myArr2=new Array(1,2,3,4)
// console.log(myArr[1])
// myArr.push(6)
// console.log(myArr)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.indexOf(60))
// const newString=myArr.join("-")
// console.log(typeof newString)
//slice and splice
console.log("A",myArr)
const myn1=myArr.slice(1,3)//slice doesnot modify the original array and last index is excluded`
console.log(myn1)
console.log("B",myArr)
const myn2=myArr.splice(1,3)//splice manipulates the original array and also the last index is included
console.log(myn2)
console.log("C",myArr)