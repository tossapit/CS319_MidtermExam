import { Person } from './Person';

export class Student extends Person {
    private grades: number[] = [];
    private static studentCount: number = 0;

    constructor(name: string, age: number) {
        super(name, age);
        Student.studentCount++;
    }

    public addGrade(grade: number): void {
        if (grade < 0 || grade > 100) {
            throw new Error("Grade must be between 0 and 100");
        }
        this.grades.push(grade);
    }

    public getAverageGrade(): number {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }

    public static totalStudents(): number {
        return Student.studentCount;
    }

    public getGrades(): number[] {
        return [...this.grades];
    }
}