function deleteStudent(button) {
    // Remove the student card
    button.parentElement.parentElement.remove();
}

function addStudent() {
    
    alert("Add student functionality coming soon!");
}

function search() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const studentCards = document.querySelectorAll(".student-card");

    studentCards.forEach(card => {
        const name = card.querySelector(".details p").textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function openModal() {
    document.getElementById("addStudentModal").style.display = "flex";
}


function closeModal() {
    document.getElementById("addStudentModal").style.display = "none";
}


document.querySelector("button[onclick='addStudent()']").onclick = openModal;


function addStudent() {
    const name = document.getElementById("studentName").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;

   
    const studentCards = document.getElementById("studentCards");
    const newCard = document.createElement("div");
    newCard.classList.add("student-card");
    newCard.innerHTML = `
        <img src="path/to/photo.jpg" alt="Student Photo">
        <div class="details">
            <p><strong>Student Name:</strong> ${name}</p>
            <p><strong>DOB:</strong> ${dob}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <button onclick="deleteStudent(this)">Delete</button>
        </div>
    `;

    studentCards.appendChild(newCard);

    
    closeModal();
    document.getElementById("addStudentForm").reset();
}
