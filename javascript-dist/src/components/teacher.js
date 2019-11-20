export default class Teacher{
    constructor(
        firstName,
        lastName,
        age,
        gender,
        workingYears
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.workingYears = workingYears;
        console.log(`Init student - ${this.firstName}`);
    }
    getTeacher(){
        return `<li>${this.firstName} ${this.lastName}</li>`
    }
}