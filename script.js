// JavaScript to handle modal, task addition, and navigation

const modal = document.getElementById("task-modal");
const openModalBtn = document.getElementById("open-modal");
const cancelTaskBtn = document.getElementById("cancel-task");
const addTaskBtn = document.getElementById("add-task");

const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");

let currentSection = "inbox";

// Modal control
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

cancelTaskBtn.onclick = function() {
    modal.style.display = "none";
}

addTaskBtn.onclick = function() {
    const taskName = document.getElementById("task-name").value;
    const taskDesc = document.getElementById("task-desc").value;
    
    if (taskName) {
        addTask(taskName, taskDesc, currentSection);
        document.getElementById("task-name").value = '';
        document.getElementById("task-desc").value = '';
        modal.style.display = "none";
    } else {
        alert("Task name is required!");
    }
}

function addTask(name, desc, section) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    const taskTitle = document.createElement("h4");
    taskTitle.textContent = name;
    
    const taskDescription = document.createElement("p");
    taskDescription.textContent = desc;
    
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);
    
    const taskList = document.getElementById(`tasks-list-${section}`);
    taskList.appendChild(taskItem);
    
    const emptyState = document.getElementById(`empty-state-${section}`);
    if (taskList.children.length > 0) {
        emptyState.style.display = "none";
    }
}

// Navigation control
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        // Remove 'active' class from all menu items
        menuItems.forEach(menu => menu.classList.remove("active"));
        // Add 'active' class to the clicked menu item
        item.classList.add("active");

        // Hide all content sections
        contentSections.forEach(section => section.classList.remove("active"));
        
        // Show the selected content section
        currentSection = item.getAttribute("data-section");
        document.getElementById(currentSection).classList.add("active");
    });
});


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
