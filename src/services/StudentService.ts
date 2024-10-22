import { Student } from '../models/Student';
import { Database } from '../database/Database';

export class StudentService {
    private studentDb: Database<Student>;

    constructor() {
        this.studentDb = new Database<Student>();
    }

    public async fetchStudentData(): Promise<{name: string, grades: number[]}> {
        try {
            // Simulate API call
            const response = await new Promise<{name: string, grades: number[]}>((resolve) => {
                setTimeout(() => {
                    resolve({
                        name: "John Doe",
                        grades: [85, 92, 78, 90]
                    });
                }, 1000);
            });
            return response;
        } catch (error) {
            throw new Error("Failed to fetch student data");
        }
    }

    public addStudent(student: Student): void {
        this.studentDb.addEntry(student);
    }

    public getHighPerformingStudents(): Student[] {
        return this.studentDb
            .getAllEntries()
            .filter(student => student.getAverageGrade() > 75);
    }

    public getStudentNames(): string[] {
        return this.studentDb
            .getAllEntries()
            .map(student => student.getName());
    }

    public getTotalGrades(): number {
        return this.studentDb
            .getAllEntries()
            .reduce((total, student) => 
                total + student.getGrades().length, 0);
    }
}