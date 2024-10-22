import { Student } from './models/Student';
import { Teacher } from './models/Teacher';
import { AdminUser } from './models/Admin';
import { StudentService } from './services/StudentService';


// Wait for DOM to be ready
$(document).ready(function() {
    const studentService = new StudentService();

    // Handle student form submission
    $("#studentForm").on("submit", function(e) {
        e.preventDefault();
        const name = $("#studentName").val() as string;
        const age = parseInt($("#studentAge").val() as string);

        if (name && age) {
            const student = new Student(name, age);
            studentService.addStudent(student);
            
            $("#studentList").append(`
                <li>
                    ${name} (Age: ${age})
                    <button class="add-grade" data-student="${name}">Add Grade</button>
                </li>
            `);
            
            // Clear form
            $("#studentName").val("");
            $("#studentAge").val("");
            
            alert(`Student ${name} has been added successfully!`);
        }
    });

    // Handle adding grades
    $(document).on("click", ".add-grade", function() {
        const studentName = $(this).data("student");
        const grade = prompt("Enter grade (0-100):");
        
        if (grade !== null) {
            const gradeNum = parseInt(grade);
            if (gradeNum >= 0 && gradeNum <= 100) {
                // Find student and add grade
                const student = studentService.getStudentNames()
                    .find(name => name === studentName);
                if (student) {
                    // Add grade logic here
                    alert(`Grade ${gradeNum} added for ${studentName}`);
                }
            } else {
                alert("Grade must be between 0 and 100");
            }
        }
    });
});