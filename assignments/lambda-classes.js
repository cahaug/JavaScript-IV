// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name=props.name;
        this.age=props.age;
        this.location=props.location;
        this.gender=props.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty=props.specialty;
        this.favLanguage=props.favLanguage;
        this.catchPrase=props.catchPrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground=props.previousBackground;
        this.className=props.className;
        this.favSubjects=props.favSubjects;
    }
    listsSubjects(favSubjects){
        for(let i=0;i<favSubjects.length;i++){console.log(favSubjects[i])}
    }
    PRAssignment(student, subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(props){
        super(props);
        this.gradClassName=props.gradClassName;
        this.favInstructor=props.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const cale = new Student({
    name: 'Cale',
    location: 'Scottsdale, AZ',
    age: 22,
    gender: 'male',
    previousBackground: 'Some University, Safeway Manager, Tech Enthusiast',
    className:'Web PT6',
    favSubjects: ['HTML', 'LESS', 'Javascript']
});

const ronaldCho = new ProjectManager({
    name: 'Ronald Cho',
    location: 'The Beach',
    age: 55,
    gender: 'male',
    gradClassName: 'Web PT X',
    favInstructor: 'Josh Knell'
});

console.log("=======Instructor======")
console.log(fred);
console.log(fred.demo('Preprocessing I'));
console.log(fred.speak());
console.log(fred.grade(cale, 'Javascript IV'));


console.log("========Student=======")
console.log(cale);
console.log(cale.speak());
// console.log(cale.listsSubjects(favSubjects));
console.log(cale.PRAssignment(cale, 'Preprocessing II'));
console.log(cale.sprintChallenge(cale, 'Javascript III'));


console.log("======ProjectManager=====")
console.log(ronaldCho);
console.log(ronaldCho.speak());
console.log(ronaldCho.standUp('Web PT6 - Ronald Cho'));
console.log(ronaldCho.debugsCode(cale, 'Intro To Git'));