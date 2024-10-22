Part 1: Classes and Object-Oriented Programming
การเขียนโปรแกรมเชิงวัตถุ (Object-Oriented Programming, OOP)
สร้างคลาส Person และ Student ซึ่งมีคุณสมบัติ (properties) และเมธอด (methods) ใช้การสืบทอด (inheritance) โดยคลาส Student สืบทอดจาก Person
มีตัวแปร static เพื่อเก็บค่าจำนวนของนักเรียน (studentCount)
ใช้ constructor สำหรับการสร้างวัตถุใหม่

Part 2: Inheritance and Polymorphism
การสืบทอด (Inheritance) และการจัดรูปแบบหลายอย่าง (Polymorphism)
คลาส Teacher สืบทอดจาก Person และเพิ่มความสามารถเฉพาะตัวเช่น การเก็บข้อมูลนักเรียนและการให้คะแนนนักเรียน
ใช้การจัดรูปแบบหลายอย่างในการสืบทอดจาก Person เพื่อปรับใช้ฟังก์ชันแบบเดียวกันในคลาสลูก (Student, Teacher)

Part 3: Type Annotations and Interfaces
การใช้อินเทอร์เฟซ (Interfaces) และการกำหนดชนิดข้อมูล (Type Annotations)
ใช้อินเทอร์เฟซ Admin เพื่อกำหนดโครงสร้างของวัตถุที่เป็นแอดมิน
ฟังก์ชัน getAdminInfo ใช้ประโยชน์จากการกำหนดชนิดข้อมูล เพื่อระบุข้อมูลที่ควรรับเข้ามาและส่งออกไป

Part 4: Generics
การใช้ Generic ในคลาส
คลาส Database ถูกออกแบบให้รองรับข้อมูลที่มีชนิดต่าง ๆ ด้วยการใช้ Generics ทำให้สามารถเก็บข้อมูลชนิดต่าง ๆ ได้โดยไม่ต้องระบุชนิดที่แน่นอน

Part 5: Functions and Higher-Order Functions
การใช้ฟังก์ชันระดับสูง (Higher-Order Functions)
ฟังก์ชัน createBonusAdder สร้างฟังก์ชันอีกฟังก์ชันหนึ่งเพื่อเพิ่มโบนัสให้กับคะแนนของนักเรียน
ฟังก์ชันระดับสูงสามารถรับหรือคืนค่าฟังก์ชันอื่นๆ ได้ ซึ่งช่วยให้การทำงานมีความยืดหยุ่นมากขึ้น

Part 6: Asynchronous Programming
การเขียนโปรแกรมแบบอะซิงโครนัส (Asynchronous Programming)
ฟังก์ชัน fetchStudentData ใช้ async/await เพื่อทำการดึงข้อมูลแบบอะซิงโครนัส ซึ่งจำลองการเรียก API เพื่อดึงข้อมูลนักเรียน
การจัดการข้อผิดพลาดแบบอะซิงโครนัสผ่าน try/catch

Part 7: Array Methods
การใช้เมธอดอาร์เรย์ (Array Methods)
ใช้เมธอด filter สำหรับการกรองนักเรียนที่มีคะแนนเฉลี่ยสูงกว่า 75
ใช้เมธอด map เพื่อดึงชื่อของนักเรียน
ใช้ reduce ในการคำนวณจำนวนคะแนนทั้งหมดของนักเรียนทุกคน

Part 8: Error Handling
การจัดการข้อผิดพลาด (Error Handling)
ฟังก์ชัน parseJSONData ใช้ try/catch เพื่อตรวจสอบความถูกต้องของข้อมูล JSON และจัดการข้อผิดพลาดหากมีการพยายาม parse ข้อมูลที่ไม่ถูกต้อง

Part 9: jQuery DOM Manipulation
การใช้ jQuery ในการจัดการ DOM
ใช้ $(document).ready() เพื่อตรวจสอบว่าเอกสาร (DOM) ถูกโหลดเรียบร้อยแล้ว
ใช้ $("#studentForm").on("submit") เพื่อจับ event การส่งฟอร์ม และจัดการข้อมูลจากอินพุตเพื่อแสดงผลในหน้าเว็บ
