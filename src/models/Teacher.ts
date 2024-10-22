import { Person } from './Person';
import { Student } from './Student';

export class Teacher extends Person {
    private students: Student[] = [];

    constructor(
        name: string,
        age: number,
        private subject: string
    ) {
        super(name, age);
    }

    public assignGrade(student: Student, grade: number): void {
        // ใช้ indexOf แทน includes
        if (this.students.indexOf(student) === -1) {
            throw new Error("Student is not assigned to this teacher");
        }
        student.addGrade(grade);
    }

    // หรือเขียนฟังก์ชันเช็คแยก
    private hasStudent(student: Student): boolean {
        return this.students.indexOf(student) !== -1;
    }

    public addStudent(student: Student): void {
        if (!this.hasStudent(student)) {
            this.students.push(student);
        }
    }

    public removeStudent(student: Student): void {
        const index = this.students.indexOf(student);
        if (index > -1) {
            this.students.splice(index, 1);
        }
    }

    public getSubject(): string {
        return this.subject;
    }

    public getStudents(): Student[] {
        return [...this.students];
    }
}