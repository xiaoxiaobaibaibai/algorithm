
let obj = {
    name: 'bai',
    age: 12
}, arr = [1,2,3]

Object.getOwnPropertyDescriptors(obj)  // enumerable: true
// arr[Symbol.iterator]()  // => next()

class Person {
    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age
    }
}
const zhangsan = new Student('zhangsan', 12)
console.log(zhangsan instanceof Person)

function myInstanceof(obj1, obj2) {
    let obj1Proto = obj1.__proto__
    if (obj1Proto === null) return  false;
    while (true) {
        if (obj1.__proto__ === obj2.prototype) {
            return true
        }
        obj1Proto = obj1Proto.__proto__
    }
}