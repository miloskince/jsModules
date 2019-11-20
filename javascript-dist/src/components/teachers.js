import TeacherS from './teacher';
import { countItems ,Gender } from '../services/utils';
import Teacher from './teacher';

const teachers = [
    {
        firstName: 'Prvi',
        lastName: 'Profesor',
        age:40,
        gender:0,
        yearOfStudy:10
    },
    {
        firstName: 'Drugi',
        lastName: 'Profesorka',
        age:31,
        gender:1,
        yearOfStudy:4
    }
];
export default class Teachers{
    constructor(){}
    getTeachers(){
        let html = '<ul>';
        teachers.forEach(teacher=>{
            let item = new Teacher(teacher.firstName, teacher.lastName, teacher.age, Gender[teacher.gender], teacher.yearOfStudy);
            html += item.getTeacher();
        });
        html += '</ul>'
        console.log('Init teachers', countItems(teachers));
        return html;
    }
}