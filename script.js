// Student array to store all students
let students = [];

// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');
const searchInput = document.getElementById('searchInput');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const closeModal = document.querySelector('.close');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    displayStudents(students);
});

// Add Student
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const student = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentId').value,
        email: document.getElementById('studentEmail').value,
        course: document.getElementById('studentCourse').value,
        grade: document.getElementById('studentGrade').value
    };
    
    students.push(student);
    saveStudents();
    displayStudents(students);
    studentForm.reset();
    
    showNotification('Student added successfully!');
});

// Display Students
function displayStudents(studentsToDisplay) {
    if (studentsToDisplay.length === 0) {
        studentList.innerHTML = '<p class="empty-message">No students found.</p>';
        return;
    }
    
    studentList.innerHTML = studentsToDisplay.map((student, index) => `
        <div class="student-card">
            <div class="student-info">
                <h3>${student.name}</h3>
                <p class="student-detail"><strong>ID:</strong> ${student.id}</p>
                <p class="student-detail"><strong>Email:</strong> ${student.email}</p>
                <p class="student-detail"><strong>Course:</strong> ${student.course}</p>
                <p class="student-detail"><strong>Grade:</strong> <span class="grade-badge grade-${student.grade.replace('+', '\\+')}">${student.grade}</span></p>
            </div>
            <div class="student-actions">
                <button class="btn btn-edit" onclick="editStudent(${index})">Edit</button>
                <button class="btn btn-delete" onclick="deleteStudent(${index})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Search Students
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().includes(searchTerm) ||
        student.id.toLowerCase().includes(searchTerm) ||
        student.email.toLowerCase().includes(searchTerm) ||
        student.course.toLowerCase().includes(searchTerm)
    );
    displayStudents(filteredStudents);
});

// Edit Student
function editStudent(index) {
    const student = students[index];
    
    document.getElementById('editIndex').value = index;
    document.getElementById('editName').value = student.name;
    document.getElementById('editId').value = student.id;
    document.getElementById('editEmail').value = student.email;
    document.getElementById('editCourse').value = student.course;
    document.getElementById('editGrade').value = student.grade;
    
    editModal.style.display = 'block';
}

// Update Student
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const index = document.getElementById('editIndex').value;
    
    students[index] = {
        name: document.getElementById('editName').value,
        id: document.getElementById('editId').value,
        email: document.getElementById('editEmail').value,
        course: document.getElementById('editCourse').value,
        grade: document.getElementById('editGrade').value
    };
    
    saveStudents();
    displayStudents(students);
    editModal.style.display = 'none';
    
    showNotification('Student updated successfully!');
});

// Delete Student
function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student?')) {
        students.splice(index, 1);
        saveStudents();
        displayStudents(students);
        showNotification('Student deleted successfully!');
    }
}

// Close Modal
closeModal.addEventListener('click', () => {
    editModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === editModal) {
        editModal.style.display = 'none';
    }
});

// Save to memory (you can modify this to use a backend)
function saveStudents() {
    // In a real application, this would send data to a server
    // For this demo, we're just keeping data in memory
    console.log('Students saved:', students);
}

// Load from memory (you can modify this to fetch from a backend)
function loadStudents() {
    // In a real application, this would fetch data from a server
    // For this demo, we start with empty array
    students = [];
}

// Show Notification (simple alert for now)
function showNotification(message) {
    // You can replace this with a better notification system
    alert(message);
}