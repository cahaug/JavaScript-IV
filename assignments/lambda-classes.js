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
        for(let i=0;i<favSubjects.length;i++){console.log(favSubjects[i]) }
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

const keiran = new Instructor({
    name: 'Keiran',
    location: 'Online',
    age: 25,
    gender: 'male',
    favLanguage: 'JavaScript, HTML',
    specialty: 'Back-end',
    catchPhrase: `Can anyone tell me...?`
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

const ira = new Student({
    name: 'Ira',
    location: 'Phoenix, AZ',
    age: 27,
    gender: 'male',
    previousBackground: 'Lots of cool jobs in diverse areas',
    className:'Web PT3 Flex',
    favSubjects: ['React', 'CSS', 'Javascript']
});

const ronaldCho = new ProjectManager({
    name: 'Ronald Cho',
    location: 'The Beach',
    age: 55,
    gender: 'male',
    gradClassName: 'Web PT X',
    favInstructor: 'Josh Knell'
});

const vivaCode = new ProjectManager({
    name: 'Emily McClanahan',
    location: 'The north',
    age: 29,
    gender: 'female',
    gradClassName: 'Web Fulltime 6',
    favInstructor: 'Keiran'
});

console.log("=======Instructor 1======")
console.log(fred);
console.log(fred.demo('Preprocessing I'));
console.log(fred.speak());
console.log(fred.grade(cale, 'Javascript IV'));

console.log("=======Instructor 2======")
console.log(keiran);
console.log(keiran.demo('Preprocessing I'));
console.log(keiran.speak());
console.log(keiran.grade(cale, 'Javascript IV'));


console.log("========Student 1=======")
console.log(cale);
console.log(cale.speak());
console.log(cale.listsSubjects(cale.favSubjects));
console.log(cale.PRAssignment(cale, 'Preprocessing II'));
console.log(cale.sprintChallenge(cale, 'Javascript III'));

console.log("========Student 2=======")
console.log(ira);
console.log(ira.speak());
console.log(ira.listsSubjects(ira.favSubjects));
console.log(ira.PRAssignment(ira, 'Preprocessing II'));
console.log(ira.sprintChallenge(ira, 'Javascript III'));


console.log("======ProjectManager 1=====")
console.log(ronaldCho);
console.log(ronaldCho.speak());
console.log(ronaldCho.standUp('Web PT6 - Ronald Cho'));
console.log(ronaldCho.debugsCode(cale, 'Intro To Git'));

console.log("======ProjectManager 2=====")
console.log(vivaCode);
console.log(vivaCode.speak());
console.log(vivaCode.standUp('Web PT6 - Ronald Cho'));
console.log(vivaCode.debugsCode(cale, 'Intro To Git'));