let sum = 0
let name = "Philip"
let age = 24
let isStudent = true
let grades = [50,23,46,70]
let student = {
    name: 'Philips',
    age: 20,
    gradees: grades ,
}
let htmlName = document.querySelector('.name')
let htmlAge = document.querySelector('.age')
let htmlGrades = document.querySelector('.grades')

htmlName.innerHTML = `Имя: ${student.name}`
htmlAge.innerHTML = `Возраст: ${student.age} лет`
htmlGrades.innerHTML = `Балл: ${student.gradees}`

console.log(typeof tr);
console.log(typeof string);
console.log(typeof number);
console.log(typeof grades);
console.log(typeof obj);

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
    sum +=  grades[i]
}
console.log(sum)
console.log(sum/grades.length)

function arrPropX10() {
    let array = []
    for (let i = 0; i < grades.length; i++) {
        array.push(grades[i]*10)
    } 
    console.log(array)
}

arrPropX10()



class Student{
    constructor(name, age, gr) {
        this.name = name
        this.age = age
        this.gr = gr
      }

      srball(){
        let su = 0
        for (let i = 0; i < this.gr.length; i++) {
            su +=  this.gr[i]
        }
        return su/this.gr.length
      }
}

let persic = new Student('Евгений', 23, [1,2,3,4,5] )

console.log(`sr${persic.srball()}`);

function avgBall() {
    sum = 0
    let htmlSrball = document.querySelector('.srball')
    for (let i = 0; i < grades.length; i++) {
        console.log(grades[i]);
        sum +=  grades[i]
    }
    htmlSrball.innerHTML = `Средний балл: ${sum/grades.length}`
}